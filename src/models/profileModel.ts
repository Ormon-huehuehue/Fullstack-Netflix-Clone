import mongoose,{Schema} from "mongoose"

const profileSchema = new Schema({
    name : {
        type: String,
        required: true
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
    watchList:{
        type:[String],
        default:[]
    },
    image:{
        type:String
    },
    owner:{
        type : Schema.Types.ObjectId,
        ref:"User"
    }
}, {timestamps:true} )


export const Profile = mongoose.models?.Profile || mongoose.model("Profile", profileSchema);

