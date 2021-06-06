<template>
  <HeaderNav v-if="showHeader" />
  <RouterView />
</template>

<script>
  import HeaderNav from "./components/HeaderNav.vue";

  export default {
    name: "App",
    components: {
      HeaderNav,
    },
    computed: {
      showHeader() {
        const route = this.$route.name;
        return !(route === "home" || route === "about" || !route);
      },
    },
  };
</script>

<style lang="scss"></style>
