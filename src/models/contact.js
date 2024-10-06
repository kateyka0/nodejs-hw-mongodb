import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  isFavourite: { type: Boolean, default: false },
  contactType: { type: String, enum: ['personal', 'work'], required: true },
}, {
  timestamps: true, 
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

