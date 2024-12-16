let f = Math.floor(Math.random()*1000)
let g = Math.round(Math.random()*1000)
let c = f+g
document.querySelector('h1').innerHTML = `${f}+${g} = `
function level3 (){
    if (c=== +document.querySelector('input').value){
        document.querySelector('#smth').innerHTML = '✅'

    } else if (c!==+document.querySelector('input').value){
        document.querySelector('#smth').innerHTML = '❌'}

}

console.log(g)
