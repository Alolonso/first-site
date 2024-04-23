let buttonSaludar = document.getElementById("button-saludar"),
    title1 = document.getElementById("title-1")

function saludar () {
    title1.innerHTML = "Hola mundo!"
    setTimeout(() => {
        title1.innerHTML = "Mi primer sitio web"
    }, 1500);
}

buttonSaludar.addEventListener('click', () => saludar());