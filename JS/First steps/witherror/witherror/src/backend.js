let lastCommentId = 2;
// let lastCommentId = 2; - если коммы все уберешь то поставить 0 не забудь
let lastId = 2;

export const news = [
  {
    id: 1,
    tag: "sport",
    img: "./public/news1.jpg",
    date: new Date(2020, 10, 4, 11, 58),
    title: "Требониан Галл происходил из старинного этрусского рода...",
    description:
      "Будущий император Гай Вибий Требониан Галл родился около 206 года...",
    likesCount: 11500,
    commentsCount: 11500,
    isLiked: true,
  },
  {
    id: 2,
    tag: "finance",
    img: "./public/news1.jpg",
    date: new Date(2020, 10, 4, 11, 58),
    title: "Рандомный загаловок1",
    description: "Рандомный Текст1",
    likesCount: 240000,
    commentsCount: 11500,
    isLiked: true,
  },
];

export const fullNews = [
  {
    id: 1,
    tag: "sport",
    img: "./public/news1.jpg",
    date: new Date(2020, 10, 4, 11, 58),
    title: "Требониан Галл происходил из старинного этрусского рода...",
    description:
      "Будущий император Гай Вибий Требониан Галл родился около 206 года...",
    likesCount: 20000,
    commentsCount: 11500,
    isLiked: true,
  },
  {
    id: 2,
    tag: "finance",
    img: "./public/news1.jpg",
    date: new Date(2020, 10, 4, 11, 58),
    title: "Рандомный загаловок1",
    description: "Рандомный Текст1",
    likesCount: 11500,
    commentsCount: 11500,
    isLiked: true,
  },
];

export function addNews(newArticle) {
  const article = {
    ...newArticle,
    id: lastId,
  };
  lastId++;
  fullNews.push(article);

  const { text, ...fields } = article;
  news.push({
    ...fields,
    description: text.slice(0, 100),
  });
  return article;
}

export const loggedUser = {
  id: 1,
  username: "Дядя Володя",
  img: "./public/user_logo.svg",
};

export function updateComment(id, text) {
  allComments.find((c) => c.id === id).text = text;
}

export function updateSubComment(id, text) {
  allComments
    .find((c) => c.subComments.find((sc) => sc.id === id))
    .subComments.find((sc) => sc.id === id).text = text;
}

export const allComments = [
  {
    id: 1,
    newsId: 1,
    text: "текст комметария",
    user: {
      userId: 1,
      username: "Иван Иванов",
      img: "./public/user_logo.svg",
    },
    subComments: [
      {
        id: 1,
        commentId: 1,
        newsId: 1,
        userToAnswer: {
          userId: 2,
          username: "Олег Викторов",
          img: "./public/user_logo.svg",
        },
        text: "текс подкомментария",
        user: {
          userId: 1,
          username: "Иван Иванов",
          img: "./public/user_logo.svg",
        },
      },
    ],
  },
  {
    id: 2,
    newsId: 1,
    text: "текст комметария2",
    user: {
      userId: 1,
      username: "Иван Иванов",
      img: "./public/user_logo.svg",
    },
    subComments: [
      {
        id: 1,
        commentId: 1,
        newsId: 1,
        userToAnswer: {
          userId: 2,
          username: "Олег Викторов",
          img: "./public/user_logo.svg",
        },
        text: "текс подкомментария",
        user: {
          userId: 1,
          username: "Иван Иванов",
          img: "./public/user_logo.svg",
        },
      },
    ],
  },
];

export function addComment(text, newsId) {
  lastCommentId++;
  allComments.push({
    newsId,
    text,
    id: lastCommentId,
    user: { ...loggedUser },
  });
}

export function addSubComment(newsId, text, user, answerTo) {
  const subComments = allComments.find((c) => c.id === newsId).subComments;
  subComments.push({
    id: subComments[subComments.length - 1].id + 1,
    text,
    user,
    answerTo,
  });
}
