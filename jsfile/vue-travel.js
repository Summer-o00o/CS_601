export default {
    data() {
        return {
            display: "vue-hobby-travel",
            travel_intro: "Traveling around the world is always my dream! Although it's still far away from realization, when I look back to these days, I have already been to so many places!",
            travel: [
                {
                    src: "../Hobby/travel/image/hikihng_in_Hawi_400x300.jpg",
                    alt: "hiking in Hawi",
                    figcaption: "2021 Hiking in Hawi"
                },
                {
                    src: "../Hobby/travel/image/hiking_Glacier_National_park_400x300.jpg",
                    alt: "hiking in Glacier National Park",
                    figcaption: "2018 Hiking in Glacier National Park"
                },
                {
                    src: "../Hobby/travel/image/hilking_in_Colorado_400x300.jpg",
                    alt: "hiking in Colorado",
                    figcaption: "2019 Hiking in Colorado"
                },
                {
                    src: "../Hobby/travel/image/death_velly_400x300.jpg",
                    alt: "Death Valley",
                    figcaption: "2017 Travel in Death Valley"
                },
                {
                    src: "../Hobby/travel/image/sky-diving_1_400x300.jpg",
                    alt: "sky-diving in Honolulu",
                    figcaption: "2021 Sky-diving in Honolulu"
                },
                {
                    src: "../Hobby/travel/image/snorkeling_1_400x300.jpg",
                    alt: "snorkeling in Maui",
                    figcaption: "2021 Snorkeling in Maui"
                }
            ]
        };
    },
    /*html*/
    template: `
    <div id="vue-travel">
    <h2 class="hobby-h2">{{travel_intro}}</h2>
    <section id="travel-photo-container">
        <figure class="travel-photos" v-for="image in travel">
            <img :src="image.src" :alt="image.alt" width="400" height="300">
            <figcaption class="caption">
                {{image.figcaption}}
            </figcaption>
        </figure>
    </section>
    </div>
    `
};