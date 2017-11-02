import { Schema, model, SchemaType } from 'mongoose';

let BankAccountSchema: Schema = new Schema({
    bank: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    branch_code: {
        type: String,
        required: true,
    },
    account_number: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    }
});

let UserSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    type: {
        type: Number,
        required: true,
        enum: [1, 2, 3]
    },
    nickname: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    sex: {
        type: Number,
        required: true,
        enum: [0, 1]
    },
    birthday: {
        type: Date,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
        enum: ['en', 'jp']
    },
    address: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    location: {
        type: [Number],
        validate: {
            validator: (v) => {
                return v.constructor === Array && v.length === 2;
            },
            message: '{VALUE} is not a valid location!'
        }
    },
    is_online: {
        type: Boolean
    },
    last_online: {
        type: Date
    },
    start_time: {
        type: Date
    },
    end_time: {
        type: Date
    },
    rate: {
        type: Number,
        min: 1,
        max: 5
    },
    optional_items: {
        edu_background: String,
        place_of_employment: String,
        standard_time: String,
        picture: String,
        video: String,
    },
    identification: {
        images: [String],
        links: {
            facebook_id: String,
            google_id: String,
            twitter_id: String,
            instagram_id: String,
            linkedin_id: String
        },
        selfie: String
    },
    coordinator_bank_account: {
        type: BankAccountSchema
    },
    followers: [String],
    followings: [String],
    device_token: String,
    os: {
        type: Number,
        enum: [1, 2]
    },
    created_by: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})
const User = model('User', UserSchema);

export default User;