<script>
export default {
    name: 'Chiffres_Points_Cles',
    data() {
        return {
            styleModel: {
                /*fontSize: '15px',*/
            },
            styleModel2: {
                /*'flex-direction': 'row-reverse'*/
            }
        }
    },
    props: {
        image: {
			type: Object,
			required: true
		},
		text: {
			type: String,
			required: true
		},
        index: {
            type: Number,
            required: true
        },
    },
    computed : {
        
    }
}
</script>

<template><!-- /*:style="[Number(index)%2 === Number(0) ? styleModel2 : styleModel]"*/ si besoin-->
    <div class="Chiffres_points_cles"> 
        <div class="texte">{{ text }}</div>
        <img :src="image.source" :alt="image.alt" class="image">
    </div>
</template>

<style lang="scss" scoped>
.Chiffres_points_cles{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: grey;
    margin: 1em auto;
    padding: 1em;
    border-radius: 2em;

    &:nth-child(2n){
        flex-direction: row-reverse;
    }

    .texte{
        color: white;
    }

    .image{
        max-height: 10em;
        margin: auto 3em;
    }
}

@media (max-width: 375px){// < à 768px smartphone => (orientation:portrait) ou (orientation:landscape)
	.Chiffres_points_cles{

        &:nth-child(n){
            flex-direction: column;
            
        }
	}

    .texte{
        margin: 1em 0 1em 0;
    }

    .image{
        max-width: 12em;
    }
}
</style>