let vm = Vue.createApp({});

vm.component("app-hello", {
  template: `<h1>{{ message }}</h1>`,
  data() {
    return {
      message: "Hello Vue!",
    };
  },
});

vm.mount("#app");
