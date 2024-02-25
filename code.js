const typeEl = document.querySelector('.text');
const careers = ["web developer", "Freelancer"];

let careerIndex = 0;
let characterIndex = 0;


updateText();
function updateText(){
      characterIndex++;
    typeEl.innerHTML = ` <h1>
    I'm Mercy Godsman, a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
  

if (characterIndex === careers[careerIndex].length){
characterIndex = 0;
careerIndex++
}
if (careerIndex ===careers.length){
    careerIndex = 0;
}
setTimeout(updateText, 400);

};