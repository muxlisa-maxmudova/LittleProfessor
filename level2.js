let d = Math.floor(Math.random()*100)
let e = Math.floor(Math.random()*100)
let c = d+e
document.querySelector('h1').innerHTML = `${d}+${e} = `

function level2 (){
    if (c=== +document.querySelector('input').value){
        document.querySelector('#smth').innerHTML = '✅'
    } else if (c!==+document.querySelector('input').value){
        document.querySelector('#smth').innerHTML = '❌'}
}