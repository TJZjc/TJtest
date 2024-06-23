// 混入，为所有页面添加跳转逻辑
export const navigationMixin = {
  methods: {
    handleSelect(key) {
      if (key === '1-1') {
        this.$router.push('/ex1');
      } else if (key === '1-2') {
        this.$router.push('/ex2');
      } else if (key === '1-3') {
        this.$router.push('/ex3');
      } else if (key === '1-4') {
        this.$router.push('/ex4');
      } else if (key === '1-5') {
        this.$router.push('/ex5');
      } else if (key === '1-6') {
        this.$router.push('/ex6');
      }
    }
  }
};
