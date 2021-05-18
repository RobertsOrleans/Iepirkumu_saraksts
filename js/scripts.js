const ADD = document.getElementById('add');
let pirkumi = [];

window.addEventListener('load', () => {
    pirkumi = JSON.parse(localStorage.getItem("pirkumi") || "[]");
    console.log(pirkumi);
    
    render();
});

document.getElementById('addButton').addEventListener('click', () => {
    let pirkums = {produkts: produkts.value, daudzums: daudzums.value};

    produkts.value = "";
    daudzums.value = "";

    pirkumi.push(pirkums);

    render();
})

function removePirkums(pirkums){
    for(let i = 0; i < pirkumi.length; i++) {
        if(pirkums === pirkumi[i].produkts){
            delete pirkumi[i];
            break;
        }
    }

    pirkumi = pirkumi.filter(function (e) {return e != null;});

    localStorage.setItem("pirkumi", JSON.stringify(pirkumi))
    render();
}

function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < pirkumi.length; i++) {
        let pirkums = `
        <div class="pirkums ${i}">
            <h3 id="pirkums-text">${pirkumi[i].daudzums}</h3>
            <h4>${pirkumi[i].produkts}</h4>
            <button onclick='removePirkums("${pirkumi[i].produkts}")'>Dzēst</button>
        </div>`;

        saraksts.innerHTML += pirkums;

        pirkumsRemove();
    }
    localStorage.setItem("pirkumi", JSON.stringify(pirkumi))
}
