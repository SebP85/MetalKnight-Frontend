<!-- Page principale -->

<template>
  <div class="container">
    <div class="Tarif-btn">Tarif</div>
  </div>
</template>

<script>

export default {
  name: 'Tarif',
  components: {
      
  }
}
</script>

<style lang="scss" scoped>
$cd-btn: #011c37;
$cd-txt: #15DEA5;

.Tarif-btn{
    background: $cd-btn;
    color: $cd-txt;
    font-size: 2rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 10rem;
    transform: scale(1);
    transition: transform 400ms;
    width: 5em;
    margin: auto;
    margin-top: 1em;

    &:hover {
        transform: scale(1.15);
    }
}
</style>
