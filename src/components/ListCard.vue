<script>
import { store } from '../store.js'
import CardElement from '../components/CardElement.vue'
export default {
    name: 'ListCard',
    data() {
        return {
            store
        }
    },
    components: {
        CardElement
    }
}
</script>

<template>
    <div class="containerCard">
        <div v-for="(card, index) in store.cardList">
            <CardElement class="card" :nome="card.name" :tipo="card.archetype" :immagine="card.card_images[0].image_url" />
        </div>

    </div>
</template>

<style scoped lang="scss">
.containerCard {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    max-width: 1300px;
    margin: auto;
    background-color: white;
    ;

    .card {
        width: 150px;
        height: 350px;
    }
}
</style>