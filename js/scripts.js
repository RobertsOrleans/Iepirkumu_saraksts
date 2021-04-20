let pirkumi = [];

window.addEventListener('load', () => {
    console.log("Viss strādā!")
});

document.getElementById('add-button').addEventListener('click', () => {
    let pirkums = {produkts: produkts.value, daudzums: daudzums.value};

    produkts.value = "";
    daudzums.value = "";

    gramatas.push(gramata);

    render();
})