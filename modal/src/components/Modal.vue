<template>
  <div class="modal" :style="{ display: show ? 'block' : 'none' }">
    <div
      class="modal-dialog"
      style="z-index: 2000"
      @keydown.esc="close"
      tabindex="0"
      ref="modal"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Awesome Title</h5>
          <button type="button" class="close" @click="close">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Awesome content.</p>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { ref, watch, onMounted, onUnmounted } from 'vue';

export default {
  name: 'AppModal',
  props: {
    show: {
      type: Boolean,
      require: true,
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const modalRef = ref(null);

    function close() {
      emit('hide');
    }

    function handler(e) {
      if (e.code === 'Escape' && props.show) {
        close();
      }
    }

    onMounted(() => {
      document.addEventListener('keydown', handler);
    });

    onUnmounted(() => {
      document.removeEventListener('keydown', handler);
    });

    watch(
      () => props.show,
      (show) => {
        if (show && !props.scrollable) {
          document.body.style.setProperty('overflow', 'hidden');
        } else {
          document.body.style.removeProperty('overflow');
        }
      },
      {
        immediate: true,
      },
    );

    return {
      close,
      modal: modalRef,
    };
  },
};
</script>

<!-- <style scoped>
.modal-dialog {
  outline: 0;
}
</style> -->
