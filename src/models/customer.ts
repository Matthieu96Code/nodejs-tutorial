import { Schema, model, HydratedDocument } from 'mongoose';

interface IOrder {
    description: string,
    amountInCents?: number
};

interface ICustomer {
    name: string,
    industry?: string,
    orders?: IOrder[]
}

const customerSchema = new Schema<ICustomer>({
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

const c: HydratedDocument<ICustomer> = new Customer({
    name: 'test',
    industry: 'test'
});

// console.log(c.name);

export default Customer;