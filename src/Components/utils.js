// generate randome int
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

// function gen_picode(numOfChar) {
//     let gen_pin = "";
//     for (let i = 0; i < 4; i++) {
//         gen_pin += getRandomInt(10);
//     }
//     return gen_pin;
// }

const gen_picode = (numOfChar) => {
    let gen_pin = "";
    for (let i = 0; i < numOfChar; i++) {
        gen_pin += getRandomInt(10);
    }
    return gen_pin;
}
// console.log(`from the util : ${gen_picode(4)}`)

export default gen_picode;