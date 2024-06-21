<template>
  <pre><code ref="codeBlock" class="language-{{ language }}">{{ code }}</code></pre>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // 你可以选择其他主题

export default {
  name: 'CodeDisplay',
  props: {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: 'javascript',
    },
  },
  setup(props) {
    const codeBlock = ref(null);

    const highlight = () => {
      Prism.highlightElement(codeBlock.value);
    };

    onMounted(() => {
      highlight();
    });

    watch(() => props.code, () => {
      highlight();
    });

    return {
      codeBlock,
    };
  },
};
</script>

<style scoped>
/* 你可以在这里添加自定义样式 */
</style>