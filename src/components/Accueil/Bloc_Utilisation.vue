<script>
import Role from "./Role"

export default {
  name: 'Bloc_Roles_MetalKnight',
  components: {
    Role
  },
  data() {
		return {
			titre: "Comment utiliser le site",
			Roles: [
				{
					name: "Bail sur mesure",
					image: {
						source: require("@/assets/role/bail.jpg"),
						alt: "Bail sur mesure"
					},
				},
				{
					name: "Suivi des factures/Loyers/Cautions",
					image: {
						source: require("@/assets/role/facture.jpg"),
						alt: "Suivi des factures/Loyers/Cautions"
					},
				},
                {
					name: "Suivi des pannes/impayés",
					image: {
						source: require("@/assets/role/panne.jpg"),
						alt: "Suivi des pannes/impayés"
					},
				},
                {
					name: "Quittances de loyers",
					image: {
						source: require("@/assets/role/quittance.jpg"),
						alt: "Quittances de loyers"
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
					name: "Annonces en ligne automatique",
					image: {
						source: require("@/assets/role/annonces.jpg"),
						alt: "Annonces en ligne automatique"
					},
				},
			]
		}
	},
}
</script>

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
</style>