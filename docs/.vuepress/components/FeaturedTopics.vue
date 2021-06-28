<template>
  <div class="columns is-multiline is-centered">
    <div
      class="column is-half-tablet is-one-quarter-desktop"
      v-for="topic in topics"
      :key="topic.title"
    >
      <div class="card is-fullheight">
        <div class="topicHeader card-header">
          <img
            :src="topic.image"
            :alt="topic.title"
            class="topicImage card-header-icon"
          />
          <span class="topicTitle card-header-title">{{ topic.title }}</span>
        </div>
        <div class="topic-description card-content">
          <p>
            {{ topic.description }}<br />
            {{ topic.descMore }}
          </p>
        </div>

        <router-link :to="topic.to" class="card-footer">
          <a class="card-footer-item is-fullwidth primary" tag="span">Go</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          title: "Why Learn Salesforce?",
          image: "./images/code.png",
          to: "/why-learn-salesforce/",
          description:
            "A basic introduction to Salesforce, and why Salesforce is a good career option.",
        },
        {
          title: "Admin Guide",
          image: "./images/code.png",
          to: "/admin-guide/",
          description:
            "Admin knowledge that helps you manage Salesforce with clicks - create apps, secure data, & more!",
          descMore: "Helpful for admin certification.",
        },

        {
          title: "Developer Guide",
          image: "./images/code.png",
          to: "/dev-guide/",
          description:
            "Learn configuration, Apex, Lightning, automation & more.",
          descMore: "Helpful for AppBuilder & PD1 certifications.",
        },
        {
          title: "LWC Guide",
          image: "./images/lightning.svg",
          to: "/lwc-guide/",
          description: "Learn Lightning web components the pragmatic way.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.topicFeature {
  border-width: 1px;
  border-color: red;
  padding: 3 !important;
}

.topicHeader {
  align-content: center;
  justify-items: center;
}

.topicTitle {
  font-weight: bold;
  font-size: 103%;
}

.topicImage {
  height: 2rem !important;
  width: 2rem !important;
  vertical-align: middle !important;
  margin-right: 0.5em;
}

.topic-description {
  font-size: 85%;
}

.card {
  &.is-fullheight {
    height: 100%;
    display: flex;
    flex-direction: column;

    .card-content {
      margin-bottom: auto;
      padding: 10px;
    }
    .card-footer {
      margin-top: auto;
      .button {
        border-radius: 0;
      }
    }
  }
}
</style>
