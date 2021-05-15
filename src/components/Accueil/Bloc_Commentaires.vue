<template>
    <div class="Bloc_Commentaires">
      <h2>{{ titre }}</h2>
      <div class="Grille_Commentaire">
        <Commentaire class="Commentaire"
          v-for="item in Commentaires"
				:name="item.name"
				:image="item.image"
				:key="item.name"
                :commentaire="item.commentaire"
        />
      </div>
    </div> 
</template>

<script>
import Commentaire from "./Commentaire"

export default {
  name: 'Bloc_Commentaires',
  components: {
    Commentaire
  },
  data() {
		return {
			titre: "Ils nous font confiance",
			Commentaires: [
				{
					name: "Sébastien",
                    commentaire: "Excelent",
					image: {
						source: require("@/assets/etoile/star_favourite_21830.png"),
						alt: "Excellent",
                        stars: 5
					},
				},
				{
					name: "Bernard",
                    commentaire: "Outil indispensable",
					image: {
						source: require("@/assets/etoile/star_favourite_21830.png"),
						alt: "Outil indispensable",
                        stars: 5
					},
				},
				{
					name: "Sabine",
                    commentaire: "Quel gain de temps",
					image: {
						source: require("@/assets/etoile/star_favourite_21830.png"),
						alt: "Quel gain de temps",
                        stars: 5
					},
				},
			]
		}
	},
}
</script>

<style scoped lang="scss">
.Bloc_Commentaires{
  padding-top: 2em;
}

.Grille_Commentaire{
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px){// < à 768px smartphone => (orientation:portrait) ou (orientation:landscape)
	.Grille_Commentaire{
		grid-template-columns: repeat(1, 1fr);
	}
}

@media (min-width: 768px) AND (max-width: 991px){
	.Grille_Commentaire{
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>