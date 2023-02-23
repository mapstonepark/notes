const deleteBtn = document.querySelectorAll('.del')
const contactItem = document.querySelectorAll('span.not')
const contactComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteContact)
})

Array.from(contactItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(contactComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteContact(){
    const contactId = this.parentNode.dataset.id
    try{
        const response = await fetch('contacts/deleteContact', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactIdFromJSFile': contactId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const contactId = this.parentNode.dataset.id
    try{
        const response = await fetch('contacts/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactIdFromJSFile': contactId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const contactId = this.parentNode.dataset.id
    try{
        const response = await fetch('contacts/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactIdFromJSFile': contactId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// Tickets
// How to make sure when item is deleted from the react front end, the item is also deleted from the database? Do we need seperate functions or can that all be done in one piece? Ie we delete it from the database and when react checks for it and sees its no longer there it doesn't show up anymore?