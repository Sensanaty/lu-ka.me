<template>
  <div class="project-card">
    <div class="title-wrapper">
      <h1>{{ title }}</h1>
      <div id="stack">
        <span
          v-for="(stack, index) in stacks"
          :key="Math.random().toString(36).substring(7) + index.toString()"
          :class="[stack, 'stack-span']"
        >
          {{ capitalize(stack) }}
        </span>
      </div>
    </div>

    <h2>{{ subtitle }}</h2>
    <p>{{ content }}</p>

    <div class="link-wrapper">
      <a v-if="liveUrl" :href="liveUrl" target="_blank" rel="noopener">See it in action</a>
      <RouterLink v-if="rambleSlug" :to="'/rambles/' + rambleSlug">See the ramble</RouterLink>
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

<style lang="scss">
  .project-card {
    /* prettier-ignore */
    &:first-child { margin: 0 0 35px 0 }

    /* prettier-ignore */
    &:last-child { margin: 35px 0 50px 0 }

    background: lighten($background, 4);
    margin: 35px 0;
    padding: 25px;
    width: 65%;

    h2 {
      font-size: 2rem;
      margin-bottom: 25px;
    }

    p {
      margin-bottom: 25px;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.2;
    }
  }

  .title-wrapper {
    display: flex;
    align-items: center;

    h1 {
      font-size: 3rem;
      margin-bottom: 5px;
    }

    #stack {
      margin: 0 0 0 auto;
    }
  }

  .stack-span {
    font-family: monospace;
    margin: 0 6px;
    font-size: 1.2rem;
    padding: 5px 15px;
    user-select: none;
  }

  .link-wrapper {
    display: flex;

    a {
      color: $accent;
      text-decoration: none;
      font-size: 1.7rem;
      transition: color 110ms ease-in-out, transform 110ms ease-in-out;

      /* prettier-ignore */
      &:nth-child(2) { margin: 0 0 0 auto }

      &:hover {
        color: darken($accent, 10);
        transform: translateY(1px);
      }
    }
  }

  @import "../assets/styles/stackColors";
</style>
