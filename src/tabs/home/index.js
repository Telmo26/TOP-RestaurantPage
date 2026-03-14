import logo from "./OOAD5V0.jpg";
import "./style.css";

function homePage(content) {
    const container = document.createElement("div");
    container.classList.add("home-container");

    const title = document.createElement("h1");
    title.textContent = "Telmo's Restaurant"

    const image = document.createElement("img");
    image.src = logo;
    image.alt = "A generic restaurant image";
    image.width = 400;

    title.appendChild(image);

    const description = document.createElement("div");
    description.textContent = 
    `Welcome to Telmo's Restaurant: a charming place in the outskirts of Stockholm, serving authentic French food! 
    Come and taste our numerous specialties, served with Bordeaux red wine.
    And for dessert, you'll get to taste a delicious French pastry!`;

    const openingTime = document.createElement("div");
    {
        const timeTable = document.createElement("table");
        const thead = document.createElement("thead");
        {
            const day = document.createElement("th");
            day.textContent = "Day";

            const time = document.createElement("th");
            time.textContent = "Time";
            thead.append(day, time);
        }

        const tbody = document.createElement("tbody");
        for(let day of ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]) {
            const row = document.createElement("tr");

            const dayCell = document.createElement("td");
            dayCell.textContent = day;

            const timeCell = document.createElement("td");
            timeCell.textContent = "11:00 - 14:00 18:00 - 23:00";

            row.append(dayCell, timeCell);
            tbody.append(row);
        }

        timeTable.append(thead, tbody);
        openingTime.append(timeTable);
    }
    
    container.append(title, description, openingTime)
    content.append(container);
}

export default homePage;