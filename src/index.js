import homePage from "./tabs/home/index.js"

const displayManager = new class {
    #tab;

    #displayTab() {
        switch (this.#tab) {
            case 1: 
                homePage();
                break;
            case 2:
                homePage();
                break;
            case 3: 
                homePage();
                break;
        }
    }

    switchTab(newTab) {
        if (newTab > 0 && newTab < 4) {
            this.#tab = newTab;
        }
        this.#displayTab();
    }
}

document.getElementById("home").addEventListener("click", () => {
    displayManager.switchTab(1);
});
document.getElementById("menu").addEventListener("click", () => {
    displayManager.switchTab(1);
});
document.getElementById("about").addEventListener("click", () => {
    displayManager.switchTab(3);
})

displayManager.switchTab(1);

console.log("IT'S ALIVE")