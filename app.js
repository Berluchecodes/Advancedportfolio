let isModalOpen = false
let contrastToggle = false

function toggleContrast() {
    contrastToggle = !contrastToggle
    if ( contrastToggle) {
       document.body.classList += " dark-theme" 
    }
    else {
        document.body.classList.remove("dark-theme")
    }
    
}

function contact(event) {
    event.preventDefault();   
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm (
        'service_9ne51qe',
       'template_nxv9l6v',
       event.target,
       '3Oiofu_PIc-qZWWcn'
    ).then (() => {
       loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    }).catch (() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "the email service is temporarily unavailable. Please contact me directly at Berluchep3@gmail.com"
        );
    })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen
    document.body.classList += " modal--open"
}