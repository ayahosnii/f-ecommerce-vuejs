<template>
    <div :class="'hero-slide hero-slide--' + slideNumber">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="slider-content slider-content--animation">

                        <span :class="textColor" class="content-span-1">{{ slideData.content1 }}</span>
                        <span :class="textColor" class="content-span-2">{{ slideData.content2 }}</span>
                        <span :class="textColor" class="content-span-3">{{ slideData.content3 }}</span>
                        <span :class="textColor" class="content-span-4">Starting At <span class="u-c-brand">{{ slideData.price }}</span></span>

                        <a :href="slideData.link" class="shop-now-link btn--e-brand">SHOP NOW</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        slideData: {
            type: Object,
            required: true,
        },
        slideNumber: {
            type: Number,
            required: true,
        },
    },
    computed: {
        textColor() {
            return this.slideData.textColor === 'white' ? 'u-c-white' : 'u-c-secondary';
        },
    },
};
</script>
