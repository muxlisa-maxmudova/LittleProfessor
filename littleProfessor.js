// 1. Levelni sorasin . prompt metodini ishlatamiz
// 1.2. Agar user 3dan katta yoki 1ga teng va undan kichik son kiritadigan bolsa
// 1.3. levelni qayta sorasin (" faqat 1 2 3 level mavjud ")
// 2. Levelni kiritgandan song matematik amalni sorasin(+;-;*;/)
// 2.1 agar  matematik amal (+;-;*;/) ga teng bolmasa (+;-;*;/) faqat shu belgilarni kirit deb ogohlantirsin
// 3. Random tarzda 2ta sonni 2+3 =
// 3.1 natija agar togri bolmasa EEE yozuvi ciqsin hamda misolni yana bersin
// 3.2 3marta xato kiritgandan keyin esa togri javobni korsatsin
// 10ta random misol bersin. va 10 misol tugagach 10ta misoldan nechtasiga togri javob berganini aytsin m.u 8/10 5/10 natijani ciqarish kk
// while (true)-> cheksiz loop
// math.random
// math.floor
// accumulator pattern
// if else
//const p = document.querySelector("#level1")
const a = Math.round(Math.random()*10)
let b = Math.floor(Math.random()*10)
let c = a+b
document.querySelector('h1').innerHTML = `${a}+${b} = `
function level1 () {
  if (c === +document.querySelector('input').value) {
   document.querySelector('#smth').innerHTML = '✅'
  } else if (c !== +document.querySelector('input').value) {
   document.querySelector('#smth').innerHTML = '❌'
  }

}










