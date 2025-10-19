import { createRouter, createWebHistory } from "vue-router";
import TransactionListView from "../views/TransactionListView.vue";

const routes = [
  {
    // 앱의 첫 페이지 주소
    path: "/",
    name: "TransactionList",
    // 이 주소로 접속했을 때 보여줄 컴포넌트
    component: TransactionListView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
