const { Builder, Capabilities } = require("selenium-webdriver")

require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const  {addMovie} = require('../functions/addMovie')
const  {deleteMovie} = require('../functions/deleteMovie')
const {crossOutMovie} =require('../functions/crossOutMovie')
const {unCrossMovie} = require('../functions/unCrossMovie')

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})
afterAll(async () => {
    await driver.quit()
})

//let's pause the test at the end for 5 seconds
afterEach(async () => {
    await driver.sleep(1000)
})

test('Test add movie', async () => {
    await addMovie(driver)

})

test('delete a movie', async () => {
    await deleteMovie(driver)
})

test('Cross out a movie', async () => {
    await crossOutMovie(driver)
})

test('Uncross out a movie', async () => {
    await unCrossMovie (driver)
})