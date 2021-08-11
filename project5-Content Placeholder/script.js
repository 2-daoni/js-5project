const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1628607292260-9195108b03b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt=""/>'
    title.innerHTML='Lorem ipsum dolor sit'
    excerpt.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum asperiores corrupti, eum ducimus ratione debitis aliquid dolor quos.'
    profile_img.innerHTML ='<img src="https://randomuser.me/api/portraits/men/47.jpg" alt="">'
    name.innerHTML = 'John'
    date.innerHTML = '2021.08.11'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))

}