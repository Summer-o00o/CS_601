export default {
    data() {
        return {
            photography_intro: "Photography helps me to record and remember importment moments or those beutiful sceneries during travelling or in the life.",
            photography_1: [
                {
                    src: "../Hobby/photography/image/cayan2_1000x750.jpg",
                    alt: "cayan",
                    width: "1000",
                    height: "750",
                },
                {
                    src: "../Hobby/photography/image/wimon_750x1000.jpg",
                    alt: "puss",
                    width: "750",
                    height: "1000",
                },
                {
                    src: "../Hobby/photography/image/cayan_1_750x1000.jpg",
                    alt: "cayan",
                    width: "750",
                    height: "1000",
                },
                {
                    src: "../Hobby/photography/image/glacier2_1000x750.jpg",
                    alt: "glacier national park",
                    width: "1000",
                    height: "750",
                },
                {
                    src: "../Hobby/photography/image/waterlight-wide_900x600.jpg",
                    alt: "waterlight",
                    width: "900",
                    height: "600",
                },
            ],
            photography_2: [
                {
                    src: "../Hobby/photography/image/yosemiti_1000x750.jpg",
                    alt: "Yosemiti Park",
                },
                {
                    src: "../Hobby/photography/image/cows_1000x750.jpg",
                    alt: "cows",
                },
                {
                    src: "../Hobby/photography/image/yellowstone_1000x750.jpg",
                    alt: "yellow stone",
                },
                {
                    src: "../Hobby/photography/image/middleway_1000x750.jpg",
                    alt: "grass",
                },
                {
                    src: "../Hobby/photography/image/yellow_1000x750.jpg",
                    alt: "yellow stone",
                },
            ],
            photography_3: [
                {
                    src: "../Hobby/photography/image/newyork_1000x750.jpg",
                    alt: "New York",
                    width: "1000",
                    height: "750",
                },
                {
                    src: "../Hobby/photography/image/IMG_7950_1000x750.jpg",
                    alt: "road",
                    width: "1000",
                    height: "750",
                },
                {
                    src: "../Hobby/photography/image/wedding_750x1000.jpg",
                    alt: "wedding",
                    width: "750",
                    height: "1000",
                },
                {
                    src: "../Hobby/photography/image/puss2_750x1000.jpg",
                    alt: "puss",
                    width: "750",
                    height: "1000",
                },
                {
                    src: "../Hobby/photography/image/califonia_1000x750.jpg",
                    alt: "california",
                    width: "1000",
                    height: "750",
                }
            ]
        };
    },
    /*html*/
    template: `
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
    `
};