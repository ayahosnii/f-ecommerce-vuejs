<script>
import apiClient from "../../../services/api";

export default {
    methods: {
        addToCart(product) {
            apiClient
            const slug = product.slug;
            const quantity = 1;

            axios.post('/api/cart/add', { slug, quantity })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
};
</script>
