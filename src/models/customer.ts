import { Schema, model } from 'mongoose';

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    industry: String,
    orders: [
        {
            description: String,
            amountInCents: Number
        }
    ]
});
const Customer = model('customer', customerSchema);
export default Customer;