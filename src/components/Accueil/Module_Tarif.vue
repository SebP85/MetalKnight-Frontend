<script>
import BuyNow from "../Boutons/BuyNow"

export default {
    name: "Module_Tarif",
    components: {
        BuyNow,
    },
    props: {
		titre_tarif: {
			type: String,
			required: true
		},
		tarif: {
			type: String,
			required: true
		},
        options: {
			type: Array,
			required: true
		},
	},
}
</script>

<template>
<div class="module">
    <h2>{{ titre_tarif }}</h2>
    <div>{{ tarif }}</div>
    <div>
        <div class="titre-contenu">Contenu :</div>
        <div v-for="index in options" :key="index" class="liste-options"><img src="../../assets/svg/checkmark-circle-outline.svg" alt="check">{{ index }}</div>
        <BuyNow />
    </div>
</div>
</template>

<style lang="scss" scoped>
.module{
    background-color: grey;
    padding: 1em;
    border-radius: 10px;

    .titre-contenu{
        text-decoration: underline;
        margin: 1em auto;
    }
    
    img{
        height: 1em;
        padding-right: 1em;
    }

    .liste-options{
        text-align: start;
        margin-left: 2em;
    }
}
</style>