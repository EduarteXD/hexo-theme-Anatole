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
    let html = document.getElementsByTagName('html')[0];
    html.style = 'transition: none';
    document.getElementById('toggler').click();
    setTimeout(()=> {
        html.removeAttribute('style')
    }, 100);
} else {
    window.location.hash = "#light";
}
