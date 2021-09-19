

function former(count){
    const div = document.createElement('div')
    div.className = 'contact'
    const form = document.createElement('form')
    form.className = 'forms'
    const types = ['text', 'email', 'message']
    const placeholders = ['Name', 'email', 'message']
    let heading = document.createElement('h2')
    heading.className = 'hero'
    heading.appendChild(document.createTextNode('Contact Us'))
    for (let i = 0; i < count; i++){
        let br = document.createElement('br')
        let inputs = document.createElement('input')
        inputs.className = 'formField'
        inputs.type = types[i]
        inputs.required
        inputs.placeholder = placeholders[i]
        form.appendChild(inputs)
        form.appendChild(br)
    }
    let button = document.createElement('button')
    button.type = 'submit'
    button.className = 'button'
    button.appendChild(document.createTextNode('Submit'))
    form.appendChild(button)
    div.appendChild(heading)
    div.appendChild(form)
    return div

}
	
export {former}