<template>
  <div>
    <h1>{{ ramble.title }}</h1>
  </div>
</template>

<script>
  export default {
    name: "RamblePost",
    data() {
      return {
        slug: undefined,
        ramble: {},
      };
    },
    async beforeCreate() {
      this.slug = this.$route.params.slug;

      await this.$axios.get(`/rambles/${this.slug}`).then((response) => {
        this.ramble = response.data[0];
      });
    },
  };
</script>

<style lang="scss"></style>
