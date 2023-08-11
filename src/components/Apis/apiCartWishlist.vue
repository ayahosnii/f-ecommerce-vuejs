<script>
 // import apiClient from "../../../services/api";
import axios from 'axios';

export default {
  data() {
    return {
      csrfToken: localStorage.getItem('access_token'),
    };
  },
  methods: {
// Inside your Vue component
    async addToCart(product) {
      try {
        // apiClient
        const slug = product.slug;
        const quantity = 1;


        const response = await axios.post('http://127.0.0.1:8000/api/cart/add',
            {
              slug,
              quantity
            });
        console.log(response.data, slug);
      } catch (error) {
        console.error(error);
      }
    },
    async addToWishlist(product) {
      try {
        const productId = product.id;

        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
          const response = await axios.post('/api/wish-list/add', { productId });
          console.log(response.data);
        } else {
          this.$router.push('/login');
          return;
        }

        console.log(productId);
      } catch (error) {
        if (error.response && error.response.status === 401) {

          this.$router.push('/login');
        } else {
          // Handle other errors here
          this.errorMessage = "An error occurred while fetching data.";
        }
      }
    }

  },
  computed: {
    authToken() {
      return localStorage.getItem('auth_token');
    }
  },
};
</script>
