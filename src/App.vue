<template>
  <HeaderNav v-if="showHeader" />
  <transition name="fade" mode="out-in">
    <RouterView />
  </transition>
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

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 200ms;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
