<script>
import { store } from '../store.js';

export default {
    name: 'Counter',
    data() {
        return { store, }
    },
    computed: {
        resultCounter() {
            return `Sono state trovate: ${store.cardList.length} carte`
        }
    }
}

</script>

<template>
    <div class="counter">
        <span>{{ resultCounter }}</span>

    </div>
</template>

<style>
.counter {
    display: flex;
    justify-content: center;

}
</style>