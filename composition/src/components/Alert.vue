<template>
  <div v-if="!flag">Age is odd</div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'Alert',
  props: ['user'],
  setup(props, ctx) {
    const flag = computed(() => props.user.age % 2 === 0);
    // ctx.emit('eventName', {});
    console.log(ctx);
    return {
      flag,
    };
  },
};
</script>

<style>
</style>