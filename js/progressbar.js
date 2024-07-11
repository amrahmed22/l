
let tag = document.getElementById('counter')
let x = 0


setInterval(() => {
    if (x == 72) {
        return
    }
    else
    {
        x= x+1
        tag.innerHTML = x +'%'
    }
}, 27);














  