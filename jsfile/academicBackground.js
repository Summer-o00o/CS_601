
let button;

const getData = async () => {

    const response = await fetch("https://cs601-week5.glitch.me/week5.json");
    if (response.status != 200) {
        alert(`Error: Got status code ${response.status}.`);
        return;
    }
    document.getElementById("table").innerHTML = '';
    const data = await response.json();
    const table = document.createElement("table");

    const tableHeadGenerate = () => {
        let row = table.insertRow();
        for (let key in data.myDegree[0]) {
            let th = document.createElement("th");
            let content = document.createTextNode(key);
            th.appendChild(content);
            row.appendChild(th);
        }
        table.appendChild(row);
    };

    const tableGenerate = () => {
        for (let element of data.myDegree) {
            let row = table.insertRow();
            for (let key in element) {
                let cell = document.createElement("td");
                let content = document.createTextNode(element[key]);
                if (key === "Classes") {
                    let innerText = element[key].join(', ');
                    content = document.createTextNode(innerText);
                }
                cell.appendChild(content);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        document.getElementById("table").appendChild(table);
    };

    tableHeadGenerate();
    tableGenerate();
};

window.addEventListener("DOMContentLoaded", () => {
    button = document.getElementById('button');
    button.addEventListener("click", getData);
});
