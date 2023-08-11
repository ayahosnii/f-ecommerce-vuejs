import HomeComponent from "../components/HomeComponent.vue";
import DetailsComponent from "../components/DetailsComponent.vue";
import ShopComponent from "../components/ShopComponent.vue";
import CartComponent from "../components/CartComponent.vue";
import NotFound from "../views/NotFound.vue";

const productRoutes = [
    { path: '/', component: HomeComponent },
    { path: '/shop', component: ShopComponent },
    { path: '/details/:id', component: DetailsComponent },
    { path: '/cart', component: CartComponent },
    { path: '/404', component: NotFound },
];

export default productRoutes;

