// Name - contact info

 function createContact () {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    contact.appendChild(
        contactForm(
            "Don Mario",
            "+5491231232",
            'mario@luigipizza.com'
        )
    )

    contact.appendChild(
        contactForm(
            "Don Luigi",
            "+5412111223",
            'luigi@luigipizza.com'
        )
    )

    return contact;
};

// contact creation f()-- Name - number - email //inputs
function contactForm(name, number, email) {
    const contactInput = document.createElement('div');
    contactInput.classList.add('contact-input');

    const fullName = document.createElement('h3');
    fullName.textContent = name;

    const phone = document.createElement('p');
    phone.textContent = number;

    const contactEmail = document.createElement('p');
    contactEmail.textContent = email;

    contactInput.appendChild(fullName);
    contactInput.appendChild(phone);
    contactInput.appendChild(contactEmail);

    return contactInput;
}

loadContact = () => {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;