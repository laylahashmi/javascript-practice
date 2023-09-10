function handler() {
    console.log("clicked")
}

document.getElementById('myid').addEventListener("click", debounce(handler, 1000))

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay)
    }
}
