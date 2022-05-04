<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button @click.prevent="increment">+</button>
    <p>{{ age }}</p>
    <input type="text" v-model="phrase" />
    {{ revertedPhrase }}
  </div>
  <alert :user="user" />
  <button type="button" ref="btn">Button</button>
</template>

<script>
import { ref, reactive, toRefs, watch, onBeforeMount, onMounted } from 'vue';
import Alert from './components/Alert.vue';
import { useNumber } from './hooks/number';
export default {
  name: 'App',
  components: { Alert },
  setup() {
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
      btn.value.addEventListener('click', () => {
        console.log('click');
      });
    });
    // onUpdated(() => {
    //   console.log('onUpdated');
    // });

    const btn = ref(null);

    const user = reactive({
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
    });

    setInterval(() => {
      user.age = user.age + 1;
    }, 1000);

    const phrase = ref('');
    const revertedPhrase = ref('');

    // watch([phrase], ([newVal],[oldVal]) => {
    //   revertedPhrase.value = value.split('').reverse().join('');
    // });
    watch(phrase, (value) => {
      revertedPhrase.value = value.split('').reverse().join('');
    });

    const { num, increment, double } = useNumber();

    return {
      num,
      ...toRefs(user),
      increment,
      phrase,
      revertedPhrase,
      double,
      user,
      btn,
    };
  },
};
</script>
