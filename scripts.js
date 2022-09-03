const container = document.querySelector(".container");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    container.textContent = "";

    let n = prompt("Enter Canvas Size(not greater than 100): ");
    if (n >= 100) {
        alert("Canvas size need to be smaller than 100!");
    } else {
        for (let i = 0; i < n * n; i++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div");

            container.appendChild(gridDiv);
        }
        container.style.cssText = `grid-template-columns: repeat(${n}, 1fr);`;

        const gridDivs = document.querySelectorAll(".grid-div");

        console.log(gridDivs);
        gridDivs.forEach((gridDiv) => {
            gridDiv.addEventListener("mouseover", () => {
                gridDiv.style.cssText = "background-color: black";
            });
        });
    }
});
