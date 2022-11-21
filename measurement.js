const mongoose= require('mongoose')

const temperatureSchema = mongoose.Schema({
    unit_id: String,
    temperature: mongoose.Schema.Types.Decimal128,
    unix_timestamp: Number
    
})

const temperatureModel= mongoose.model('temp', temperatureSchema )

module.exports = temperatureModel