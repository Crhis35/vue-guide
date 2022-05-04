<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about/admin">About</router-link>|
    <router-link to="/about/text">{{ text }}</router-link>
  </div>
  <router-view />
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const text = 'Text';
const route = useRoute();
console.log(route);
const router = useRouter();
router.push({
  hash: '#test',
});
</script>
