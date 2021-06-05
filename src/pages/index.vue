<template>
  <div id="home-wrapper">
    <div class="home-box black" id="about-box">
      <span class="big-letter" aria-hidden="true">L</span>
      <router-link to="/about" class="white" aria-label="About Luka">ABOUT</router-link>
    </div>
    <div class="home-box white" id="projects-box">
      <span class="big-letter" aria-hidden="true">U</span>
      <router-link to="/projects" class="black" aria-label="Luka's Projects">PROJECTS</router-link>
    </div>
    <div class="home-box white" id="contact-box">
      <span class="big-letter" aria-hidden="true">K</span>
      <router-link to="/contact" class="black" aria-label="Luka's Contact Details">CONTACT</router-link>
    </div>
    <div class="home-box black" id="blog-box">
      <span class="big-letter" aria-hidden="true">A</span>
      <router-link to="/rambles" class="white" aria-label="Luka's Blog Posts">RAMBLES</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomePage",
  };
</script>

<style lang="scss">
  #home-wrapper {
    height: 100%;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    user-select: none;

    a {
      font-size: 1.35rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 110ms ease-in-out;
      grid-area: link;

      /* prettier-ignore */
      &:hover { color: darken($accent, 17) }
    }
  }

  .black {
    background: $background;
    color: $text;
  }

  .white {
    background: $text;
    color: $background;
  }

  .big-letter {
    font-size: 15vh;
    line-height: 1;
    align-self: end;
    justify-self: center;
    grid-area: letter;
  }

  /* prettier-ignore */
  .home-box { display: grid }

  // Box Grids

  // Top Left - L - ABOUT
  #about-box {
    grid-template: 1fr 1fr 130px / 3fr 1fr 130px;
    grid-template-areas:
      ". . ."
      ". letter ."
      ". . link";
  }

  // Top Right - U - PROJECTS
  #projects-box {
    grid-template: 1fr 1fr 130px / 130px 1fr 3fr;
    grid-template-areas:
      ". . ."
      ". letter ."
      "link . .";
  }

  // Bottom Left - K - CONTACT
  #contact-box {
    grid-template: 130px 1fr 1fr / 3fr 1fr 130px;
    grid-template-areas:
      ". . link"
      ". letter ."
      ". . .";
  }

  // Bottom Right - A - RAMBLES
  #blog-box {
    grid-template: 130px 1fr 1fr / 130px 1fr 3fr;
    grid-template-areas:
      "link . ."
      ". letter ."
      ". . .";
  }

  /* prettier-ignore */
  #contact-box, #blog-box {
    .big-letter { align-self: flex-start }
  }
</style>
