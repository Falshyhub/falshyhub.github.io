let closeBio = document.querySelector('#bioheaderbutton');
let bio = document.querySelector('#bio')
let openBio = document.querySelector('.biohead')
let headerList =document.querySelector('#headerlist')
let bioButton=document.querySelector('#biobutton')


closeBio.onclick = function() {    
    bio.style.visibility = 'hidden';            
    headerList.style.visibility = 'visible';
}

openBio.onclick = function() {
    bio.style.visibility ='visible';
    headerList.style.visibility = 'hidden'
}

bioButton.onclick = function() {
    bio.style.visibility ='visible';
    headerList.style.visibility = 'hidden'
}
