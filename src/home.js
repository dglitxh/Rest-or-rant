function appender(){
    let append1 =  (el, class_, inner) =>{
    let child = document.createElement(el)
    child.className = class_
    child.appendChild(document.createTextNode(inner))
    return child
}
    let appendTo = (el1, el2, class_, inner)=>{
        let parent = document.createElement(el1)
        let child = document.createElement(el2)
        child.className = class_
        child.appendChild(document.createTextNode(inner))
        let family = parent.appendChild(child)
        return family
    }

    return {
        appendTo,
        append1
    }
}

export const about = `
If you’ve picked up this book, you’re probably aware of the extraordinary progress
        that deep learning has represented for the field of artificial intelligence in the recent
        past. In a mere five years, we’ve gone from near-unusable image recognition and
        speech transcription, to superhuman performance on these tasks.
        The consequences of this sudden progress extend to almost every industry. But in
        order to begin deploying deep-learning technology to every problem that it could
        solve, we need to make it accessible to as many people as possible, including non-
        experts—people who aren’t researchers or graduate students. For deep learning to
        reach its full potential, we need to radically democratize it.
        yessir
            `

export const schedule = {
    'monday': '6am - 5pm',
    'Tuesday': '6am - 5pm',
    'Wednesday': '6am - 5pm',
    'Thursday': '8am - 7pm',
    'Friday': '8am - 7pm',
}


export {appender}