<template>
  <header>
    <nav>
      <router-link to="/" aria-label="Homepage">LUKA</router-link>
      <router-link to="/projects" aria-label="Projects">PROJECTS</router-link>
      <router-link to="/contact" aria-label="Contact">CONTACT</router-link>
      <router-link to="/rambles" aria-label="Rambles">RAMBLES</router-link>
      <router-link to="/about" aria-label="About">ABOUT</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "HeaderNav",
  };
</script>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    margin: 0 0 15px 0;

    a {
      text-decoration: none;
      color: $accent;
      background: lighten($background, 4);
      font-size: 2.3rem;
      padding: 5px 0;
      min-width: 18%;
      text-align: center;
      letter-spacing: 2px;
      border-top: 2px solid lighten($background, 4);
      transition: transform 110ms ease-in-out, background 110ms ease-in-out, border-top-color 110ms ease-in-out;

      &.router-link-active {
        background: lighten($background, 8);
        border-top: 2px solid $accent;
      }

      /* prettier-ignore */
      &:hover { transform: translateY(2px) }
    }
  }
</style>
