<script>
export default {
	name: "Commentaire",
	props: {
		image: {
			type: Object,
			required: true
		},
		name: {
			type: String,
			required: true
		},
        commentaire: {
            type: String,
            required: true
        }
	},
}
</script>

<template>
<div class="commentaire">
    <img class="commentaire__star" :src="image.source" :alt="image.alt" v-for="index in image.stars" :key="index"/>
    <h3>{{ name }}</h3>
    <p>{{ commentaire }}</p>
</div>
</template>

<style lang="scss">
.commentaire {
    padding: 1em;
    text-align: center;
    
    &__star{
        height: 2em;
    }
}
</style>