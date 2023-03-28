// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartButtons = document.getElementsByClassName('like-glyph')
for (let i = 0; i < heartButtons.length; i++){
  heartButtons[i].addEventListener('click', (e) => {
    if (e.target.textContent === EMPTY_HEART) {
      mimicServerCall() 
        .then(data =>  {e.target.className = 'activated-heart'
        e.target.textContent = FULL_HEART
      })
        .catch(error => {
          const modalId = document.getElementById("modal")
          modalId.className = ""
          modalId.innerText = "error"
          setTimeout(() => modalId.className = 'hidden', 3000)
         })

    } else {
      e.target.textContent = EMPTY_HEART
      e.target.className = "like"
    }
  })
}


// document.addEventListener("DOMContentLoaded", toggleHeart);

// function toggleHeart() {

// }

// const heartButton = document.getElementsByClassName("like-glyph");
// document.addEventListener("click", (e) => {
//   console.log(e.target)
// });



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
