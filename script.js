
const container = document.querySelector (".container")

for (let i = 1; i < 2000; i++) {
    const shape = document.createElement("span");
    container.appendChild(shape);
}