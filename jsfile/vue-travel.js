export default {
    data() {
        return {
            travel_intro: "Traveling around the world is always my dream! Although it's still far away from realization, when I look back to these days, I have already been to so many places!",
            travel: [
                {
                    defaultSrc: "../Hobby/travel/image/hikihng_in_Hawi_400x300.jpg",
                    src1: "../Hobby/travel/image/hikihng_in_Hawi_400x300.jpg",
                    src2: "../Hobby/travel/image/hikingHawii2_400x300.jpg",
                    alt: "hiking in Hawi",
                    figcaption: "2021 Hiking in Hawi"
                },
                {
                    defaultSrc:"../Hobby/travel/image/hiking_Glacier_National_park_400x300.jpg",
                    src1: "../Hobby/travel/image/hiking_Glacier_National_park_400x300.jpg",
                    src2: "../Hobby/travel/image/glacierPark2_400x300.jpg",
                    alt: "hiking in Glacier National Park",
                    figcaption: "2018 Hiking in Glacier National Park"
                },
                {
                    defaultSrc:"../Hobby/travel/image/hilking_in_Colorado_400x300.jpg",
                    src1: "../Hobby/travel/image/hilking_in_Colorado_400x300.jpg",
                    src2: "../Hobby/travel/image/hikingColorado2_400x300.jpg",
                    alt: "hiking in Colorado",
                    figcaption: "2019 Hiking in Colorado"
                },
                {
                    defaultSrc: "../Hobby/travel/image/death_velly_400x300.jpg",
                    src1: "../Hobby/travel/image/death_velly_400x300.jpg",
                    src2: "../Hobby/travel/image/deathValley2_400x300.jpg",
                    alt: "Death Valley",
                    figcaption: "2017 Travel in Death Valley"
                },
                {
                    defaultSrc:"../Hobby/travel/image/sky-diving_1_400x300.jpg",
                    src1: "../Hobby/travel/image/sky-diving_1_400x300.jpg",
                    src2: "../Hobby/travel/image/sky-diving-2_400x300.jpg",
                    alt: "sky-diving in Honolulu",
                    figcaption: "2021 Sky-diving in Honolulu"
                },
                {
                    defaultSrc:"../Hobby/travel/image/snorkeling_1_400x300.jpg",
                    src1: "../Hobby/travel/image/snorkeling_1_400x300.jpg",
                    src2: "../Hobby/travel/image/snorkeling2_400x300.jpg",
                    alt: "snorkeling in Maui",
                    figcaption: "2021 Snorkeling in Maui"
                }
            ]
        };
    },
    methods: {
        mouseoverSrc: function(image) {
            image.defaultSrc = image.src2;
        },
        mouseoutSrc : function(image) {
            image.defaultSrc = image.src1;
        },
    },
    /*html*/
    template: `
    <div id="vue-travel">
    <h2 class="hobby-h2">{{travel_intro}}</h2>
    <section id="travel-photo-container">
        <figure class="travel-photos" v-for="image in travel">
            <img :src="image.defaultSrc" :alt="image.alt" width="400" height="300" @mouseover="mouseoverSrc(image)" @mouseout="mouseoutSrc(image)">
            <figcaption class="caption">
                {{image.figcaption}}
            </figcaption>
        </figure>
    </section>
    </div>
    `
};