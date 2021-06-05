<template>
  <div id="home-wrapper">
    <div class="home-box black" id="about-box">
      <div class="big-letter" aria-hidden="true">L</div>
      <router-link to="/about" class="white">ABOUT</router-link>
    </div>
    <div class="home-box white" id="projects-box">
      <div class="big-letter" aria-hidden="true">U</div>
      <router-link to="/projects" class="black">PROJECTS</router-link>
    </div>
    <div class="home-box white" id="contact-box">
      <div class="big-letter" aria-hidden="true">K</div>
      <router-link to="/contact" class="black">CONTACT</router-link>
    </div>
    <div class="home-box black" id="blog-box">
      <div class="big-letter" aria-hidden="true">A</div>
      <router-link to="/rambles" class="white">RAMBLES</router-link>
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
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    user-select: none;

    a {
      text-decoration: none;
      transition: color 110ms ease-in-out;

      &:hover {
        color: $accent;
      }
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
</style>
