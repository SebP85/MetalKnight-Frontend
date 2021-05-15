<template>
    <div class="Bloc_Roles">
      <h2>{{ titre }}</h2>
      <div class="Grille_Role">
        <role class="Role"
          v-for="Role in Roles"
				:name="Role.name"
				:image="Role.image"
				:key="Role.name"
        />
      </div>
    </div> 
</template>

<script>
import Role from "./Role"

export default {
  name: 'Bloc_Roles_MetalKnight',
  components: {
    Role
  },
  data() {
		return {
			titre: "Roles de MetalKnight",
			Roles: [
				{
					name: "Bail",
					image: {
						source: require("@/assets/role/bail.jpg"),
						alt: "Bail"
					},
				},
				{
					name: "Facture",
					image: {
						source: require("@/assets/role/facture.jpg"),
						alt: "Facture"
					},
				},
				{
					name: "Comptabilité",
					image: {
						source: require("@/assets/role/comptabilite.jpg"),
						alt: "Comptabilité"
					},
				},
        {
					name: "nu ou colocation",
					image: {
						source: require("@/assets/role/colocation.jpg"),
						alt: "nu ou colocation"
					},
				},
        {
					name: "Quittance de loyer",
					image: {
						source: require("@/assets/role/quittance.jpg"),
						alt: "Quittance de loyer"
					},
				},
        {
					name: "Payement en ligne",
					image: {
						source: require("@/assets/role/payement_internet.jpg"),
						alt: "Payement en ligne"
					},
				},
        {
					name: "Assurance ou caution",
					image: {
						source: require("@/assets/role/assurance.jpg"),
						alt: "Assurance ou caution"
					},
				},
        {
					name: "Suivi des pannes",
					image: {
						source: require("@/assets/role/panne.jpg"),
						alt: "Suivi des pannes"
					},
				},
        {
					name: "Automatisation des annonces",
					image: {
						source: require("@/assets/role/annonces.jpg"),
						alt: "Automatisation des annonces"
					},
				},
			]
		}
	},
}
</script>

<style scoped lang="scss">
.Bloc_Roles{
  padding-top: 2em;
}

.Grille_Role{
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px){// < à 768px smartphone => (orientation:portrait) ou (orientation:landscape)
	.Grille_Role{
		grid-template-columns: repeat(1, 1fr);
	}
}

@media (min-width: 768px) AND (max-width: 991px){// 768 et < à 991px tablette
	.Grille_Role{
		grid-template-columns: repeat(2, 1fr);
	}
}

@media screen {// 991 et < à 1199px ordinateur
	
}

@media screen {// 1199 et plus grand écran

}
</style>