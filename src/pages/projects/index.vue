<template>
  <div id="projects-wrapper">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      :subtitle="project.subtitle"
      :content="project.content"
      :stacks="project.stack"
      :live-url="project.live ? project.live : null"
      :ramble-slug="project.ramble ? project.ramble.slug : null"
    />
  </div>
</template>

<script>
  import ProjectCard from "../../components/ProjectCard.vue";

  export default {
    name: "ProjectsPage",
    data() {
      return {
        projects: {},
      };
    },
    components: {
      ProjectCard,
    },
    async beforeCreate() {
      await this.$axios.get("/projects").then((response) => {
        this.projects = response.data;
      });
    },
  };
</script>

<style lang="scss">
  #projects-wrapper {
    margin: 30px 0;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>
