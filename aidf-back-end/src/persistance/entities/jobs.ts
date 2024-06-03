import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type:String,
        required:true,
    },
    type:{
        type:String,
        required: true,
    },
    location: {
        type:String,
        required:true,
    },
    questions: {
        type: [String],
        default: [
            "Share your academic background and highlight key programming concepts you have mastered."
        ],
    }

});

const Job = mongoose.model("Job",jobSchema);
export default Job;