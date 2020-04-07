const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {   //task-manager-api is the database name
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const user = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        validate(value) {
            if(error) {
                throw new Error('Invalid email format')
            }
        }
    },

    age: {
        type: Number,
        validate(value) {

            if(value < 0) {
                throw new Error('Age must be positive number')
            }

        }
    }
})

const me = new user({
    name: 'Nihad',
    age: 25
})

me.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

    // const task = mongoose.model('Task', {
    //     description: {
    //         type: String
    //     },
    //     completed: {
    //         type: Boolean
    //     }
    // })

    // const workDone = new task ({
    //     description: 'Work 1',
    //     completed: true
    // }) 

    // workDone.save().then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

