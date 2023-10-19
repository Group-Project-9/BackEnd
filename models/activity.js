import mongoose from "mongoose";

const actvitySchema = new mongoose.Schema({
    user_id: {
        type: number,
        required: true,
    },
    act_id: {
        type: number,
        required: true,
    },
    activity: {
        type: string,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: number,
        required: true,
    },
    hour: {
        type: number,
        required: true,
    },
    minute: {
        type: number,
        required: true,
    },
    location: string,
    distance: string,
    note: string,
    image: string,
},{
    timestamps: true
})

const Actvity = mongoose.model("Actvitity" , actvitySchema, 'records')

export default Actvity;
