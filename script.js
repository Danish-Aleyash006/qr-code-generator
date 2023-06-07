const form = document.querySelector('.form')
const input = document.querySelector('.input')
const QRCode = document.querySelector('.qr_code')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const text = input.value
    input.value = ''
    
    QRCode.src= `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`

})