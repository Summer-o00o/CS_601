export default {
    data() {
        return {
            music_intro: "I started to learn the piano when I was about 6 years old. I guess because of that, I have been in love with music for so many years. Even though I stopped learning it long time ago, every time I hear some good songs or music, I download the scores and try to play them with my electric piano. I also like pop music, hiphop music, light music and so on.",
            music_type: [
                {
                    id: "pop-music",
                    title: "China pop music",
                    text: `This song is one of my favorite songs last year and this year, sung by one of my favorite singers Eason Chen. It has been listened to by more than 10 billion times in different music platforms and was covered by many people from different countries. And its lyric also gave hope to millions of people during their tough time.`,
                    src: "https://www.youtube.com/embed/Hlp8XD0R5qo",
                },
                {
                    id: "rap-music",
                    title: "Chinese hiphop music",
                    text: `Chinese hip hop, also known as C-Rap, is a type of music that becomes more and more popular in China these days. Some pieces have shown really good rap techniques, while other have a strong personal style that no other countries have.`,
                    src: "https://www.youtube.com/embed/i7a8vwx3BPQ",
                },
                {
                    id: "instrument-music",
                    title: "China instruments",
                    text: `Chinese musical instruments are traditionally grouped into eight categories known as bā yīn. The eight categories are silk, bamboo, wood, stone, metal, clay, gourd and skin.
                    The“unity of man and nature”is one of the most important concepts in China; so many Chinese instruments imitate the sounds from humans or the nature.`,
                    src: "https://www.youtube.com/embed/vnRN4v0Y68U",
                }
            ]
        };
    },
    /*html*/
    template: `
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