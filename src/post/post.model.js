import { model, Schema } from "mongoose";

const postSchema = Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true,
            maxLength: [50, 'Name cannot be more than 50 characters'],
        },
        description:{
            type: String,
            required: [true, 'Description is required'],
            maxLength: [125, 'Description cannot be more than 125 characters'],
        },
        course:{
            type: String,
            required: [true, 'Course is required'],
            enum: ['Taller', 'Tecnología', 'TICs', 'Práctica Supervisada'],
        },
        publicationDate:{
            type: Date,
            required: [true, 'Publication date is required'],
        },
        link: {
            type: String,
            required: [true, 'Link is required']
        }
    }
)

export default model('Post', postSchema)