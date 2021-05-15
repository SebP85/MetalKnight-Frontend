<script>
var chatty = true;

import { mapActions, mapState } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
        stayConnected: "",
      },
      showError: false
    };
  },
  beforeMount () {
    console.log('Before mount');

    this.newCSRFtoken();
  },
  methods: {
    ...mapActions(["LogIn", "getCSRFtoken", "csrfToken", "setCsrfToken"]),
    ...mapState(['auth']),
    async submit() {
      if(chatty) {
        console.log('email => ' + this.form.email);
        console.log('pwd => ' + this.form.password);
      }

      try {
          await this.LogIn(this.form);
          this.$router.push("/getProfil");
          this.showError = false;
      } catch (error) {
        this.showError = true;
        console.log(error);
      }
    },
    async newCSRFtoken(){
      await this.getCSRFtoken();
      this.setCsrfToken(this.$cookies.get('XSRF-TOKEN'));

      if(chatty) {
        console.log('XSRF-TOKEN', this.$cookies.get('XSRF-TOKEN'));
        console.log('Csrf', this.$store.state.auth.csrf);
      }

    },
  },
};
</script>

<template>
  <div class="login">
    <div>
      <form @submit.prevent="submit">
        <div class="titre">Identifiez-vous</div>
        <div>Connectez-vous avec votre adresse email et votre mot de passe pour accéder à votre espace client.</div>
        <div>
          <label for="email">e-mail:</label>
          <input type="text" name="email" v-model="form.email"/>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="form.password"
            minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*?[0-9])(?=.*?[&~`!@#$%\^*()\-_=+[\];:\x27.,\x22\\|/?><]).{6,}.[^<>{}]"/>
        </div>
        <div class="forgotten">Mot de passe oublié ?</div>
        <div>
          <input type="checkbox" name="stayConnected" v-model="form.stayConnected">
          <label for="stayConnected">Rester connecté</label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p v-if="showError" id="error">Adresse mail ou mot de passe incorrect</p>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;
}
button[type=submit]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  padding:10px;
  border-radius:30px;
}
#error {
  color: red;
}
</style>
