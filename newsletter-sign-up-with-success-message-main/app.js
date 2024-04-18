const form = document.querySelector('form')
const mainCard = document.querySelector('.card')
const successCard = document.querySelector('.card2')
const emailData = document.querySelector('.email')
form.addEventListener('submit', (e)=>{
    if (emailData.value === ""){
    document.querySelector('.invalid').innerHTML="valid email required"
      
    } else {
        mainCard.classList.add("hide")
        successCard.classList.remove('hide')
    }
    e.preventDefault()
}) 
dissmissBtn.addEventListener('click',()=>{
    mainCard.classList.remove("hide")
    successCard.classList.add('hide')
})