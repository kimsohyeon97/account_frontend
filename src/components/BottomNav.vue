<!-- 
:class="{ active: activeTab === 'stats' }"
:는 v-bind: 의 줄임
{}: 클래스를 객체 형태로 여러 개 관리
acitve: 적용하고 싶은 css 클래스 이름
active === 'stats': 조건문
-->

<script setups></script>

<template>
  <nav class="bottom-nav">
    <div class="nav-item" :class="{ active: active === 'ledger' }">
      <font-awesome-icon icon="fa-solid fa-book" class="icon" />
      <span>가계부</span>
    </div>
    <div class="nav-item" :class="{ active: activeTab === 'stats' }">
      <font-awesome-icon icon="fa-solid fa-chart-pie" class="icon" />
      <span>통계</span>
    </div>
    <div class="nav-item" :class="{ active: activeTab === 'assets' }">
      <font-awesome-icon icon="fa-solid fa-wallet" class="icon" />
      <span>자산</span>
    </div>
    <div class="nav-item" :class="{ active: activeTab === 'more' }">
      <font-awesome-icon icon="fa-solid fa-ellipsis" class="icon" />
      <span>더보기</span>
    </div>
  </nav>
</template>

<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 60px;
  border-top: 1px solid #e0e0e0;
  flex-shrink: 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  color: #828282; /* 비활성화된 탭 색상 */
  cursor: pointer; /* 마우스 커서를 올렸을 때 손가락 아이콘으로 바꿔라 */
}

.nav-item .icon {
  font-size: 1.25rem;
  margin-bottom: 4px;
}

.nav-item .active {
  color: #333;
}
</style>
