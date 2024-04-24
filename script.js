const request = new XMLHttpRequest()
const box = document.querySelector('.wrapper')
const butgame = document.querySelector('.gamebut')
const butchar = document.querySelector('.charbut')
const butpoem = document.querySelector('.poem')
const page = document.querySelector('.gameplay')
const char = document.querySelector('.characters')
const poems = document.querySelector('.poems')
const leftbut = document.querySelector('.l')
const rightbut = document.querySelector('.r')
const leftbut2 = document.querySelector('.l2')
const rightbut2 = document.querySelector('.r2')
const leftbut3 = document.querySelector('.l3')
const rightbut3 = document.querySelector('.r3')
const leftbut4 = document.querySelector('.l4')
const rightbut4 = document.querySelector('.r4')
const leftbut5 = document.querySelector('.l5')
const rightbut5 = document.querySelector('.r5')
const img1 = document.querySelector('.scrshots')
const img2 = document.querySelector('.scrshots2')
const img3 = document.querySelector('.scrshots3')
const img4 = document.querySelector('.scrshots4')
const img5 = document.querySelector('.scrshots5')
const logo = document.querySelector('.logo')
const music = document.querySelector('.music')

//===========================================================================================


alert('Осторожно спойлеры')

logo.addEventListener('click', ()=>{
  music.controls = 'play'
})

//===========================================================================================
rightbut.addEventListener('click',()=>{
  img2.style.display = 'flex'
  img1.style.display = 'none'
} )

rightbut2.addEventListener('click',()=>{
  img3.style.display = 'flex'
  img2.style.display = 'none'
} )

rightbut3.addEventListener('click',()=>{
  img4.style.display = 'flex'
  img3.style.display = 'none'
} )

rightbut4.addEventListener('click',()=>{
  img5.style.display = 'flex'
  img4.style.display = 'none'
} )

rightbut5.addEventListener('click',()=>{
  img1.style.display = 'flex'
  img5.style.display = 'none'
} )

leftbut.addEventListener('click',()=>{
  img5.style.display = 'flex'
  img1.style.display = 'none'
} )

leftbut2.addEventListener('click',()=>{
  img1.style.display = 'flex'
  img2.style.display = 'none'
} )

leftbut3.addEventListener('click',()=>{
  img2.style.display = 'flex'
  img3.style.display = 'none'
} )

leftbut4.addEventListener('click',()=>{
  img3.style.display = 'flex'
  img4.style.display = 'none'
} )

leftbut5.addEventListener('click',()=>{
  img4.style.display = 'flex'
  img5.style.display = 'none'
} )
//===========================================================================================


butpoem.addEventListener('click',()=>{
  page.style.display = 'none'
  char.style.display = 'none'
  poems.style.display = 'block'
} )

butgame.addEventListener('click',()=>{
  page.style.display = 'block'
  char.style.display = 'none'
  poems.style.display = 'none'

} )

butchar.addEventListener('click',()=>{
  char.style.display = 'block'
  page.style.display = 'none'
  poems.style.display = 'none'

} )

//===========================================================================================


request.open("GET",'const.json')

request.send()

request.addEventListener('readystatechange',()=>{
  const data = JSON.parse(request.responseText)
  console.log(data);

  data.forEach((c) => {
    box.innerHTML += 
    `
      <div class="maincontent">
        <img class="image" src="${c.picture}"/>
        <div class="info">
        <h1 class="inf">${c.name}</h1>
        <h4 class="inf">Age -${c.age}</h4>
        <h4 class="inf">Height -${c.height}</h4>
        <h4 class="inf">File Name -${c.file_name}</h4>
        <h5 class="inf">${c.info}</h5>
        </div>
      </div>
    `
  })
})