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
            defaultTab: "vueHobbyIntro",
            currentTab: "vueHobbyIntro",
            buttons: [
                {
                    id: "hobby-travel",
                    name: "Traveling",
                    tab: "VueTravel",
                },
                {
                    id: "hobby-photography",
                    name: "Photography",
                    tab: "VuePhotography",
                },
                {
                    id: "hobby-music",
                    name: "Music",
                    tab: "VueMusic",
                },
            ]
        };
    },
    /*html*/
    template: `
    <div id="button-container">
        <section class="hobby" v-for="button in buttons" :id="button.id">
            <b><a href="#" @click="currentTab===button.tab? this.currentTab=defaultTab : this.currentTab=button.tab" :class="{active: currentTab===button.tab}">{{button.name}}</a></b>
        </section>
    </div>    
    <component :is="currentTab"></component>
    
    `
};

createApp(hobby).mount("#vue-hobby");

