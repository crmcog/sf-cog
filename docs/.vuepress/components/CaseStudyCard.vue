<template>
  <div>
    <div class="card leading-card">
      <!-- <div class="card-header header">
        <p class="has-text-weight-bold">&nbsp; {{ card.frontmatter.title }}</p>
      </div> -->
      <div class="card-content">
        <div class="columns is-multiline">
          <div class="column half">
            <strong>Team Size:</strong> {{ card.frontmatter.team }}
          </div>
          <div class="column is-half">
            <strong>Difficulty</strong>: {{ card.frontmatter.difficulty }}
          </div>
          <div class="column is-half">
            <strong>Time:</strong> {{ card.frontmatter.time }}
          </div>
          <div class="column is-full">
            <strong>Deliverables:</strong>
            {{ card.frontmatter.deliverables.join(", ") }}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content columns is-multiline">
          <div class="column is-full md-content">
            <Content :page-key="card.key" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    card: Object
  }
};
</script>

<style lang="sass">
.card-header
  padding-left: 10px
  background-color: white

.leading-card
  background-color: WhiteSmoke;

.md-content
  padding-left: 10px
</style>
