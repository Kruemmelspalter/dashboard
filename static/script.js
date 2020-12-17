function toggleDarkmode() {
    for (var element of document.getElementsByClassName("dashboard")) {
        console.log(element)
        if (element.classList.contains("dark")) element.classList.remove("dark")
        else element.classList.add("dark")
    }
}

// use href=':8000' to redirect to port 8000
function redirect(target) {
    console.log(target)
    if (target.tagName.toLowerCase() == 'a')
    {
        var port = target.getAttribute('href').match(/^:(\d+)(.*)/);
        if (port)
        {
           target.href = window.location.origin;
           target.port = port[1];
        }
    }
}