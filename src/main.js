const addEmail = document.querySelector('input')
const span = document.querySelector('span')
var flag  = false;
function sendEmail() {
  var recipient = "practice12computer@gmail.com";
  var subject = "Email : ";
  var body = addEmail.value ;
 

    
    if ( MailApp.sendEmail(recipient, subject, body) ) {
        span.style.color = ' #61b752;'
        span.innerHTML = 'Thank You For Subscribing!: '
    }
    else {
        span.style.color = 'red'
        span.innerHTML = 'Error  '
    }
        
    


}

const form = document.querySelector('form')
form.addEventListener('submit',e => {
    sendEmail()
    e.preventDefault()

} )


