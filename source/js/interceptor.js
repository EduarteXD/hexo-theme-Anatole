function interceptClickEvent(e) {
    let href;
    let target = e.target;
    if (target.tagName === 'A') {
        href = target.getAttribute('href');
        if (href.indexOf('/') === 0 && window.location.hash === '#dark') {
            e.preventDefault();
            window.location = `${href}#dark`;
        }
    }
}

document.addEventListener('click', interceptClickEvent);

if (window.location.hash === '#dark') {
    document.getElementById('toggler').ckick();
    let html = document.getElementsByTagName('html')[0];
    html.id = 'dark-mode';
}
