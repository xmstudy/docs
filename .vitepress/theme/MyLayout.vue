<template>
  <div>
    <Layout>
      <template #aside-outline-before> My custom sidebar top content </template>
      <template #doc-footer-before> doc-footer-before</template>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<style scoped></style>
