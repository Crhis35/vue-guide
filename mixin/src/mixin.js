export default {
  data() {
    return {
      offset: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.offset = window.pageYOffset;
    },
  },
};
