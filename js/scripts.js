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

function pirkumsRemove() {
    let elements = document.getElementsByClassName('pirkums')

    for (let index = 0; index < elements.length; index++) {
        document.getElementsByClassName(index)[0].onclick = () => {
            let saraksts = document.getElementById('saraksts');
    
            pirkumi.slice(elements[index],1);

            render();

            console.log(index);
            console.log(pirkumi[index]);
        }
    }
}

function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < pirkumi.length; i++) {
        let pirkums = `
        <div class="pirkums ${i}">
            <h3 id="pirkums-text">${pirkumi[i].daudzums}</h3>
            <h4>${pirkumi[i].produkts}</h4>
        </div>`;

        saraksts.innerHTML += pirkums;

        pirkumsRemove();
    }
    localStorage.setItem("pirkumi", JSON.stringify(pirkumi))
}
