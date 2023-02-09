// home page content - module

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const para1 = document.createElement('p');
    para1.textContent = "Ranked the best - est.1922"

    const para2 = document.createElement('p');
    para2.textContent = "A family-owned pizzeria with roots deeply embedded in Italian heritage, specifically in Napoli, where the art of making authentic pizza has been passed down for generations. At Luigi's we pride ourselves on using only the finest and freshest ingredients, sourced locally whenever possible, to ensure that every bite is a taste of pure deliciousness. The traditional techniques used to make the pizzas are an ode to the classic Italian way of cooking, preserving the integrity of the dish and the culture it represents. At this Luigi's, the passion for creating the best pizza is palpable. The chefs, who are true masters of their craft, put their heart and soul into every pizza they make, using traditional recipes passed down from their ancestors. The result is a beautifully crafted pizza with a perfectly crispy crust, and a generous helping of flavorful toppings, all in perfect harmony."

    const pizzeria = document.createElement('img');
    pizzeria.src = "images/pizzeria.jpeg";

    // add all sections to div created
    home.appendChild(para1);
    home.appendChild(para2);
    home.appendChild(pizzeria);

    return home;
}

// add createHome() to main element in HTML
function loadHome() {
    const main = document.getElementById('main');
    main.appendChild(createHome());
}

export default loadHome;