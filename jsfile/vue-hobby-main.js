import VueHobbyIntro from "./vue-hobby-intro.js";
import VueTravel from "./vue-travel.js";
import VuePhotography from "./vue-photography.js";
import VueMusic from "./vue-music.js";

const { createApp } = Vue;
const hobby = {
    components: {
        VueHobbyIntro,
        VueTravel,
        VuePhotography,
        VueMusic,
    },
    data() {
        return {
            buttons: [
                {
                    id: "hobby-travel",
                    name: "Traveling",
                },
                {
                    id: "hobby-photography",
                    name: "Photography",
                },
                {
                    id: "hobby-music",
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
    <vue-hobby-intro></vue-hobby-intro>
    <vue-travel></vue-travel>
    <vue-photography></vue-photography>
    <vue-music></vue-music>
    `
};

createApp(hobby).mount("#vue-hobby");

