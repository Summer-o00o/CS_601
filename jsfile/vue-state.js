const { createApp } = Vue;

const stateName = {
    data() {
        return {
            states: [],
        };
    },
    mounted() {
        this.getState();
    },
    methods: {
        getState: async function () {
            const response = await fetch("../Contact/state.json");
            const data = await response.json();
            this.states = data.states;
        }
    },
    /*html*/

    template: `
    <option v-for="state in states" :value="state" >{{state}}</option>
    `
};
createApp(stateName).mount("#state-name");