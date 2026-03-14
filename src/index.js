import homePage from "./tabs/home/index.js"
import menuPage from "./tabs/menu/index.js"
import aboutPage from "./tabs/about/index.js";
import "./style.css";

const displayManager = new class {
    #tab;

    #displayTab() {
        const content = document.getElementById("content");
        content.innerHTML = "";
        switch (this.#tab) {
            case 1: 
                homePage(content);
                break;
            case 2:
                menuPage(content);
                break;
            case 3: 
                aboutPage(content);
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
    displayManager.switchTab(2);
});
document.getElementById("about").addEventListener("click", () => {
    displayManager.switchTab(3);
})

displayManager.switchTab(1);