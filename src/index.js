import _ from 'lodash'
import menu_card from './menu'
import { maindishes } from './menu'
import { deserts } from './menu'
import { appender } from './home'
import { about } from './home'
import { schedule } from './home'
import { former } from './contact'


const home = document.getElementById('content')


let container = home.appendChild(document.createElement('div'))
container.className = 'container'

   

   let defaultHome = () => {
    container.appendChild(appender().append1('h1', 'hero', 'Welcome to mukase'))
    container.appendChild(appender().append1('p', 'about', about)) 
    container.appendChild(appender().append1('h3', 'hero', 'Open Hours'))
    for (let i in schedule){
        let child = appender().appendTo('ul', 'li', 'list', `${i}: ${schedule[i]}`)
        container.appendChild(child)
    }
   };
   defaultHome()


const menu = document.getElementById('menu')
menu.addEventListener('click', ()=>{
    container.innerHTML = ''
    container.appendChild(menu_card(maindishes, 'Main Dishes'))
    container.appendChild(menu_card(deserts, 'Deserts'))
    
})

const homekey = document.getElementById('home')
homekey.addEventListener('click', ()=>{
    container.innerHTML = ''
    defaultHome() 
})

const contact = document.getElementById('contact')
contact.addEventListener('click', () => {
    container.innerHTML = ''
    container.appendChild(former(3))
})