<template>
  <div id="about-wrapper">
    <div id="greeting">
      <h1>Hi, I'm <router-link aria-label="Homepage, labelled 'LUKA'" to="/">LUKA</router-link></h1>

      <h2>I'm a Fullstack Web Developer</h2>
    </div>

    <div id="navlinks">
      <span>
        Want to see what I've been working on lately? Check out my
        <router-link to="/projects" aria-label="Projects">PROJECTS</router-link>
      </span>

      <span>
        Want to talk to me about a potential project? Get in
        <router-link to="/contact" aria-label="Contact">CONTACT</router-link>
      </span>

      <span>
        I write down my thoughts as I make things. Check out my
        <router-link to="/rambles" aria-label="Rambles">RAMBLES</router-link>
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

    /* prettier-ignore */
    h1 { font-size: 7rem }
    /* prettier-ignore */
    h2 { font-size: 5rem }
  }

  #navlinks {
    margin: 3% 2%;
    justify-content: flex-end;
    align-items: flex-end;

    /* prettier-ignore */
    span {
      font-weight: 500;
      font-size: 2rem;
    }
  }
</style>
