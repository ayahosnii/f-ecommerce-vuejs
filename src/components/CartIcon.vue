<template>

        <a class="mini-cart-shop-link" :href="`/cart`">
            <i class="fas fa-shopping-bag"></i>

            <span class="total-item-round">{{ totalItemCount }}</span>
        </a>

        <!--====== Dropdown ======-->

        <span class="js-menu-toggle"></span>
        <div class="mini-cart">

            <!--====== Mini Product Container ======-->
            <div class="mini-product-container gl-scroll u-s-m-b-15">

                <!--====== Card for mini cart ======-->
                <div  v-for="(item, index) in items" :key="index" class="card-mini-product">
                    <div class="mini-product">
                      <div class="mini-product__image-wrapper">
                        <a class="mini-product__link" href="product-detail.html">
                          <div v-for="image in item.images" :key="image.id">
                            <img class="u-img-fluid" :src="`/assets/images/product/${image.photo}`" :alt="item.slug">
                          </div>
                        </a>
                      </div>
                      <div class="mini-product__info-wrapper">

                            <span class="mini-product__category">
                                <a v-for="category in item.categories" :key="category.id" href="shop-side-version-2.html">
                                    {{ category.name }}
                                </a>
                            </span>


                        <span class="mini-product__name">

                            <a href="product-detail.html">{{ item.name }}</a></span>

                            <span class="mini-product__quantity">{{ item.quantity }} x</span>

                            <span class="mini-product__price">{{ item.price }} EGP</span></div>
                    </div>

                    <a class="mini-product__delete-link far fa-trash-alt"></a>
                </div>
                <!--====== End - Card for mini cart ======-->
            </div>
            <!--====== End - Mini Product Container ======-->


            <!--====== Mini Product Statistics ======-->
            <div class="mini-product-stat">
                <div class="mini-total">

                    <span class="subtotal-text">SUBTOTAL</span>

                    <span class="subtotal-value">$16</span></div>
                <div class="mini-action">

                    <a class="mini-link btn--e-brand-b-2" href="checkout.html">PROCEED TO CHECKOUT</a>

                    <a class="mini-link btn--e-transparent-secondary-b-2" :href="`/cart`">VIEW CART</a></div>
            </div>
            <!--====== End - Mini Product Statistics ======-->
        </div>
        <!--====== End - Dropdown ======-->
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            items: [],
            errorMessage: [],
            totalItemCount: 0,
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/cart/items');
                this.items = response.data;
                this.totalItemCount = this.calculateItems();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        calculateItems() {
            const uniqueSlugs = new Set();
            for (const item of this.items) {
                uniqueSlugs.add(item.slug);
            }
            return uniqueSlugs.size;
        },
        async deleteItem(index, slug) {
            try {
                this.items.splice(index, 1);
                console.log(slug)
                const response = await axios.post('/api/delete-cart', {slug});
                const responseData = response.data;
                console.log(responseData);
            } catch (error) {
                console.error(error);
            }
        },
        increaseQuantity(index) {
            this.items[index].quantity++;
            this.updateQuantity(index, this.items[index].quantity, this.items[index].slug);
        },
        decreaseQuantity(index) {
            if (this.items[index].quantity > 1) {
                this.items[index].quantity--;
                this.updateQuantity(index, this.items[index].quantity, this.items[index].slug);
            }
        },
        async updateQuantity(index, newQuantity, slug) {
            try {
                const response = await axios.post('/api/update-cart', { index, newQuantity, slug });
                const responseData = response.data;
                console.log(responseData);
            } catch (error) {
                console.error(error);
            }
        }
    },
}

</script>

<style scoped>

</style>
