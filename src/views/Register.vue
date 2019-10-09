<template>
  <div class="register-page">
    <img src="../assets/instagram-word-logo.png" />
    <h2>Cadastre-se para ver fotos e vídeos dos seus amigos.</h2>
    <form class="form-group" @submit.prevent="register">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="text" v-model="forename" placeholder="Nome" required />
      <input type="text" v-model="surname" placeholder="Sobrenome" required />
      <input type="password" v-model="password" placeholder="Senha" required />
      <button type="submit" class="login-btn">Cadastre-se</button>
    </form>
    <div>
      <hr />OU
      <hr />
    </div>
    <span>
      Tem uma conta?
      <router-link to="/login">Conecte-se</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "register",
  data: () => ({
    email: "",
    forename: "",
    surname: "",
    password: ""
  }),
  methods: {
    async register() {
      if (
        this.email.trim() === "" ||
        this.password.trim() === "" ||
        this.forename.trim() === "" ||
        this.surname.trim() === ""
      ) {
        return this.$toasted.error("Preencha todos os campos para continuar");
      }

      try {
        const response = await this.$http.post("/users", {
          email: this.email,
          password: this.password,
          forename: this.forename,
          surname: this.surname
        });

        console.log(response);
        this.$router.push({ name: "login" });
      } catch (error) {
        if (error.response.status === 400) {
          this.$toasted.error("Dados inválidos");
        } else {
          this.$toasted.error("Ocorreu um erro interno");
        }
      }
    }
  }
};
</script>