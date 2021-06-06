<template>
  <div id="about-wrapper">
    <div id="greeting">
      <h1>Hi, I'm <RouterLink class="big-link" aria-label="Homepage, labelled 'LUKA'" to="/">LUKA</RouterLink></h1>

      <h2>I'm a Fullstack Web Developer</h2>
    </div>

    <div id="navlinks">
      <span>
        Want to see what I've been working on lately? Check out my
        <RouterLink to="/projects" class="small-link" aria-label="Projects">PROJECTS</RouterLink>
      </span>

      <span>
        Want to talk to me about a potential project? Get in
        <RouterLink to="/contact" class="small-link" aria-label="Contact">CONTACT</RouterLink>
      </span>

      <span>
        I write down my thoughts as I make things. Check out my
        <RouterLink to="/rambles" class="small-link" aria-label="Rambles">RAMBLES</RouterLink>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutPage",
  };
</script>

<style lang="scss">
  #about-wrapper {
    height: 100%;
    display: grid;
    grid-template: 1fr 1fr / 1fr;
  }

  /* prettier-ignore */
  #greeting, #navlinks {
    display: flex;
    flex-flow: column wrap;
  }

  #greeting {
    margin: 2% 0 0 3%;

    h1 {
      font-size: 7rem;
      margin-bottom: 20px;
    }

    /* prettier-ignore */
    h2 { font-size: 5rem }
  }

  #navlinks {
    margin: 0 3% 1% 0;
    justify-content: flex-end;
    align-items: flex-end;

    span {
      font-weight: 500;
      font-size: 2rem;
      margin: 6px 0;
    }
  }

  /* prettier-ignore */
  .big-link, .small-link {
    background: lighten($background, 4);
    text-decoration: none;
    color: $accent;
    transition: transform 110ms ease-in-out, background 100ms ease-in-out;

    /* prettier-ignore */
    &:active { background: lighten($background, 8) }
  }

  .big-link {
    padding: 0 25px;
    letter-spacing: 7px;
    display: inline-block;

    /* prettier-ignore */
    &:hover { transform: translateX(4px) }
  }

  .small-link {
    font-size: 2rem;
    min-width: 210px;
    padding: 13px;
    display: inline-block;
    text-align: center;
    font-weight: bold;

    /* prettier-ignore */
    &:hover { transform: translateX(3px) }
  }
</style>
