const sendb = document.getElementById('send');
const aboutMe = document.getElementById('about');
const container = document.getElementById('aboutContainer')

aboutMe.addEventListener('click', (e) => {
   
let heading = document.createElement('div');
let main = document.createElement('div');
let paragraph1 = document.createElement('p');
let paragraph2 = document.createElement('span');
let paragraph3 = document.createElement('span')

container.appendChild(heading);
container.appendChild(main);
main.appendChild(paragraph1);
main.appendChild(paragraph2);
main.appendChild(paragraph3);
//adding class
heading.classList.add('head');
main.classList.add('paragraphs')
paragraph1.classList.add('para')
paragraph2.classList.add('para')
paragraph3.classList.add('para')
//adding content
heading.innerText = "About Me"
paragraph1.innerText = " my name is Ashu Yannick, I am Cameroonian"
paragraph2.innerText = "I am an aspiring software Developer at Caasitech Academy"
paragraph3.innerText = "I am tech inspired,Artistic and curious. There's allot more i can do but i'll let find out message me!  "


e.target.innerText = "see less"

    // container.removeChild(heading);
    // container.removeChild(main);
    // main.removeChild(paragraph1);
    // main.removeChild(paragraph2);
    // main.removeChild(paragraph3);
    
  


aboutMe.addEventListener('click', () => {
    window.location.reload();
});
});

sendb.addEventListener('click' , (e) => {
console.log('all good')
});