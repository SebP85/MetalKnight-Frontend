<script>
export default {
    
}
</script>

<template>
<footer class="footer">
    <div class="bloc-footer">
        <div class="bloc-footer--line">CGU</div>
        <div class="bloc-footer--line">A propos</div>
        <div class="bloc-footer--line">Services clients</div>
        <div class="bloc-footer--line">Faire gérer mon bien</div>
    </div>
    <div class="bloc-footer">
        <div class="bloc-footer--line">Contact</div>
        <div class="bloc-footer--line">Mon compte</div>
        <div class="bloc-footer--line">Avis google</div>
        <div class="bloc-footer--line">Tarif</div>
    </div>
    <div class="bloc-footer">
        <div class="bloc-footer--line">FAQ</div>
        <div class="bloc-footer--line">Des services pour votre quotidien</div>
        <div class="bloc-footer--line">Louer un bien</div>
        <div class="bloc-footer--line">Chiffres clés</div>
    </div>
</footer>
</template>

<style lang="scss" scoped>
footer{
    padding: 2em;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;

    .bloc-footer{
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        &--line{
            padding: 0.5em;
        }
    }
}
</style>