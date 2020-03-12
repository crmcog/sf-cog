<template>
  <div class="md:flex-wrap lg:flex">
    <div
      v-for="topic in topics"
      :key="topic.title"
      class="max-w-md rounded shadow-md px-1 py-1 m-2 flex-1 flex-wrap"
    >
      <div class="md:px-1 flex m-2 items-center">
        <img :src="topic.image" :alt="topic.title" class="h-12 flex m-2" />
        <span class="flex-wrap font-bold m-2 text-xl ">
          {{ topic.title }}
        </span>
      </div>
      <div class="md:px-3 flex m-2">
        <p class="text-gray-700">
          {{ topic.description }}
        </p>
      </div>

      <div class="flex-flow w-full object-bottom">
        <router-link :to="topic.to" tag="span">
          <button
            class="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 border shadow"
          >
            Go
          </button>
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
