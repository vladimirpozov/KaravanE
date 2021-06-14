
window.addEventListener('DOMContentLoaded',()=>{
  console.log('hello')

  const slide = document.querySelectorAll('.product__slider-item')

  function click(){
    slide.forEach(item => {
      item.addEventListener('click',(e) => {
        if(e){
          remove()
          item.classList.add('active');
        }
      })
    })
  }

  function remove(){
    slide.forEach(item => {
        item.classList.remove('active')
      })
  }

  click()
})