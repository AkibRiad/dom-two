function makeRed(){
    document.body.style.backgroundColor='red'
}


document.getElementById("pink").addEventListener('click',function(){
    document.body.style.backgroundColor='pink';
})


function changettext(){
    const change = document.getElementById("changeText");
    change.innerText = 'Changing Line by onclick attribute';
}


document.getElementById("update-btn").addEventListener('click',function(){
    const inputField= document.getElementById("input-field");
    const inputText = inputField.value;



    const defaultText = document.getElementById('default');
    defaultText.innerText =inputText;
    inputField.value= '';
})



