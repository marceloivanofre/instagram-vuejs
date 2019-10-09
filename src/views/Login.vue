<template>
  <div class="login-page">
    <img src="../assets/instagram-word-logo.png" />
    <form class="form-group" @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Senha" required />
      <button type="submit" class="login-btn" :disabled="!email || !password">Entrar</button>
    </form>
    <div>
      <hr />OU
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

        localStorage.setItem("jwt", response.data.token);
        this.$router.push({ name: "home" });
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

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-flow: column;
  justify-content: center;
  min-height: 100%;
  padding: 25px;

  img {
    height: 60px;
    object-fit: contain;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    font-weight: bold;
    color: #0008;
    margin-bottom: 20px;

    hr {
      width: 42%;
      border: 0.2px solid #ddd;
    }
  }

  span {
    font-size: 14px;
    text-align: center;
    color: #262626;

    a {
      font-weight: bold;
      color: #3897f7;
    }
  }

  .form-group {
    display: flex;
    flex-flow: column;
    margin-bottom: 25px;

    input {
      border: 1px solid #ddd;
      max-height: 36px;
      border-radius: 4px;
      margin-bottom: 15px;
      padding: 9px 0 7px 10px;
      background: #fafafa;
      outline: none;

      &:focus {
        border: 1px solid #aaa;
      }
    }

    button {
      width: 100%;
      height: 30px;
      appearance: none;
      border: none;
      outline: none;
      border-radius: 3px;
      background-color: #3897f7;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
    }

    button:disabled {
      background: rgba(56, 151, 247, 0.3);
      cursor: default;
    }
  }
}
</style>