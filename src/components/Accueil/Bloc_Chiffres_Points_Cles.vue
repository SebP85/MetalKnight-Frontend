<script>
import ChiffresEtPointsCles from "./Chiffres_Et_Points_Cles"

export default {
    name: 'Bloc_Chiffres_Points_Cles',
    components: {
        ChiffresEtPointsCles
    },
    data() {
        return {
            titre: "Chiffres et points clés",
            chiffreEtPointCles: [
				{
					text: "Diviser jusqu'a 2 fois et plus le coût de votre gestion locative",
					image: {
						source: require("@/assets/ChiffrePointCle/gestionLocative.jpg"),
						alt: "Diviser jusqu'a 2 fois et plus le coût de votre gestion locative"
					},
				},
				{
					text: "Optimiser votre temps et focalisez vous sur vos prochains investissements en toute tranquilité",
					image: {
						source: require("@/assets/ChiffrePointCle/optimisation.jpg"),
						alt: "Optimiser votre temps et focalisez vous sur vos prochains investissements en toute tranquilité"
					},
				},
				{
					text: "Ne perdez plus de temps à refaire vos annonces. Elles seront générées automatiquement",
					image: {
						source: require("@/assets/ChiffrePointCle/connectiviteAnnonces.png"),
						alt: "Ne perdez plus de temps à refaire vos annonces. Elles seront générées automatiquement"
					},
				},
                {
					text: "Vérification des documents du locataire et du propriétaire",
					image: {
						source: require("@/assets/ChiffrePointCle/verificationDoc.png"),
						alt: "Vérification des documents du locataire et du propriétaire"
					},
				},
                {
					text: "Artisans à disposition en cas de pannes mais aussi des personnes pour faire les visites ainsi que des femmes de ménages",
					image: {
						source: require("@/assets/ChiffrePointCle/salaries.png"),
						alt: "Artisans à disposition en cas de pannes mais aussi des personnes pour faire les visites ainsi que des femmes de ménages"
					},
				},
			],
        }
    }
}
</script>

<template>
    <div class="Bloc_chiffres_points_cles">
        <h2>{{ titre }}</h2>
        <div class="Grille_Chiffres_Points_Cles">
            <ChiffresEtPointsCles class="Chiffres_Points_Cles"
            v-for="(variable, index) in chiffreEtPointCles"
                    :text="variable.text"
                    :image="variable.image"
                    :key="variable.text"
                    :index="index"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.Bloc_chiffres_points_cles{
    margin: auto;
	padding-top: 2em;
	max-width: 70em;

	h2{
		padding-bottom: 1em;
	}
}
</style>