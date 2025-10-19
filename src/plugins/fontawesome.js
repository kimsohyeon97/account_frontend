// src/plugins/fontawesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMagnifyingGlass, // 돋보기
  faStar, // 별
  faFilterCircleDollar, // 필터
  faBook, // 가계부
  faChartPie, // 통계
  faWallet, // 자산
  faEllipsis, // 더보기
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faMagnifyingGlass,
  faStar,
  faFilterCircleDollar,
  faBook,
  faChartPie,
  faWallet,
  faEllipsis
);

export { FontAwesomeIcon };
