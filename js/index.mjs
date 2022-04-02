'use strict';

import {envioForm} from './firebase.mjs';

const d = document;
const expresionesRegulares = {
    nombre: /^[A-Za-zÑnÁáÉéÍíÓóÚú\s]+$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    subject: /^.{1,60}$/,
};
const main = d.querySelector('main')
const form = d.querySelector('.contact-form')
const pError = d.querySelector('.pError');
const pErrorT = d.querySelector('.pErrorT')
const pErrorS = d.querySelector('.pErrorS')
const pErrorN = d.querySelector('.pErrorN')
const name_Form = d.getElementById('name');
const email_Form = d.getElementById('email');
const subject_Form = d.getElementById('subject');
const textarea = d.querySelector('textarea')
const submit = d.getElementById('submit');

// luego del envío del formulario


const loader = d.querySelector('.contact-form-loader')
const enviado = d.querySelector('.contact-form-response')

const eliminar = (el, elRemove) => {
    if (el.value.length === 0) {
        elRemove.classList.add('none')
    }
}

const handlerIf = (elObjeto, el, elRemove) => {
    !elObjeto.test(el.value) ? elRemove.classList.remove('none') : elRemove.classList.add('none');
}
// manejo de errores del nombre
name_Form.addEventListener('keyup', e => {
    handlerIf(expresionesRegulares.nombre, name_Form, pErrorN)
    eliminar(name_Form, pErrorN)
})

// manejo de errores del email
email_Form.addEventListener('keyup', e => {
    handlerIf(expresionesRegulares.email, email_Form, pError)
    eliminar(email_Form, pError)
    
})
// manejo de errores del subject
subject_Form.addEventListener('keyup', e => {
    handlerIf(expresionesRegulares.subject, subject_Form, pErrorS)
    eliminar(subject_Form, pErrorS)
})

// manejo de errores en el textarea
textarea.addEventListener('keyup', e => {
    if (e.target.value.length > 255) {
        pErrorT.classList.remove('none')
        pErrorT.innerHTML = `${textarea.title}, llevas ${e.target.value.length}*`
        textarea.style.border = '1px solid red'
    } else {
        textarea.style.border = '1px solid #ccc'
        pErrorT.classList.add('none')
    }
})
// Sincere@april.biz
/* form.action = `https://formsubmit.co/${email_Form.value}` */

d.addEventListener('submit', e => {
        if (e.target === form) {
            e.preventDefault();
            /*  async function fetchData(){
                 try{
                     let get = await fetch('https://jsonplaceholder.typicode.com/users')
                     let response = await get.json()
                     // filtra todo el elemento en el que el email sea igual al del formulario, sino no me regresa un array vacio
                     let data = await response.filter(el => el.email === email_Form.value)
                     console.log(data)
                 }catch(err){
                     console.log(err)
                 }

                 }
                 fetchData() */
            // simulacion del envío de datos con el setTimeout aplicado al loader
            loader.classList.remove('none');
            form.classList.add('none');
            
            setTimeout(() => {
                loader.classList.add('none')
                form.classList.remove('none')
            }, 2000)
            setTimeout(() => {
                enviado.classList.remove('none')
                setTimeout(() => {
                    enviado.classList.add('none')
                }, 2000)
            }, 2500)
            envioForm()
            form.reset()

        }
    }
    /* ,{
                once: true,
            } */
)