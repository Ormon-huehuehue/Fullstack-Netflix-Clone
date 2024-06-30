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
            type: String, 
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


const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email:{
        type: String, 
        required: true,
        unique:true,
        trim: true
    },
    emailVerified:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        //required:true  //this is commented out because google auth can also be used to sign in 
    },
    googleId :{
        type:String
    },
    image:{
        type:String
    },
    profiles:{
        type:[{type: Schema.Types.ObjectId, ref:"Profile"}],
        default:[]
    },
    favourites:{
        type:[
            {
                type: Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        default:[]
    },
}, {timestamps:true} )

//mongoose.models?.User to prevent it from recompiling the model if it already exists
export const User = mongoose.models?.User || mongoose.model("User", userSchema);

