<script>
import apiClient from '../../../services/api';

export default {
    data() {
        return {
            categories: [],
            products: [],
            errorMessage: '',
        };
    },
    mounted() {
        this.fetchCategories();
        this.fetchProducts();
    },
    methods: {
        fetchCategories() {
            apiClient
                .get('/categories')
                .then((response) => {
                    this.categories = response.data;
                })
                .catch((error) => {
                    this.errorMessage = 'Error fetching categories: ' + error.message;
                });
        },
        fetchProducts() {
            apiClient
                .get('/products')
                .then((response) => {
                    this.products = response.data;
                    console.log(this.products);
                })
                .catch((error) => {
                    this.errorMessage = 'Error fetching products: ' + error.message;
                });
        },
        getCategorySlugs(product) {
            return product.categories.map((category) => category.slug).join(' ');
        },
    },
};

</script>
