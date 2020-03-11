<template>
  <div class="row">
    <div class="card" v-for="topic in topics" :key="topic.title">{{ topic.title }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [{ title: "ABC" }, { title: "DEF" }]
    };
  }
};
</script>
    
