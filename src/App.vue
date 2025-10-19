<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import BottomNav from "./components/BottomNav.vue";
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <BottomNav />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column; /* 자식요소들 세로 방향 (위->아래) 배치 */
  height: 100vh;
  background-color: #fff;
  color: #000;
}

.main-content {
  flex: 1; /* 헤더와 네비션을 제외한 모든 공간 차지 */
  overflow-y: auto; /* 내용이 길어지면 스크롤*/
  padding: 16px;
}
</style>
