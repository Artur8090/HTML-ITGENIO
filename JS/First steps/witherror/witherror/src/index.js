import lastNewsCardConfig from "./lastNewsCardConfig.js";
import newsMainCardConfig from "./newsMainCardConfig.js";
import trendsNewsCardConfig from "./trendsNewsCardConfig.js";
import outCards from "./outCards.js";
import { news } from "./backend.js";

export function activateMainPage() {
  outCards(news, newsMainCardConfig);
  const sortByRateNews = [...news].sort(
    (n1, n2) => n2.likesCount - n1.likesCount
  );
  outCards(sortByRateNews, trendsNewsCardConfig);
  const sortByTimeNews = [...news].sort((n1, n2) => n2.date - n1.date);
  outCards(sortByTimeNews, lastNewsCardConfig);
}
activateMainPage();
