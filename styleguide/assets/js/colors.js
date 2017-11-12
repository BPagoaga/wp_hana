const colors = [
    { name: "9120 U", hex: "F9F6BD", category: "Jaune" },
    { name: "9060 U", hex: "F8F6D6", category: "Jaune" },
    { name: "9224 U", hex: "FAEBDA", category: "Pêche" },
    { name: "P 10-1 C", hex: "F6E4C2", category: "Pêche" },
    { name: "9181 U", hex: "FDE2C2", category: "Pêche" },
    { name: "9580 U", hex: "E8F5D1", category: "Mint" },
    { name: "9600 U", hex: "EDF2C7", category: "Mint" },
    { name: "2253 U", hex: "C3F1CF", category: "Mint" },
    { name: "P 65-1 U", hex: "F7D6D2", category: "Rose" },
    { name: "9240 U", hex: "FDE6DE", category: "Rose" },
    { name: "12-1305 TCX", hex: "F4DEDE", category: "Rose" },
    { name: "PQ-2050C", hex: "EFD7E5", category: "Lavande" },
    { name: "9340 C", hex: "E7DCEA", category: "Lavande" },
    { name: "9040 U", hex: "DAEFF1", category: "Bleu" },
    { name: "9380 U", hex: "D7DBF2", category: "Bleu" },
    { name: "656 U", hex: "E2EAF2", category: "Bleu" }
];

const container = document.getElementById("container");
const bcg = document.getElementById("background_color");
const component = document.getElementById("components_color");
const components = document.querySelectorAll(".component");

colors.forEach(color => {
    // create a cell
    cell = document.createElement("div");
    cell.textContent = `
        ${color.category}
        ${color.name}
    `;
    cell.classList.add("cell");
    cell.style.backgroundColor = `#${color.hex}`;
    container.appendChild(cell);

    option = document.createElement("option");
    option.value = `#${color.hex}`;
    option.textContent = `
        ${color.category}
        ${color.name}
    `;

    bcg.appendChild(option);
    option1 = option.cloneNode();
    option1.textContent = `
        ${color.category}
        ${color.name}
    `;
    component.appendChild(option1);
});

function changeBackgroundColor() {
    document.body.style.backgroundColor = this.value;
}
function changeComponentsColor(argument) {
    components.forEach(
        component => (component.style.backgroundColor = this.value)
    );
}

bcg.addEventListener("change", changeBackgroundColor);
component.addEventListener("change", changeComponentsColor);
