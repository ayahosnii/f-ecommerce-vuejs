<template>
  <Header />
  <div class="app-content">
    <slot></slot>
  </div>
  <Footer/>
</template>

<script>
import Header from "../../views/includes/Header.vue";
import Footer from "../../views/includes/Footer.vue";

export default {
  name: 'FrontLayout',
  components: { Footer, Header },
};
</script>
