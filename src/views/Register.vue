<script>
var chatty = true;

import { mapActions } from "vuex";
import moment from 'moment'

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
        individu: "un particulier",
        firstName: "",
        lastName: "",
        birthday: "",
        civilite: "madame",
      },
      showError: false
    };
  },
  beforeMount() {
    console.log('Before mount');

    this.nCSRFtoken();
  },
  methods: {
    ...mapActions(["Register", "setCsrfToken", "getCSRFtoken"]),
    async submit() {
      try {
        if(chatty) {
          console.log('Enregistrement');
        
          console.log('e-mail => ' + this.form.email);
          console.log('pwd => ' + this.form.password);
          console.log('individu => ' + this.form.individu);
          console.log('prenom => ' + this.form.firstName);
          console.log('lastName => ' + this.form.lastName);
          console.log('birthday => ' + this.form.birthday);
          console.log('civilite => ' + this.form.civilite);
          console.log('birthday => ' + this.form.birthday);
          console.log(moment(new Date(this.form.birthday)));
        }

        /*if(this.form.birthday < 18){
          console.log("Age minimum requis");
        }*/
        
        this.form.birthday = moment(new Date(this.form.birthday)).format("DD/MM/YYYY");
        
        await this.Register(this.form);
        this.$router.push("/login");
        this.showError = false;
      } catch (error) {
        this.showError = true;
        console.log(error);
      }
    },
    async nCSRFtoken(){
      await this.getCSRFtoken();
      this.setCsrfToken(this.$cookies.get('XSRF-TOKEN'));

      if(chatty) {
        console.log('XSRF-TOKEN', this.$cookies.get('XSRF-TOKEN'));
        console.log('Csrf', this.$store.state.auth.csrf);
      }

    },
  },
  computed: {
    minimumAge() {
      var minimumDate = new Date();
      minimumDate.setFullYear(minimumDate.getFullYear()-18);
      minimumDate.setDate(minimumDate.getDate()-1);
      minimumDate = minimumDate.toISOString().split('T')[0];
      if(chatty) console.log("d => "+minimumDate);
      

      return  minimumDate;
    }
  }
};
</script>

<template>
  <div class="register">
      <div>
          <form @submit.prevent="submit">
            <div class="identifiants">
              <div class="titre">Créez votre compte</div>
              <div class="bloc_identifiants">
                <div class="id">Identifiants</div>
                <strong>* Champs obligatoires</strong>
                <div>
                  <label for="email">Adresse Email *</label>
                  <input type="text" name="email" v-model="form.email" required>
                </div>
                <div>
                  <label for="password">Mot de passe *</label>
                  <input id="password" type="password" name="password" v-model="form.password" required 
                    minlength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*?[0-9])(?=.*?[&~`!@#$%\^*()\-_=+[\];:\x27.,\x22\\|/?><]).{6,}.[^<>{}]"
                    title="8 caractères minimum, un chiffre, une lettre majuscule et une lettre minuscule. Pas de symbole {}"/>
                </div>
              </div>
            </div>

            <div class="info_perso">
              <div class="titre">Informations personnelles</div>
              <div class="bloc_individu">
                <div class="jeSuis">Je suis ...</div>
                <div>
                  <input type="radio" name="individu" value="un particulier" v-model="form.individu" checked>
                  <label for="un particulier" class="particulier">un particulier</label>
                </div>
                <div>
                  <input type="radio" name="individu" value="un professionnel" v-model="form.individu">
                  <label for="un professionnel" class="professionnel">un professionnel</label>
                </div>
              </div>

              <div class="bloc_sexe">
                <div class="civilite">Civilité</div>
                <div>
                  <input type="radio" name="civilite" value="madame" v-model="form.civilite" checked>
                  <label for="madame" class="madame">Mme</label>
                </div>
                <div>
                  <input type="radio" name="civilite" value="monsieur" v-model="form.civilite">
                  <label for="monsieur" class="monsieur">M.</label>
                </div>
              </div>

              <div class="info_complementaires">
                <div>
                  <label for="firstName">Prénom *</label>
                  <input type="firstName" name="firstName" v-model="form.firstName" required>
                </div>

                <div>
                  <label for="lastName">Nom *</label>
                  <input type="lastName" name="lastName" v-model="form.lastName" required>
                </div>

                <div>
                  <label for="birthday">Date de naissance *</label>
                  <input type="date" name="birthday" format=“DD/MM/YYYY” v-model="form.birthday" :max="minimumAge" required>
                </div>
              </div>

            </div>

            <button type="submit">Valider</button>
          </form>

          <div>Nous nous engageons à garder ces informations strictement confidentielles.</div>
      </div>
      <p v-if="showError" id="error">e-mail déjà existant</p>
  </div>
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

.titre{
  font-size: 2em;
  margin-bottom: 1em;
}

.identifiants{
  padding: 1em;
  width: 40em;
  display: flex;
  flex-direction: column;
  margin: auto;

  .bloc_identifiants{
    display: flex;
    flex-direction: column;
    background-color: #7b867bf1;
    padding: 1em;
    margin-bottom: 1em;

    .id{
      margin: 1em;
      font-size: 1.5em;
    }

    strong{
      margin-bottom: 1em;
      font-size: 1em;
    }
  }

}

.info_perso{
  padding: 1em;
  width: 40em;
  display: flex;
  flex-direction: column;
  margin: auto;

  .bloc_individu{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #7b867bf1;
    padding: 1em;
    margin-bottom: 1em;

    .jeSuis{
      padding: auto;
      margin: auto;
    }

    .particulier{
      padding: 1em;
      
    }

    .professionnel{
      padding: 1em;
    }
  }

  .bloc_sexe{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #7b867bf1;
    padding: 1em;
    margin-bottom: 1em;

    .civilite{
      padding: auto;
      margin: auto 1em;
    }

    .monsieur{
      padding: 1em;
      
    }

    .madame{
      padding: 1em;
    }
  }
}

.info_complementaires{
  display: flex;
  flex-direction: column;
  background-color: #7b867bf1;
  padding: 1em;
  margin-bottom: 1em;
  justify-content: space-between;
}

button[type=submit] {
  background-color: #4CAF50;
  color: white;
  margin: 2em;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;

  &:hover {
    background-color: #45a049;
  }
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
#password{
  &:invalid{
    border-color: red;
  }
}
</style>
