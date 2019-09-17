const request = require('request')
const {promisify} = require('util')

// const apiCall = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmNvcnkiLCJhIjoiY2swbnFrZDdhMDJnNzNsbnR6dDBhM2NrNCJ9.BeHT7nRIwzbuW_ga7rjKAw"


const promisifiedRequest = promisify(request)


const getLocation = async (place) => {
    try {
        let data = await promisifiedRequest({url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoidmNvcnkiLCJhIjoiY2swbnFrZDdhMDJnNzNsbnR6dDBhM2NrNCJ9.BeHT7nRIwzbuW_ga7rjKAw`, json:true})
            
        return({
            name: data.body.features[0].place_name,
            lat: data.body.features[0].center[0],
            lng: data.body.features[0].center[1]
               
    })
    } catch (error) {
        console.log("oops")
    }
}



module.exports = {
    getLocation
}