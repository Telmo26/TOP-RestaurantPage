import "./style.css"

function aboutPage(content) {
    const container = document.createElement("div");
    container.classList.add("about-container");

    const owner = document.createElement("div");
    owner.innerHTML = `
    <h1>Owner</h1>
    <ul>
        <li>Name: John Smith</li>
        <li>Tel: +46 (0)6 11 11 11 11</li>
        <li>Email: realEmail@odin.com</li>
    </ul>
    `;

    const mainCook = document.createElement("div");
    mainCook.innerHTML = `
    <h1>Chef</h1>
    <ul>
        <li>Name: John Smither</li>
        <li>Tel: +46 (0)6 22 22 22 22</li>
        <li>Email: realEmail2@odin.com</li>
    </ul>
    `;

    container.append(owner, mainCook);
    content.append(container);
}

export default aboutPage;