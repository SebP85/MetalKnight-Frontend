<!-- Page principale -->

<template>
  <div class="home">
    <Bloc_Accueil class="accueil"/>
    <div class="style_principale">
      <Bloc_Roles />
      <Tarif />
      <Bloc_Utilisation />
      <Tarif />
      <Bloc_Chiffres_Points_Cles />
      <Tarif />
      <Bloc_Commentaires />
      <Tarif />
      <Tableau_Tarif />
      <Footer />
    </div>
  </div>
</template>

<script>
import Bloc_Accueil from "../components/Accueil/Bloc_Accueil"
import Bloc_Roles from "../components/Accueil/Bloc_Roles_MetalKnight"
import Tarif from "../components/Boutons/Tarif"
import Bloc_Utilisation from "../components/Accueil/Bloc_Utilisation"
import Bloc_Chiffres_Points_Cles from "../components/Accueil/Bloc_Chiffres_Points_Cles"
import Bloc_Commentaires from "../components/Accueil/Bloc_Commentaires"
import Tableau_Tarif from "../components/Accueil/Tableau_Tarif"
import Footer from "../components/footer/Footer"

export default {
  name: 'Home',
  components: {
    Bloc_Accueil,
    Bloc_Roles,
    Tarif,
    Bloc_Utilisation,
    Bloc_Chiffres_Points_Cles,
    Bloc_Commentaires,
    Tableau_Tarif,
    Footer,
  }
}
</script>

<style lang="scss" scoped>
.home{

  .accueil{
    margin-bottom: 0;
  }

  .style_principale{
    max-width: 90em;
    margin: auto;
    box-shadow: 0 0 0.5em grey;
  }
}
</style>
