const ADD = document.getElementById('add');
let pirkumi = [];

window.addEventListener('load', () => {
    pirkumi = JSON.parse(localStorage.getItem("pirkumi") || "[]");
    console.log(pirkumi)
    render();
});

document.getElementById('addButton').addEventListener('click', () => {
    let pirkums = {produkts: produkts.value, daudzums: daudzums.value};

    produkts.value = "";
    daudzums.value = "";

    pirkumi.push(pirkums);

    render();
})

function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < pirkumi.length; i++) {
        let pirkums = `
        <div class="pirkums">
            <h3 id="pirkums-text">${pirkumi[i].daudzums}</h3>
            <h4>${pirkumi[i].produkts}</h4>
        </div>`;

        saraksts.innerHTML += pirkums;
    }
    
    localStorage.setItem("pirkumi", JSON.stringify(pirkumi))
}