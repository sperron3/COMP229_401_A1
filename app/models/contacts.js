import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
    contactName: String, 
    contactNumber: String,
    contactEmail: String,
}, {
    timestamps: true, 
    collection: 'contacts'
});

export default mongoose.model("Contacts", ContactsSchema);