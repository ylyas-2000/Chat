let inputText = document.getElementById('inputText');
let sendMessage = document.querySelector('.fa-paper-plane');
let myChat = document.querySelector('.my-chat');
let sectionChat = document.querySelector('.section-chat');
let spanMyChat = document.querySelector('.my-chat span');
let spanDelete = document.querySelector('.my-chat .fa-trash');


spanMyChat.onclick = () => {
    spanMyChat.classList.toggle('active');
}

spanDelete.onclick = () => {
    spanMyChat.remove();
}


sendMessage.addEventListener('click', () => {
    let divMyChat = document.createElement('div');
    let spanChat = document.createElement('span');
    let myChatDelete = document.createElement('i');
    divMyChat.classList.add('my-chat');
    myChatDelete.className = 'fa-solid fa-trash';
    divMyChat.appendChild(spanChat);
    divMyChat.appendChild(myChatDelete);
    sectionChat.appendChild(divMyChat);
    spanChat.innerHTML = inputText.value;
    inputText.value = '';
    console.log('salam')


    spanChat.onclick = () => {
        spanChat.classList.toggle('active');
    }
    
    myChatDelete.onclick = () => {
        spanChat.remove();
    }
    
});

