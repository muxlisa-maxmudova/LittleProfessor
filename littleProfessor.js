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
function getLevel (){
    while(true){
        let level = prompt('Level (1,2 or 3):')
        level = parseInt(level);
        if(level===1||level===2 || level===3){
            return level
        } else (alert('Invalid level. Please try again'))
    }
}
//getLevel()

function generator (level) {
    if(level===1){
       return Math.floor(Math.random()*10)
    } else if(level===2){
        return Math.floor(Math.random()*90)+10
    } else if(level===3){
        return Math.floor(Math.random()*900)+100
    } else {
        throw new Error('Invalid level. Please try again')
    }
}
function main () {
    const level = getLevel();
    let score = 0;
    for(let i = 1; i < 10; i++){
        const x = generator(level)
        const y = generator(level)
        const correct = x+y;
        let attempts = 0;
        while(attempts < 3){
            const userAnswer = prompt(`${x} + ${y} = `)
            if(!isNaN(userAnswer) && parseInt(userAnswer) === correct){
                score ++
                break;
            } else{
                alert('EEE');
            }
            attempts++;
        }
        if(attempts === 3){
            alert(`${x}+${y}=${correct}`);
        }
    }
    alert(`Score: ${score}/10`);
}
main()








