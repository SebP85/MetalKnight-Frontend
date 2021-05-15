<script>
//import { mapState } from "vuex";

var chatty = true;

export default {
  name: 'NavBar',
  data(){
    return {
      
    }
  },/*
  beforeCreate() {
    if(this.$store.getters.isAuthenticated) {
      console.log('token trouvé avant création');
      this.$router.push("/view");
    }
  },
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isAuthenticated},
    ...mapState(['m1', 'auth']),
  },*/
  methods: {
    /*async logout (){
      await this.$store.dispatch('LogOut')
      localStorage.removeItem("jwt_token")
      localStorage.removeItem("jwt_token_refresh")
      this.$router.push('/login')
    },*/
    display_menu(){
      if(chatty) console.log('Fonction display_menu');
    }
  },
}
</script>

<template>
  <header>
    <div class="wrap">
      <div id="hamburger" @click="display_menu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
          <router-link class="logo" to="/"><img src="../../assets/logo/logoMetalKnightComplet.png" alt="logo" class="logo"></router-link>
          <ul class="nav-items">
            <div class="nav-grid"><router-link class="nav-link" to="/about">A propos</router-link></div>
            <div v-if="!isLoggedIn" class="nav-grid"><router-link class="nav-link" to="/login">Compte</router-link></div>
            <div v-if="!isLoggedIn" class="nav-grid"><router-link class="nav-link" to="/register">S'enregistrer</router-link></div>
            <div v-if="isLoggedIn" class="nav-grid">
              <li class="drop"><a v-on:click="display_drop_menu()">Profile <i class="icon-arrow"></i></a>
                <ul class="drop_menu">
                  <a>Sub menu 1</a>
                  <a>Sub menu 2</a>
                  <a>Sub menu 3</a>
                </ul>
              </li>
            </div>
            <div v-if="isLoggedIn" class="nav-grid"><router-link class="nav-link" to="/view">View Students</router-link></div>
            <div v-if="isLoggedIn" class="nav-grid"><router-link class="nav-link" to="/create">Create Student</router-link></div>
            <div v-if="isLoggedIn" class="nav-grid"><a @click="logout" class="nav-link">Logout</a></div>
          </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.icon-arrow{
  mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 284.929 284.929'><path d='M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z'/></svg>");
}

i {
  width: 12px; height: 12px;
	vertical-align: middle;
	display: inline-block;
  background-color: black;
}

nav{
  background-color: white;
  max-width: 80em;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .logo{
    height: 2em;
  }

  .nav-items{
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;

    .drop{
      position: relative;

      a {
        font-weight: bold;
        color: #020a11;
        cursor: pointer;
        border: none;
        transition: 0.15s;
        &:hover{
          color: green;
        }
        &:hover + .drop_menu{
          transform: scaleY(1);
        }
      }

      .drop_menu {
        position: absolute;
        height: auto;
        left: -2em;
        display: flex;
        flex-direction: column;
        transform-origin: top;
        transform: scaleY(0);
        transition: 0.25s;
        width: 8em;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
        border: black 1px solid;
        padding: 0;
        text-decoration: none;
        background-color: white;

        &:hover {
          transform: scaleY(1);
        }
        
        a {
          padding: 0.5em 0;
          &:hover {
            Background-color: green;
            color: black;
          }
        }
      }
    }

    .nav-link {
      font-weight: bold;
      color: #020a11;
      cursor: pointer;
      padding: 5px 0;
      text-decoration: none;
      margin: 0 1em;
      background: linear-gradient(to bottom, transparent 90%, black 2px) no-repeat;
      background-size: 0 100%;
      transition: background-size 0.33s;

      &.router-link-exact-active {
        color: #808a85;
      }

      &:hover{
        background-size: 100% 100%;
      }
    }
  }
}

@media (max-width: 767px){
  .wrap{
    position: relative;
  }

  nav{
    position: absolute;
    transform: scaleY(0);
    max-width: 19em;
    height: auto;
    display: grid;

    /*border: black 1px solid;*/

    &:hover{
      transform: scaleY(1);
    }

    .logo{
      /*display: none;*/

    }

    .nav-items{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-items: start;
      align-items: stretch;

      margin: 1rem;
      padding: 0;

      .nav-grid{
        margin: 1rem 0 0 0;
        padding: 0;

        .nav-link{
          margin: 0;
          padding: 0;
        }

      }
    }

  }

  #hamburger {
    width: 2em;
    padding: 0.5em;
    cursor: pointer;

    &:hover{
      span:nth-child(1) {transform: rotate(45deg) translate(2px, 1px); }
      span:nth-child(2) {transform: rotate(-45deg) ;}
      span:nth-child(3) {transform: rotate(45deg) translate(6px, -9px);}

    }

    &:hover + nav{
      transform: scaleY(1);
    }

    span {
      height: 2px;
      margin-top: 5px;
      margin-bottom: 5px;
      margin-left: 5px;
      background-color: grey;
      display: block;
      transition: 0.33s;
      &:nth-child(1) {width: 12px;}
      &:nth-child(2) {width: 24px;}
      &:nth-child(3) {width: 12px;}
      
    }
  }
}

</style>