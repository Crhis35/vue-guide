<template>
  <div class="mt-2 ml-2">
    <button type="button" class="btn btn-primary" @click="open = true">
      Open
    </button>
    <teleport to="#modals">
      <modal :show="open" @hide="open = false" :scrollable="false" />
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue';
import Modal from './Modal.vue';

export default {
  components: { Modal },
  name: 'AppAction',
  setup() {
    const open = ref(false);
    return {
      open,
    };
  },
};
</script>
