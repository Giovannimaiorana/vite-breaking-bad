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
        <h1>{{ titolo }}</h1>
    </div>
</template>

<style scoped lang="scss">
.headerContainer {
    width: 100%;
    background-color: white;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        color: black;
    }
}
</style>