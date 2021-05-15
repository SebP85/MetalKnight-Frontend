<script>
export default {
	name: "Role",
	props: {
		image: {
			type: Object,
			required: true
		},
		name: {
			type: String,
			required: true
		},
	},
}
</script>

<template>
	<div class="role">
		<img class="role__image" :src="image.source" :alt="image.alt" />
		<h3>{{ name }}</h3>
	</div>
</template>

<style lang="scss">
.role {
    position: relative;
    padding: 1em;
    text-align: center;
    
    &__image{
        max-height: 9em;
        
    }

    h3{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
    }
}

@media (max-width: 767px){
	.role{

		&__image{
			max-width: 15em;
		}
	}
}
</style>