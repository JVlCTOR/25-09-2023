 
//  documentos
/*
Selecionar elemento no js
document.
document.
document.
document.
document.

 .innertText -> retorna o texto/valor do nosso elemento
 .innertHTML -> retorna o HMTL do nosso elemento
*/

// function criarLista(){
//    const pegar =  document.querySelector('#container')
//   pegar.innerHTML = 
//   `<ol>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//   </ol>`
//   pegar.addEventListener('click', criarLista)
//   criarLista()
// }


// elementos


// const p = document.createElement('p')
// const h1 = document.createElement('h1')
// const  container = document.querySelector('#container')

// container.insertBefore(h1, container.firstChild)
// container.insertBefore(p, container.lastChild)

// let addh1 = document.querySelector('h1')
// addh1.innerText = 'modificado'
// let addp = document.querySelector('p')
// addp.innerText = 'modificado'

// container.removeChild(p)
// container.removeChild(h1)
// container.appendChild(p)
// container.insertBefore(p, container.firstChild)
// container.removeChild(p)





// atributos


// const container = document.querySelector('#container1')
// const p = document.createElement('p')
// container.appendChild(p)
// p.innerText = 'Texto'
// p.setAttribute("class", "valor")


// console.log(p.getAttribute('class'));
// p.removeAttribute("class")

// style 

// const container = document.querySelector("#container")
// const p = document.createElement('p')
// container.appendChild(p);
// p.innerHTML = `texto`
// p.classList.add('hidden')
// p.classList.remove('hidden')
// p.classList.add('show')


// function clicarr(){
//     p.classList.toggle('hidden')
//     p.classList.toggle('show')
// }

const p = document.createElement('p')
const h1 = document.createElement('h1')

const container = document.querySelector('#container')
container.append(p)
container.insertBefore(h1, p)

p.innerHTML = 'texto'
h1.innerHTML = 'titulo'

p.classList.add('texto')
h1.classList.add('titulo')

p.addEventListener('click', function(){
p.classList.toggle('texto')
})
h1.addEventListener('click', function(){
    h1.classList.toggle('titulo')
})