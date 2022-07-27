import { 
  popupForm,
  inputName,
  inputPhone,
  inputEmail
} from "./constants"

popupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData()
  formData.append('ФИО', inputName.value)
  formData.append('Номер телефона', inputPhone.value)
  formData.append('Email', inputEmail.value)
  fetch('https://script.google.com/macros/s/AKfycbxWgINvZ0ZEsxu29LZOAZKdpb8pYNfjvxPYlWegOeGnxMFRrC2gzJP3YaW_Ab_7vFaTMQ/exec', {
  method: 'POST',
  body: formData,
  })
})