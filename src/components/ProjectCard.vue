<template>
  <div>
    <div class="title-wrapper">
      <h1>{{ title }}</h1>

      <div id="stack">
        <span
          v-for="(stack, index) in stacks"
          :key="Math.random().toString(36).substring(7) + index.toString()"
          :class="stack"
        >
          {{ capitalize(stack) }}
        </span>
      </div>
    </div>

    <h2>{{ subtitle }}</h2>
    <p>{{ content }}</p>

    <div class="link-wrapper">
      <a :href="liveUrl" target="_blank" rel="noopener">See it in action</a>
      <RouterLink :to="'/rambles/' + rambleSlug">See the ramble</RouterLink>
    </div>
  </div>
</template>

<script>
  import { capitalize } from "../helpers/stringManipulation.js";

  export default {
    name: "ProjectCard",
    props: {
      title: { type: String, default: "Title" },
      subtitle: { type: String, default: "Subtitle" },
      content: { type: String, default: "Content" },
      stacks: { type: Array, default: ["vue", "react", "rails"] },
      liveUrl: { type: String, default: "https://google.com" },
      rambleSlug: { type: String, default: "example-slug" },
    },
    methods: {
      capitalize: capitalize,
    },
  };
</script>

<style lang="scss"></style>
