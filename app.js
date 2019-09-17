const {getWeather} = require('./getweather')
const {getLocation} = require('./getLocation')
const colors = require('colors')
const figlet = require('figlet')
const {promisify} = require('util')

const promisifiedFiglet = promisify(figlet)

const main = async (place) => {
    const location = await getLocation(place)
    const weather = await getWeather(location)
    const temp = Math.floor((weather.temperature -32) * 5/9)
    const data = await promisifiedFiglet("Weather", {
        font: 'coinstak'
    })
    console.log(data.rainbow)
    console.log(`The temperature in ${location.name.green} is ${colors.red(temp)}°C and the probability of rain is ${weather.precipProbability}`)
}

main(process.argv[2])














// request({url: `https://api.darksky.net/forecast/${apikey}/37.8267,-122.4233`, json: true}, (error, response) => {
//     if (error){
//         console.log(error)
//     } else {
//         const data = response.body
//         console.log({temp: data.currently.temperature, rain: data.currently.precipProbability})
//     }
// })