<template>
  <header>
    <nav>
      <RouterLink to="/" aria-label="Homepage">LUKA</RouterLink>
      <RouterLink to="/projects" aria-label="Projects">PROJECTS</RouterLink>
      <RouterLink to="/contact" aria-label="Contact">CONTACT</RouterLink>
      <RouterLink to="/rambles" aria-label="Rambles">RAMBLES</RouterLink>
      <RouterLink to="/about" aria-label="About">ABOUT</RouterLink>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "HeaderNav",
  };
</script>

<style lang="scss">
  /* prettier-ignore */
  header { margin: 0 0 15px 0 }

  nav {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: $accent;
      background: lighten($background, 4);
      font-size: 3rem;
      padding: 10px 0;
      min-width: 17%;
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
