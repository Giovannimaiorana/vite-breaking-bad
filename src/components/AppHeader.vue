<script>
export default {
    name: 'AppHeader',
    props: {
        titolo: String
    }
}
</script>

<template>
    <div class="headerContainer">
        <img src="/logo.jpeg" alt="">
        <h1>{{ titolo }}</h1>


    </div>
</template>

<style scoped lang="scss">
.headerContainer {
    max-width: 100%;
    background-color: white;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        color: black;
        margin-top: 10px;

    }

    img {
        width: 250px;
    }
}
</style>