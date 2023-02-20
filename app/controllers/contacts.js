import contactsModel from '../models/contacts.js';


//R ead Operations
export function DisplayContactsList(req, res, next){
    contactsModel.find(function (error, contactsCollection){
        if(error){
            console.error(error);
            res.end(error);
        }

        console.log(contactsCollection);

        res.render('index', {title: 'Contacts List', page: 'contacts/list', contacts: contactsCollection })
    })
}
//C reate
export function DisplayAddContactsPage(req, res, next){
    res.render('index', {title: 'Add Contact', page: 'contacts/update', contact: {}})
}

export function ProcessAddContactsPage(req, res, next){
    let newContact = contactsModel({
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,       
        contactEmail: req.body.contactEmail,
    });

    contactsModel.create(newContact,function(error, Contact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contacts-list');
    })
}

//U pdate
export function DisplayUpdateContactsPage(req, res, next){

    let id = req.params.id;

    contactsModel.findById(id, function(error, contact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.render('index', {title: 'Update Contact', page: 'contacts/update', contact})
    })    
}

export function ProcessEditContactsPage(req, res, next){
    let id = req.params.id


    let updateContact = contactsModel({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,       
        contactEmail: req.body.contactEmail,
    });

    contactsModel.updateOne({_id: id}, updateContact, function(error, Contact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contacts-list');
    })
}


//D elete
export function ProcessContactDelete(req, res, next){
    let id = req.params.id

    contactsModel.remove({_id: id}, function(error){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contacts-list');
    })
}