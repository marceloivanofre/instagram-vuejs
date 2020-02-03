<template>
  <div class="login-page">
    <img src="../assets/instagram-word-logo.png" />
    <form class="form-group" @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Senha" required />
      <button type="submit" class="login-btn" :disabled="!email || !password">
        Entrar
      </button>
    </form>
    <div>
      <hr />
      OU
      <hr />
    </div>
    <span>
      Não tem uma conta?
      <router-link to="/register">Cadastre-se</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    async login() {
      if (this.email.trim() === "" || this.password.trim() === "") {
        return this.$toasted.error("Informe seu email e senha");
      }

      try {
        const response = await this.$http.post("/session", {
          email: this.email,
          password: this.password
        });

        this.$store.commit("login", response.data.token);
      } catch (error) {
        if (error.response.status === 400) {
          this.$toasted.error("Email e/ou senha inválidos");
        } else {
          this.$toasted.error("Ocorreu um erro interno");
        }
      }
    }
  }
};
</script>
