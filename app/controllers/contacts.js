import contactsModel from '../models/contacts.js';

//C reate
export function DisplayContactsPage(req, res, next){
    contactsModel.find(function(error, contactsCollection){
        if(error){
            console.error(error);
            res.end(error); //If an error occurs, show error information
        }
        res.render('index', 
            {title: 'Contacts List', 
            page: 'contacts/list', 
            movies: contactsCollection}); //index.ejs View. The variable is movies, contactsCollection is the value
    }).sort({"contactName":1})
}
//R read
export function DisplayAddContactsPage(req, res, next){
    res.render('index', 
        {title: 'Add Contact', 
        page: 'contacts/edit', contacts: {}});
}


export function ProcessAddContactsPage(req, res, next){
    
    let newContact = contactsModel({

        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        contactEmail: req.body.contactEmail
    });

    contactsModel.create(newContact, function(error, Contact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('contact-list');
    })
}
//U pdate
export function DisplayEditContactsPage(req, res, next){
    let id = req.params.id;

    contactsModel.findById(id, function(error, contact){

        if(error){
            console.error(error);
            res.end(error);
        }

        res.render('index', 
            {title: 'Edit Contact', 
            page: 'contacts/edit', 
            contact: contact});
    })
}

export function ProcessEditContactsPage(req, res, next){
    
    let id = req.params.id;
    
    let editContact = contactsModel({

        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        contactEmail: req.body.contactEmail
    })

    contactsModel.updateOne({_id: id}, editContact, function(error, Contact){ //update by ID
        if(error){
            console.error(error);
            res.end(error);
        }
        res.redirect('/contacts-list'); 
    })
}
//D delete

export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactsModel.remove({_id: id}, function(error){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contacts-list');
    })
}