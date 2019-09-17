const request = require('request')
const {promisify} = require('util')

const promisifiedRequest = promisify(request)

const apikey = "d764f1c462fc2d621eaff64e929960b8"

const getWeather = async (locationData) => {
    try {
        let data = await promisifiedRequest(
            {url: `https://api.darksky.net/forecast/${apikey}/${locationData.lng},${locationData.lat}`, 
            json: true})
        
        return(data.body.currently)
        
    } catch (error) {
        console.log("Oops there's been a problem")
    }
}


module.exports = {
    getWeather
}