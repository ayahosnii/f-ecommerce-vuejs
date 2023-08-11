<template>
    <div class="slider-container" id="brand-slider">
        <vueper-slides :margin="-1" :autoplay="true" :smartSpeed="1500" :loop="true" :dots="true" :rewind="false" :nav="false" :dragging-distance="50">
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image"
                :title="slide.title"
                :content="slide.content" />
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    components: {
        VueperSlides,
        VueperSlide,
    },
    data() {
        return {
            slides: [
                {
                    id: "1",
                    title: 'Sale',
                    content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
                    image: '/assets/images/slider/hero-1.jpg.webp',
                    alt: "Image 1",
                },
                {
                    id: "2",
                    title: 'Aurora Borealis',
                    content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
                    image: '/assets/images/slider/hero-2.jpg.webp',
                    alt: "Image 2",
                },
            ],
        };
    },

};
</script>
<style>
.vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom)
{
    margin-left: 5%;
}
.vueperslide__title{
    font-size: 40px;
    text-align: left;
    color: #0c1028;
    margin-bottom: 7%;
    font-weight: bold;
    transform: translateX(-30%);
    opacity: 0;
    animation: slide-in-anim 1.5s ease-out infinite;
    animation-delay: 1.5s;
}

@keyframes slide-in-anim {
    20% {
        transform: translateX(0%);
    }
    60% {
        transform: translateX(-10%);
    }
    75% {
        transform: translateX(-10%);
    }
    100% {
        opacity: 1;
        transform: translateX(-20%);
    }
}


.vueperslide__content{
    font-size: 20px;
}

path{
 color: #000;
}

</style>
