import axios from "axios";

var chatty = true;

export default ({
  
  state: {
    user: null,
    token: null,
    csrf: null,
  },
  mutations: {
    SET_USER(state, form) {
      state.user = form;
    },
    setToken(state, token) {
      state.token = token;
    },
    logout(state, user) {
      state.user = user;
    },
    setCSRF(state, xsrf){
      state.csrf = xsrf;
    },
  },
  actions: {
    async Register({ commit }, form) {
      if(chatty) {
        console.log('---------------------- Enregistrement du nouveau compte ----------------------');
        console.log('e-mail => ' + form.email);
        console.log('pwd => ' + form.password);
      }
      

      const apiURL = 'https://localhost:4000/apiMetalKnight/auth/register';
      await axios.post(apiURL, form)
      await commit("SET_USER", form)
    },

    async LogIn({commit}, user) {
      console.log("fonction LogIn");
      
      if(chatty){
        console.log("pwd_cli => "+user.password);
        console.log("email_cli => "+user.email);
      }

      const apiURL = 'https://localhost:4000/apiMetalKnight/auth/login';
      if(chatty) console.log('csrf', this.getCsrf);
      //axios.defaults.headers.common['x-xsrf-token'] = this.csrf;
      var response = await axios.post(apiURL, user);
      var token = response.data.token;
      if (chatty) console.log("token => "+token);

      var tokenRefresh = response.data.tokenRefresh;
      if (chatty) console.log("refreshToken => "+tokenRefresh);

      localStorage.setItem("jwt_token", token);
      localStorage.setItem("jwt_token_refresh", tokenRefresh);
      if (token) {
        console.log("Login Successful");
      }
      await commit("SET_USER", user.firstName);
      await commit("setToken", token);
    },

    async LogOut({ commit }, user) {
      const apiURL = 'https://localhost:4000/apiMetalKnight/auth/logout';
      var response = await axios.get(apiURL, user);
      if (chatty) console.log("response => "+response.body);

      commit("logout", null);
      commit("setToken", null);
      commit("setCSRF", null);
    },

    async getCSRFtoken(){
      console.log("Obtention d'un token csrf");
      const apiURL = 'https://localhost:4000/apiMetalKnight/auth/getCSRF';
      await axios.get(apiURL)
        .then(res => {
          if(chatty) {
            console.log('requete', res);
          }
        })
        .catch(error => {
          console.log(error);
        })
    },

    setCsrfToken({ commit }, xsrf){
      commit("setCSRF", xsrf);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    StateUser: (state) => state.user,
    StateToken: (state) => state.token,
    getCsrf: (state) => state.csrf,
  }
})
