console.log("I love Myself");

const addSection = document.getElementById("body-container");

// addSection.style.color="Red";
const section = document.createElement("section");
section.innerHTML = `
<h1>Starting Dom</h1>
<p>I am learning DOM</p>
<p>DOM means Document Object Model</p>
<h4>Ending this section</h4>
`;

addSection.appendChild(section);

function makeRed() {
  document.body.style.backgroundColor = "Red";
}

const blue = document.getElementById("make-blue");

blue.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const GREEN = document.getElementById("green");
       GREEN.onclick = function Green(){
        document.body.style.backgroundColor = 'green'
       }

document.getElementById('pink').addEventListener('click',function(){
  document.body.style.backgroundColor ='pink';
})
