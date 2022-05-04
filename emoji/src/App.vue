<template>
  <div id="app" class="row d-flex justify-content-center">
    <div class="col-md-5 mt-3">
      <div class="card">
        <div class="card-header">Emoji Selector</div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="form-group">
              <emoji-input v-model="emoji" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import EmojiInput from './components/EmojiInput.vue';

export default {
  components: { EmojiInput },
  name: 'App',
  setup() {
    const emoji = ref('');
    function submit() {
      console.log(emoji.value);
    }
    return {
      emoji,
      submit,
    };
  },
};
</script>

<style src="bootstrap/dist/css/bootstrap.css">
</style>