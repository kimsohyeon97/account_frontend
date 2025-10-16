<script setup>
import { ref } from "vue";
import Layout from "./components/layouts/Layout.vue";
import Diary from "./pages/Diary.vue";
import Calendar from "./pages/budget.vue";
import Stats from "./pages/Stats.vue";
import Setting from "./pages/Setting.vue";

const view = ref("calendar");
</script>

<template>
  <Layout @view="(val) => (view = val)">
    <Diary v-if="view === 'calendar'" />
    <Calendar v-if="view === 'budget'" />
    <Stats v-if="view === 'stats'" />
    <Setting v-if="view === 'setting'" />
  </Layout>
</template>

<style scoped></style>
