<template>
  <div class="login-page">
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
    margin-bottom: 10px;
  }

  h2 {
    font-size: 17px;
    text-align: center;
    font-weight: bold;
    color: #999;
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
  }
}
</style>