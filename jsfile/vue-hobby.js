const {createApp} = Vue;

const hobby = {
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
                },
            ],
            photography_intro: "Photography helps me to record and remember importment moments or those beutiful sceneries during travelling or in the life.",
            photography_1: [
                {
                    src:"../Hobby/photography/image/cayan2_1000x750.jpg",
                    alt: "cayan",
                    width: "1000",
                    height: "750",
                },
                {
                    src:"../Hobby/photography/image/wimon_750x1000.jpg",
                    alt: "puss",
                    width: "750",
                    height: "1000",
                },
                {
                    src:"../Hobby/photography/image/cayan_1_750x1000.jpg",
                    alt: "cayan",
                    width: "750",
                    height: "1000",
                },
                {
                    src:"../Hobby/photography/image/glacier2_1000x750.jpg",
                    alt: "glacier national park",
                    width: "1000",
                    height: "750",
                },
                {
                    src:"../Hobby/photography/image/waterlight-wide_900x600.jpg",
                    alt: "waterlight",
                    width: "900",
                    height: "600",
                },
            ],
            photography_2: [
                {
                    src:"../Hobby/photography/image/yosemiti_1000x750.jpg",
                    alt: "Yosemiti Park",
                },
                {
                    src:"../Hobby/photography/image/cows_1000x750.jpg",
                    alt: "cows",
                },
                {
                    src:"../Hobby/photography/image/yellowstone_1000x750.jpg",
                    alt: "yellow stone",
                },
                {
                    src:"../Hobby/photography/image/middleway_1000x750.jpg",
                    alt: "grass",
                },
                {
                    src:"../Hobby/photography/image/yellow_1000x750.jpg",
                    alt: "yellow stone",
                },
            ],
            photography_3: [
                {
                    src:"../Hobby/photography/image/newyork_1000x750.jpg",
                    alt: "New York",
                    width: "1000",
                    height: "750",
                },
                {
                    src:"../Hobby/photography/image/IMG_7950_1000x750.jpg",
                    alt: "road",
                    width: "1000",
                    height: "750",
                },
                {
                    src:"../Hobby/photography/image/wedding_750x1000.jpg",
                    alt: "wedding",
                    width: "750",
                    height: "1000",
                },
                {
                    src:"../Hobby/photography/image/puss2_750x1000.jpg",
                    alt: "puss",
                    width: "750",
                    height: "1000",
                },
                {
                    src:"../Hobby/photography/image/califonia_1000x750.jpg" ,
                    alt: "califonia",
                    width: "1000",
                    height: "750",
                },
            ],
            music_intro: "I started to learn piano when I was about 6 years old. I guess because of that, I have been in love with music for so many years. Even though I stopped learning it long time ago, every time I heard some good songs or music, I download the scores and try to play them with piano. Beside, I also like pop music, rap music, light music and so on.",
            music_type: [
                {
                    id: "pop-music",
                    title: "China pop music",
                    text: `This song is one of my favorate songs last year and this year, sang by one of my favorate sings Eason Chen. It has been listened by more than 10 billion times in different music platforms and was covered by many people from different countries. And it's lyric also encouraged millions of people during their tough time.`,
                    src: "https://www.youtube.com/embed/Hlp8XD0R5qo",
                },
                {
                    id: "rap-music",
                    title: "China hiphop music",
                    text: `Chinese hip hop, also known as C-Rap, is a type of music that becomes more and more popular in China these days. Some pieces have shown really good rap techniques, while other have a strong personal style that no other countries have.`,
                    src: "https://www.youtube.com/embed/i7a8vwx3BPQ",
                },
                {
                    id: "instrument-music",
                    title: "China instruments",
                    text: `Chinese musical instruments are traditionally grouped into eight categories known as bā yīn. The eight categories are silk, bamboo, wood, stone, metal, clay, gourd and skin.
                    The“unity of man and nature”is one of the most important concepts in China; so many Chinese instruments imitate the sounds from humans or the nature.`,
                    src: "https://www.youtube.com/embed/vnRN4v0Y68U" ,
                },
            ],
            buttons: [
                {
                    id:"hobby-travel",
                    name: "Traveling",
                },
                {
                    id:"hobby-photography",
                    name: "Photography",
                },
                {
                    id:"hobby-music",
                    name: "Music",
                },
            ]       
        };
    },
    /*html*/
    template: `
    <div id="button-container">
        <section class="hobby" v-for="button in buttons" :id="button.id">
            <b><a href="#">{{button.name}}</a></b>
        </section>
    </div>

    <h2 id="hobby-main-intro">I love to do so many things. I love travelling to different places, enjoying differnet scenaries,
    cultures and food. Durding the trip, I like to take photos to record those unforgetable moments. I like
    to listen to music, singing songs and playing piano and many many ...</h2>

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

    <div id="vue-photography">
        <h2 class="hobby-h2">{{photography_intro}}</h2>
        <article id="photography-container1">
            <figure class="photography" v-for="photo in photography_1">
                <img :src="photo.src" :alt="photo.alt" :width="photo.width" :height="photo.height">
            </figure>
        </article>
        <article id="photography-container2">
            <figure class="photography" v-for="photo in photography_2">
                <img :src="photo.src" :alt="photo.alt" :width="1000" :height="750">
            </figure>
        </article>
        <article id="photography-container3">
            <figure class="photography" v-for="photo in photography_3">
                <img :src="photo.src" :alt="photo.alt" :width="photo.width" :height="photo.height">
            </figure>
        </article>
    </div>

    <div id="vue-music">
        <h2 class="hobby-h2">{{music_intro}} </h2>
        <section v-for="music in music_type" :id="music.id">
            <div class="music-intro">
                <h3> 
                    {{music.title}}
                </h3>
                <p>
                {{music.text}}
                </p>
            </div>
            <iframe width="560" height="315" :src="music.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <hr>
        </section>
    </div>
    `
};








createApp(hobby).mount("#vue-hobby");