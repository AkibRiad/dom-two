console.log("I love Myself");


const addSection = document.getElementById('body-container');

addSection.style.color="Red";
const section = document.createElement('section');
section.innerHTML=`
<h1>Starting Dom</h1>
<p>I am learning DOM</p>
<p>DOM means Document Object Model</p>
<h4>Ending this section</h4>
`;

addSection.appendChild(section);