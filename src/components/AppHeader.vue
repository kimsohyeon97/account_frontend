<script setups></script>

<template>
  <header class="app-header">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
    <h1>가계부</h1>
    <div class="actions">
      <font-awesome-icon icon="fa-solid fa-star" class="icon" />
      <font-awesome-icon icon="fa-solid fa-filter-circle-dollar" class="icon" />
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  flex-shrink: 0;
}

.app-header h1 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.actions {
  display: flex;
  gap: 1.25rem; /* 아이콘 간격 조정 */
}

.icon {
  font-size: 1.25rem; /* 아이콘 크기 조정 */
  color: #a0a0a0; /* 아이콘 색상 */
  cursor: pointer;
}
</style>
