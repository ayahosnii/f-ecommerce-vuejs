<template>
    <header class="header--style-2">

        <!--====== Nav 1 ======-->
        <nav class="primary-nav-wrapper">
            <div class="container">

                <!--====== Primary Nav ======-->
                <div class="primary-nav">

                    <!--====== Main Logo ======-->

                    <a class="main-logo" href="/">

                        <img style="width: 150px" :src="`../../../assets/images/logo/aya-fashion-logo.png`" alt=""></a>

                    <!--====== End - Main Logo ======-->


                    <!--====== Search Form ======-->
                    <form class="main-form">

                        <label for="main-search"></label>

                        <input class="input-text input-text--border-radius input-text--style-2" type="text" id="main-search" placeholder="Search">

                        <button class="btn btn--icon fas fa-search main-search-button" type="submit"></button></form>
                    <!--====== End - Search Form ======-->


                    <!--====== Dropdown Main plugin ======-->
                    <div class="menu-init" id="navigation">

                        <button class="btn btn--icon toggle-button toggle-button--white fas fa-cogs" type="button"></button>

                        <!--====== Menu ======-->
                        <div class="ah-lg-mode">

                            <span class="ah-close">✕ Close</span>

                            <!--====== List ======-->
                            <ul class="ah-list ah-list--design1 ah-list--link-color-white">
                                <li class="has-dropdown" data-tooltip="tooltip" data-placement="left">

                                    <a><i class="far fa-user-circle"></i></a>

                                    <!--====== Dropdown ======-->

                                    <span class="js-menu-toggle"></span>

                                    <ul style="width:120px">


                                      <li v-if="isGuest && hasLoginRoute">
                                        <a :href="loginRoute">
                                          <i class="fas fa-lock u-s-m-r-6"></i>
                                          <span>Signin</span>
                                        </a>
                                      </li>
                                      <li v-if="isGuest && hasRegisterRoute">
                                        <a :href="registerRoute">
                                          <i class="fas fa-user-plus u-s-m-r-6"></i>
                                          <span>Register</span>
                                        </a>
                                      </li>
                                      <li v-else>
                                        <a href="dashboard.html">
                                          <i class="fas fa-user-circle u-s-m-r-6"></i>
                                          <span>Account</span>
                                        </a>
                                      </li>
                                      <li v-if="!isGuest">
                                        <a href="#" @click="logout">
                                          <i class="fas fa-lock-open u-s-m-r-6"></i>
                                          <span>Logout</span>
                                        </a>
                                      </li>
                                    </ul>

                                    <!--====== End - Dropdown ======-->
                                </li>
                                <li class="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Settings">

                                    <a><i class="fas fa-user-cog"></i></a>

                                    <!--====== Dropdown ======-->

                                    <span class="js-menu-toggle"></span>
                                    <ul style="width:120px">
                                        <li class="has-dropdown has-dropdown--ul-right-100">

                                            <a>Language<i class="fas fa-angle-down u-s-m-l-6"></i></a>

                                            <!--====== Dropdown ======-->

                                            <span class="js-menu-toggle"></span>
                                            <ul style="width:120px">
                                                <li>

                                                    <a class="u-c-brand">ENGLISH</a></li>
                                                <li>

                                                    <a>ARABIC</a>
                                                </li>
                                            </ul>
                                            <!--====== End - Dropdown ======-->
                                        </li>
                                        <li class="has-dropdown has-dropdown--ul-right-100">

                                            <a>Currency<i class="fas fa-angle-down u-s-m-l-6"></i></a>

                                            <!--====== Dropdown ======-->

                                            <span class="js-menu-toggle"></span>
                                            <ul style="width:225px">
                                                <li>

                                                    <a class="u-c-brand">$ - US DOLLAR</a></li>
                                                <li>

                                                    <a>£ - BRITISH POUND STERLING</a></li>
                                                <li>

                                                    <a>€ - EURO</a></li>
                                            </ul>
                                            <!--====== End - Dropdown ======-->
                                        </li>
                                    </ul>
                                    <!--====== End - Dropdown ======-->
                                </li>
                                <li data-tooltip="tooltip" data-placement="left" title="Contact">

                                    <a href="tel:+0900901904"><i class="fas fa-phone-volume"></i></a></li>
                                <li data-tooltip="tooltip" data-placement="left" title="Mail">

                                    <a href="mailto:contact@domain.com"><i class="far fa-envelope"></i></a></li>
                            </ul>
                            <!--====== End - List ======-->
                        </div>
                        <!--====== End - Menu ======-->
                    </div>
                    <!--====== End - Dropdown Main plugin ======-->
                </div>
                <!--====== End - Primary Nav ======-->
            </div>
        </nav>
        <!--====== End - Nav 1 ======-->


        <!--====== Nav 2 ======-->
        <nav class="secondary-nav-wrapper">
            <div class="container">

                <!--====== Secondary Nav ======-->
                <div class="secondary-nav">

                    <!--====== Dropdown Main plugin ======-->

                    <!--====== End - Dropdown Main plugin ======-->


                    <!--====== Dropdown Main plugin ======-->
                    <div class="menu-init" id="navigation2">

                        <button class="btn btn--icon toggle-button toggle-button--white fas fa-cog" type="button"></button>

                        <!--====== Menu ======-->
                        <div class="ah-lg-mode">

                            <span class="ah-close">✕ Close</span>

                            <!--====== List ======-->
                            <ul class="ah-list ah-list--design2 ah-list--link-color-white">
                                <li>

                                    <a :href="`/`">Home</a></li>
                                <li>

                                    <a :href="`/shop`">Shop</a></li>
                                <li>

                                    <a href="shop-side-version-2.html">VALUE OF THE DAY</a></li>
                                <li>

                                    <a href="shop-side-version-2.html">GIFT CARDS</a></li>
                            </ul>
                            <!--====== End - List ======-->
                        </div>
                        <!--====== End - Menu ======-->
                    </div>
                    <!--====== End - Dropdown Main plugin ======-->


                    <!--====== Dropdown Main plugin ======-->
                    <div class="menu-init" id="navigation3">

                        <button class="btn btn--icon toggle-button toggle-button--white fas fa-shopping-bag toggle-button-shop" type="button"></button>

                        <span class="total-item-round">2</span>

                        <!--====== Menu ======-->
                        <div class="ah-lg-mode">

                            <span class="ah-close">✕ Close</span>

                            <!--====== List ======-->
                            <ul class="ah-list ah-list--design1 ah-list--link-color-white">
                                <li>
                                    <a :href="`/`">
                                        <i class="fas fa-home u-c-brand"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="{{route('wishlist')}}">
                                        <i class="far fa-heart"></i>
                                    </a>
                                </li>
                                <li class="has-dropdown">
                                    <CartIcon />
                                </li>
                            </ul>
                            <!--====== End - List ======-->
                        </div>
                        <!--====== End - Menu ======-->
                    </div>
                    <!--====== End - Dropdown Main plugin ======-->
                </div>
                <!--====== End - Secondary Nav ======-->
            </div>
        </nav>
        <!--====== End - Nav 2 ======-->
    </header>
</template>
<script>
import CartIcon from "../../components/CartIcon.vue";

export default {
  name: 'AppHeader',
  props: ['isGuest'],

  components: { CartIcon },
};
</script>
