<template>
    <front-layout>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">{{ product.price }} LE</li>
        </ul>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
    </front-layout>
</template>

<script>
import apiClient from '../../services/api';

export default {
    data() {
        return {
            products: [],
            errorMessage: '',
        };
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            apiClient
                .get('/products')
                .then((response) => {
                    this.products = response.data;
                })
                .catch((error) => {
                    this.errorMessage = 'Error fetching products: ' + error.message;
                });
        },
    },
};
</script>
