const {createApp} = Vue;
// import header from "../jsfile/header.js";
const header = {
    props: ["activePage"],
    data() {
        return {
            headName: "Luyao's Sweet Home o_0",
            links: ['Home', 'Hometown', 'FurryFriends','Hobby', 'Experience', 'Contact'],
            Home: "../Index/index.html",
            Hometown:"../Hometown/hometown.html",
            FurryFriends:"../FurryFriends/furryfriends.html",
            Hobby:"../Hobby/hobby.html",
            Experience:"../Experience/experience.html",
            Contact:"../Contact/contact.html",
        };
    },
    /*html*/
    template: `
    <h1 id="home_head">{{headName}}
    <span id="clock"></span>
    </h1>
    <nav class="nav">
        <a v-bind:href = "Home" v-if="activePage != 'home'" >Home</a>
        <span v-else>Home</span>
        <a v-bind:href = "Hometown" v-if="activePage != 'hometown'">Hometown</a>
        <span v-else>Hometown</span>
        <a v-bind:href = "FurryFriends" v-if="activePage != 'furryfriends'">Furry Friends</a>
        <span v-else>Furry Friends</span>
        <a v-bind:href = "Hobby" v-if="activePage != 'hobby'">Hobby</a>
        <span v-else>Hobby</span>
        <a v-bind:href = "Experience" v-if="activePage != 'experience'">Experience</a>
        <span v-else>Experience</span>
        <a v-bind:href = "Contact" v-if="activePage != 'contact'">Contact</a>
        <span v-else>Contact</span>
    </nav>
    `
};

createApp(header,{activePage: document.getElementById('header-menu').getAttribute('active-page')}).mount("#header-menu");   
