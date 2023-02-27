const Contact = require('../models/Contact')

module.exports = {
    getContacts: async (req,res)=>{
        console.log(req.user)
        try{
            const contactItems = await Contact.find({userId:req.user.id})
            const itemsLeft = await Contact.countDocuments({userId:req.user.id,completed: false})
            res.render('contacts.ejs', {contacts: contactItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createContact: async (req, res)=>{
        try{
            await Contact.create({contactFirstName: req.body.contactFirstName, contactLastName: req.body.contactLastName, contactInfo: req.body.contactInfo, notes:req.body.notes, completed: false, userId: req.user.id})
            console.log('Contact has been added!')
            res.redirect('/contacts')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Contact.findOneAndUpdate({_id:req.body.contactIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Contact.findOneAndUpdate({_id:req.body.contactIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteContact: async (req, res)=>{
        console.log(req.body.contactIdFromJSFile)
        try{
            await Contact.findOneAndDelete({_id:req.body.contactIdFromJSFile})
            console.log('Deleted Contact')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    