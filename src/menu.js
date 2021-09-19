

export const maindishes = [
    {
        "img": './css/img/2.jpg',
        'name': 'some food',
        'description': `lorem ipsum the chow de 
                        bee me waaa so igo tell killers
                        make them come chop some you de barb?`,
        'price': '$32'
    },

    {
        "img": './css/img/3.jpg',
        'name': 'some food',
        'description': `lorem ipsum the chow de 
                        bee me waaa so igo tell killers
                        make them come chop some you de barb?`,
        'price': '$32'
    },

    {
        "img": './css/img/4.jpg',
        'name': 'some food',
        'description': `lorem ipsum the chow de 
                        bee me waaa so igo tell killers
                        make them come chop some you de barb?`,
        'price': '$32'
    }


]


export const deserts = [
    {
        "img": './css/img/5.jpg',
        'name': 'some food',
        'description': `lorem ipsum the chow de 
                        bee me waaa so igo tell killers
                        make them come chop some you de barb?`,
        'price': '$32'
    }, 
    {
        "img": './css/img/6.jpg',
        'name': 'some food',
        'description': `lorem ipsum the chow de 
                        bee me waaa so igo tell killers
                        make them come chop some you de barb?`,
        'price': '$32'
    },
    {
        "img": './css/img/7.jpg',
        'name': 'some food',
        'description': `lorem ipsum the chow de 
                        bee me waaa so igo tell killers
                        make them come chop some you de barb?`,
        'price': '$32'
    },
    {
        "img": './css/img/2.jpg',
        'name': 'some food',
        'description': `lorem ipsum the chow de 
                        bee me waaa so igo tell killers
                        make them come chop some you de barb?`,
        'price': '$32'
    }
]


function menu_card(list_, category){
    let menu = document.createElement('div')
    menu.id = 'card'
    let hero = document.createElement('h2')
    hero.className = 'hero'
    hero.appendChild(document.createTextNode(category))
    
    
    
    for (let item of list_){
        let ul = document.createElement('ul')
        let members = Object.keys(item)
        for (let i = 0; i < members.length; i++){
            if (members[i] == 'img'){
                let img = (document.createElement('img'))
                img.className = 'card_img'
                img.src = item[members[i]]
                ul.appendChild(img)
            }
            else if (members[i] == 'name'){
                let li = document.createElement('li')
                let h4 = document.createElement('h4')
                h4.className = 'hero1'
                h4.appendChild(document.createTextNode(item[members[i]]))
                ul.appendChild(h4)
                
            }
            else{
                console.log(item[members[i]])
                let li = document.createElement('li')
                li.appendChild(document.createTextNode(item[members[i]]))
                ul.appendChild(li)
                console.log('theboy')
            }
        } menu.appendChild(ul)
           
    } menu.appendChild(hero)
    return menu

}



export default menu_card