<script setup>
import { useRoute } from "vue-router";

const route = useRoute()
const pageTitle = route.meta?.title??"default page"
</script>
<template>
    <div class="h-3rem text-xl ">{{ pageTitle }}</div>
    <slot></slot>
</template>