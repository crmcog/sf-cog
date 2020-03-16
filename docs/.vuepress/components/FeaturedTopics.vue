<template>
  <div class="features">
    <div v-for="topic in topics" :key="topic.title" class="feature topicFeature">
      <div class="topicHeader">
        <img :src="topic.image" :alt="topic.title" class="topicImage" />
        <span class="topicTitle">{{ topic.title }}</span>
      </div>
      <div>
        <p class="topic-description">{{ topic.description }}</p>
      </div>

      <div>
        <router-link :to="topic.to" tag="span">
          <a>Go</a>
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
          to: "/why-learn-salesforce",
          description:
            "A basic introduction to Salesforce, why you should consider Salesforce as a career option, and what you can expect out of a Salesforce career. In short: you will get to decide whether you will be spending any time at all on this site!"
        },
        {
          title: "Admin Certification",
          image: "./images/code.png",
          to: "/admin-guide",
          description:
            "Course structure for studying for Salesforce Administrator credential. Know everything there is to manage an org as an admin - enabling powerful functionality, working with AppExchange, data security, and more!"
        },

        {
          title: "PD1 Certification",
          image: "./images/code.png",
          to: "/pd1-guide",
          description:
            "Prepare for being a developer with Platform Developer I certification. Learn not only configuration, but also coding using Apex, creating complex UI using Lightning/VisualForce and enabling business rules and automation."
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
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
</style>
