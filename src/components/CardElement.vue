<script>
export default {
    name: 'CardElement',
    props: {
        nome: String,
        tipo: String,
        immagine: String,
    }
}
</script>

<template>
    <div class="card">
        <img :src="immagine" :alt="nome">
        <h3>{{ nome }}</h3>
        <h5>{{ tipo }}</h5>

    </div>
</template>

<style scoped lang="scss">
.card {
    background-color: rgb(205, 138, 54);
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

    img {
        width: 100%;
    }

    h3 {
        color: white;
    }
}
</style>