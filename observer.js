let allLinks = document.querySelectorAll('nav a');

// Functions which erase the active class
const eraseActive = () => {
    allLinks.forEach( (link) => {
        if( link.classList = 'active') {
            link.classList.remove('active');
        }
    });
}

// Function which adds active-class 
const makeActive = (elem) => {
    eraseActive();
    elem.classlist.add('actief');
}

allLinks.forEach( (link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        makeActive(e.target);
        window.location = e.target.href;
    })
})