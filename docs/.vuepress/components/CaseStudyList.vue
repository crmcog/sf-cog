<template>
  <div>
    <div v-if="posts">
      <div v-for="item of posts" v-if="item && item.path">
        <h3 v-if="item.title" v-text="item.title" class="post" />

        <CaseStudyCard :card="item"></CaseStudyCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    caseStudyPath: String
  },
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith(this.caseStudyPath))
        .sort(
          (a, b) =>
            new Date(b.frontmatter.order) - new Date(a.frontmatter.order)
        );
    }
  }
};
</script>

<style lang="sass" scoped>
.post
  padding-top: 3rem
</style>
