import { addComment, fullNews, loggedUser, news } from "../src/backend.js";
import { addStatistic, addTag, makeFriendlyNumber } from "./helpers.js";
import { DATE_OPTION } from "./options.js";
import outCards from "./outCards.js";
import { switchToNews } from "./router.js";
import { configCardNode } from "./lastNewsCardConfig.js";
import outComments from "./outComments.js";

const newsPage = document.getElementById("news-page");
const addCommentContainer = document.getElementById("add-comment-container");

export default function outNews(newsId) {
  newsPage.id = newsId;
  const sortByDate = [...news].sort((n1, n2) => n2.date - n1.date);
  outCards(sortByDate, { configCardNode, id: "last-news-container-newspage" });
  const oneNews = fullNews.find((n) => n.id === newsId);
  addStatistic(newsPage.children[0], oneNews.likesCount, oneNews.commentsCount);
  outOneNews(newsPage.children[1], oneNews);
  // другой вызов
  configAddCommentContainer(newsId);
  outComments(newsId);
  switchToNews();
}

function outOneNews(
  newsContainer,
  // commentsCount потерял
  { tag, title, date, img, text, commentsCount }
) {
  const infoContainer = newsContainer.children[0];
  addTag(infoContainer.children[0], tag);
  infoContainer.children[1].innerText = date.toLocaleString("ru", DATE_OPTION);
  newsContainer.children[1].innerText = title;
  newsContainer.children[2].src = img;
  newsContainer.children[3].innerText = text;
  newsContainer.children[4].children[0].innerHTML = `Комментарии: <span>${makeFriendlyNumber(
    commentsCount
  )}</span>`;
}

function configAddCommentContainer(newsId) {
  addCommentContainer.children[0].src = loggedUser.img;
  const contentContainer = addCommentContainer.children[1];
  const buttonContainer = contentContainer.children[1];
  buttonContainer.children[0].onclick = () => {
    contentContainer.children[0].value = "";
  };
  buttonContainer.children[1].onclick = () => {
    addComment(contentContainer.children[0].value, newsId);
    contentContainer.children[0].value = "";
    outComments(newsId);
  };
}
