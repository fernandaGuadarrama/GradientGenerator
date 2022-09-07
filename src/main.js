//Select elements
const generate = document.querySelector('.generate');
const box = document.querySelector('.box');
const code = document.querySelector('.code');
//Hex Color code
let hexCode = '01234556789abcdef';
// Color Random
const gradientGenerator = () => {
    let hex = '#';
    for (let i = 0; i < 6; i++){
        hex += hexCode[Math.floor(Math.random()*
            hexCode.length)];
    };
    console.log(hex)
    return hex;
};
//Random angle
let randomAngle = () => {
    let angle = `${Math.floor(Math.random()*360)} deg`;
    return angle;
}
//Event listener
generate.addEventListener('click', ()=>{
    let backGrad = `linear-gradient(${randomAngle()}, ${gradientGenerator()}, ${gradientGenerator() } ) ` ;
    box.style.background = backGrad;
    code.style.background = backGrad;
    code.innerHTML = `${backGrad}`;
});