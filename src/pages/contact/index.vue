<template>
  <div id="contact-wrapper">
    <div id="icons-wrapper">
      <a href="" rel="noopener"><InlineSvg src="/images/github.svg" /></a>
      <a href="" rel="noopener"><InlineSvg src="/images/linkedin.svg" /></a>
      <a href="" rel="noopener"><InlineSvg src="/images/email.svg" /></a>
    </div>

    <div class="form-wrapper"></div>
  </div>
</template>

<script>
  import InlineSvg from "vue-inline-svg";

  export default {
    name: "ContactPage",
    components: {
      InlineSvg,
    },
  };
</script>

<style lang="scss">
  #contact-wrapper {
    margin: 40px 0;
  }

  #icons-wrapper {
    background: lighten($background, 4);
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: $accent;
        height: 60%;
        transition: fill 110ms ease-in-out, transform 110ms ease-in-out;
      }

      &:hover {
        svg {
          fill: darken($accent, 10);
          transform: translateY(2px);
        }
      }
    }
  }
</style>
