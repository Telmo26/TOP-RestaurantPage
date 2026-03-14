import "./style.css"

function menuPage(content) {
    const container = document.createElement("div");
    container.classList.add("menu-container");

    const appetizers = document.createElement("div");
    appetizers.innerHTML = `
    <h3>Entrées (Appetizers)</h3>
    <ul>
        <li>French Onion Soup</li>
        <li>Fois Gras</li>
        <li>Salade Niçoise</li>
        <li>Pâté de Campagne</li>
        <li>Quiche Lorraine</li>
    </ul>
    `;

    const mainCourses = document.createElement("div");
    mainCourses.innerHTML = `
    <h3>Plats (Main Courses)</h3>
    <ul>
        <li>Coq au Vin</li>
        <li>Boeuf Bourguignon</li>
        <li>Duck Confit</li>
        <li>Ratatouille (Vegetarian)</li>
        <li>Steak Frites</li>
    </ul>
    `;

    const desserts = document.createElement("div");
    desserts.innerHTML = `
    <h3>Desserts</h3>
    <ul>
        <li>Crème Brulée</li>
        <li>Tarte Tatin</li>
        <li>Chocolate Mousse</li>
        <li>Crêpes Suzette</li>
        <li>Profiteroles</li>
        <li>Madeleines</li>
    </ul>
    `;

    const wine = document.createElement("div");
    wine.innerHTML = `
    <h3>Vin (Wine)</h3>
    <ul>
        <li>Bordeaux Red Wine</li>
        <li>Burgundy Pinot Noir</li>
        <li>Sancerre</li>
        <li>Alsace Riesling</li>
        <li>Champagne</li>
    </ul>
    `;

    container.append(appetizers, mainCourses, desserts, wine);
    content.append(container);
}

export default menuPage;