import mongoose,{Schema} from "mongoose"

const videoSchema = new Schema(
    {
        id:{
            type:String,
            required:true,
        },
        videoPath: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, 
        },
        views: {
            type: Number,
            default: 0
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        genre:{
            type: String,
            required: true
        },
        },
    {
        timestamps: true
    }
)


export const Video = mongoose.models?.Video || mongoose.model("Video", videoSchema);
