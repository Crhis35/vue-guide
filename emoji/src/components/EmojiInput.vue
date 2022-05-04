<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      readonly
      :value="modelValue.emoji"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" ref="emojiBtn">
        {{ modelValue ? modelValue.emoji : 'Select emoji' }}
      </button>
    </div>
  </div>
</template>

<script>
import { EmojiButton } from '@joeattardi/emoji-button';
import { onMounted, ref } from 'vue';

export default {
  name: 'EmojiInput',
  props: ['modelValue'],
  setup(props, { emit }) {
    let picker;
    const emojiBtn = ref(null);

    onMounted(() => {
      picker = new EmojiButton();

      emojiBtn.value.addEventListener('click', () => {
        picker.togglePicker(emojiBtn.value);
      });

      picker.on('emoji', (emoji) => {
        emit('update:modelValue', emoji);
      });
    });

    return {
      emojiBtn,
    };
  },
};
</script>

