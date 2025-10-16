<script setup>
const emit = defineEmits(["view"]);

function go(view) {
  emit("view", view);
}
</script>

<template>
  <div class="container">
    <header>
      <h4>가계부</h4>
    </header>

    <main>
      <slot />
    </main>

    <nav>
      <button @click="go('calendar')">달력</button>
      <!--안에 일지, 주별, 아이폰 calendar ui 참고-->
      <button @click="go('budget')">예산</button>
      <button @click="go('stats')">통계</button>
      <button @click="go('setting')">설정</button>
    </nav>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  position: relative;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

main {
  flex: 1;
  overflow: auto;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 64px;
  padding-bottom: env(safe-area-inset-bottom);
}

nav > button {
  flex: 1;
  height: 44px;
  min-width: 0;
  text-align: center;
  line-height: 44px;
  color: #bbb;
  font-size: 14px;
}

nav > button:hover {
  color: #333;
}
</style>
