<script>
import ModuleTarif from "../Accueil/Module_Tarif"

export default {
    name: "Module_Tarif",
    components: {
        ModuleTarif
    },
    data() {
        return {
            titre: "tarif",
            Module_Tarif: [
                {
                    titre_tarif: "Free",
                    tarif: "0€/mois",
                    options: [
                        'Bail',
                        'seul ou en colocation',
                        'Assurance ou caution',
                        'Facture',
                        'Quittance',
                        'Suivi des pannes',
                        'Comptabilité',
                        'Payement par internet',
                        'Automatisation des annonces',
                        'Suivi des factures/Loyers/Cautions',
                        'Suivi des pannes/impayés',
                        'Annonces en ligne automatique',
                    ]
                },
                {
                    titre_tarif: "Platine",
                    tarif: "25€/mois",
                    options: [
                        'Bail',
                        'seul ou en colocation',
                        'Assurance ou caution',
                        'Facture',
                        'Quittance',
                        'Suivi des pannes',
                        'Comptabilité',
                        'Payement par internet',
                        'Automatisation des annonces',
                        'Suivi des factures/Loyers/Cautions',
                        'Suivi des pannes/impayés',
                        'Annonces en ligne automatique',
                    ]
                },
                {
                    titre_tarif: "Diamand",
                    tarif: "50€/mois",
                    options: [
                        'Bail',
                        'seul ou en colocation',
                        'Assurance ou caution',
                        'Facture',
                        'Quittance',
                        'Suivi des pannes',
                        'Comptabilité',
                        'Payement par internet',
                        'Automatisation des annonces',
                        'Suivi des factures/Loyers/Cautions',
                        'Suivi des pannes/impayés',
                        'Annonces en ligne automatique',
                    ]
                },
                {
                    titre_tarif: "Elite",
                    tarif: "75€/mois",
                    options: [
                        'Bail',
                        'seul ou en colocation',
                        'Assurance ou caution',
                        'Facture',
                        'Quittance',
                        'Suivi des pannes',
                        'Comptabilité',
                        'Payement par internet',
                        'Automatisation des annonces',
                        'Suivi des factures/Loyers/Cautions',
                        'Suivi des pannes/impayés',
                        'Annonces en ligne automatique',
                    ]
                },
            ]
        }
    }
}
</script>

<template>
<div class="container-price">
    <h2>{{ titre }}</h2>
    <div class="choice-price">
        <ModuleTarif class="price"
            v-for="Tarif in Module_Tarif"
				:titre_tarif="Tarif.titre_tarif"
				:tarif="Tarif.tarif"
                :options="Tarif.options"
				:key="Tarif.titre_tarif"/>
    </div>
</div>
</template>

<style lang="scss" scoped>
.container-price{
    padding: 2em;
}

.choice-price{
    display: grid;
    grid-template-columns: repeat(4, 1fr);

}

@media (max-width: 767px){// < à 768px smartphone => (orientation:portrait) ou (orientation:landscape)
	.choice-price{
		grid-template-columns: repeat(1, 1fr);
        
	}

    .price{
        margin-top: 2em;
    }
}

@media (min-width: 768px) AND (max-width: 991px){// < à 768px smartphone => (orientation:portrait) ou (orientation:landscape)
	.choice-price{
		grid-template-columns: repeat(2, 1fr);
	}

    .price{
        margin: 1em;
    }
}
</style>