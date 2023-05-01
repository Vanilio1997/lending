const burgerBtn = document.querySelector('.burgerBtn')
const burgerElement = document.querySelector('.burger_element')
const project_container = document.querySelector('.project_container')
console.log(project_container.classList);
burgerBtn.addEventListener('click' , () => {
    burgerBtn.classList.toggle('active');
    burgerElement.classList.toggle('open')
    project_container.classList.toggle('full_height')
  
})
burgerElement.classList.contains('open')

function burgerBtnToggle(){
    if(window.innerWidth <= 667 | window.innerWidth >= 1220){
        burgerBtn.style.display = 'none'
        burgerElement.classList.remove('open')
        burgerBtn.classList.remove('active');
        project_container.classList.remove('full_height')
    } else{
        burgerBtn.style.display = 'flex'
        if(burgerElement.classList.contains('open')){
            burgerBtn.classList.add('active')
            project_container.classList.add('full_height')
        } else {
            project_container.classList.remove('full_height')
        }
    }
}

burgerBtnToggle()

window.addEventListener('resize' , burgerBtnToggle )