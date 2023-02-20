import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const contactsSchema = new Schema({

    contactName: String,
    contactNumber: String,
    contactEmail: String
}, {
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model("Contacts", contactsSchema);

//model name: "Contacts"
//schema name: contactsSchema