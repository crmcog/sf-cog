<template>
  <div>
    ABCABC
  </div>
</template>

<script>
const markdown = `
# Page 1

---

## Page 2`;

export default {
  data() {
    return {
      markdown: this.markdown
    };
  },
  components: { MarpRenderer }
};
</script>
