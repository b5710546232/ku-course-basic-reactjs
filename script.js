let clicks = 0
let messageBox = document.getElementById('message')
window.addEventListener('click',()=>{
    clicks++
    messageBox.textContent = clicks
})
