export default {
    data() {
        return {
            intro: "I love doing so many things. I love traveling to different places, enjoying different sceneries, cultures and food. During my trips, I like to take photos to record those unforgettable moments. I like listening to music, singing songs and playing the piano and many many more ...",
            reminder: "Click each circle button above to see more about my hobbies!"
        };
    },
    /*html*/
    template: `
    <h2 id="hobby-main-intro">{{intro}}</h2>
    <p id="hobby-reminder"><b>{{reminder}}</b></p>
    `
};
