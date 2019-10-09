<template>
  <button @click="logout">Sair</button>
</template>

<script>
export default {
  name: "home",
  methods: {
    logout() {
      localStorage.removeItem("jwt");
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style>
</style>