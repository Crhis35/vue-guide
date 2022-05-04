<template>
  <label for="email">
    Email
    <input
      type="email"
      class="form-control"
      placeholder="E-mail"
      :value="email"
      @input="update($event)"
      :class="{
        'is-valid': validateEmail(email),
        'is-invalid': !validateEmail(email),
      }"
    />
  </label>
</template>

<script>
import validateEmail from './validate-email';

export default {
  name: 'EmailInput',
  props: ['email'],
  setup(props, { emit }) {
    const update = ($event) => {
      emit('update:email', $event.target.value);
    };

    return {
      update,
      validateEmail,
    };
  },
};
</script>
