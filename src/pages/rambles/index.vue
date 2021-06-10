<template>
  <div id="ramble-wrapper">
    <router-link v-for="ramble in rambles" :to="`/rambles/${ramble.slug}`" :key="ramble.slug" class="ramble-card">
      <span class="date">{{ convertDate(ramble.date) }}</span>
      <h1>{{ ramble.title }}</h1>
      <h2>{{ ramble.description }}</h2>
    </router-link>
  </div>
</template>

<script>
  import dayjs from "dayjs";

  export default {
    name: "RamblesPage",
    data() {
      return {
        rambles: null,
      };
    },
    async created() {
      await this.$axios.get("/rambles?_sort=id:DESC").then((response) => {
        this.rambles = response.data;
      });
    },
    methods: {
      convertDate(dateString) {
        return dayjs(dateString).format("MMMM DD, YYYY");
      },
    },
  };
</script>

<style lang="scss">
  #ramble-wrapper {
    margin: 30px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .ramble-card {
    width: 65%;
    background: lighten($background, 4);
    margin: 30px 0;
    padding: 25px;
    text-decoration: none;
    color: $text;
    position: relative;

    /* prettier-ignore */
    &:first-child { margin: 0 0 30px 0 }

    h1 {
      font-size: 3.6rem;
      text-decoration: 5px underline $accent;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 1.5rem;
    }

    /* prettier-ignore */
    &:after {
      transition: opacity 110ms ease-in-out, transform 110ms ease-in-out;
      opacity: 0;
      content: "Read More";
      position: absolute;
      top: 25px;
      right: 25px;
      color: $accent;
      font-size: 1.3rem;
      font-family: monospace;
      font-weight: normal;
    }

    &:hover {
      &:after {
        opacity: 1;
        transform: translateY(3px);
      }
    }
  }

  .date {
    font-family: monospace;
    font-weight: normal;
    color: gray;
    font-size: 1rem;
  }
</style>
