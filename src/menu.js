// Menu should contain a couple of varieties of pizza

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // 3 pizza varieties

    menu.appendChild(
        createMenuItem(
            'Margherita',
            5,
            'Muzzarella cheese, tomato sauce and fresh basil',
            '/images/margherita.png'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Pepperoni',
            7,
            'Muzzarella cheese, tomato sauce, imported salami from Italy and a drizzle of spicy olive oil.',
            '/images/pepperoni.png'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Vegetarian',
            6,
            'Muzzarella cheese, tomato sauce and an arrangement of in season vegetables slightly sauteed beforehand.',
            '/images/vegetarian.png'
        )
    );

    return menu;
}

// create a f() to create each menu item
    // Img - title/name - price - details

function createMenuItem(name, price, details, img) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const pizzaName = document.createElement('h2');
    pizzaName.textContent = name;

    const pizzaPrice = document.createElement('a');
    pizzaPrice.textContent = $ + price;

    const pizzaDetails = document.createElement('p');
    pizzaDetails.textContent = details;

    const pizzaImg = document.createElement('img')
    pizzaImg.src = img;
    pizzaImg.alt = `${pizzaName}`;

    menuItem.appendChild(pizzaImg);
    menuItem.appendChild(pizzaName);
    menuItem.appendChild(pizzaPrice);
    menuItem.appendChild(pizzaDetails);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;
