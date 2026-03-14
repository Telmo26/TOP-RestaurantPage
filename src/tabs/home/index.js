import logo from "./OOAD5V0.jpg";

function homePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Telmo's Restaurant"
    content.append(title);

    const image = document.createElement("img");
    image.src = logo;
    image.alt = "A generic restaurant image";
    image.width = 400;
    content.append(image);

    const description = document.createElement("div");
    description.textContent = 
    `Welcome to Telmo's Restaurant: a charming place in the outskirts of Stockholm, serving authentic French food straight from the South West! 
    Come and taste our numerous duck specialties, served with Bordeaux red wine.
    And for dessert, you'll get to taste a delicious French pastry!`;
    content.append(description);
}

export default homePage;