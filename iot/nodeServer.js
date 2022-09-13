const express = require('express')
const app = express()
const port = 3000
var Gpio = require('onoff').Gpio;
var rhum = new Gpio(18, 'out');
var coca = new Gpio(17, 'out');
var whisky = new Gpio(27, 'out');

app.get('/rhumcoca', async (req, res) => {
    rhum.writeSync(1)
    await new Promise(r => setTimeout(r, 1000))
    rhum.writeSync(0)
    coca.writeSync(1)
    await new Promise(r => setTimeout(r, 8000))
    coca.writeSync(0)
    res.send("Hello")
})

app.get('/whiskycoca', async (req, res) => {
    whisky.writeSync(1)
    await new Promise(r => setTimeout(r, 1000))
    whisky.writeSync(0)
    coca.writeSync(1)
    await new Promise(r => setTimeout(r, 2000))
    coca.writeSync(0)
    res.send("Hello")
})

app.get('/coca', async (req, res) => {
    coca.writeSync(1)
    await new Promise(r => setTimeout(r, 4000))
    coca.writeSync(0)
    res.send("Hello")
})

app.get('/whisky', async (req, res) => {
    whisky.writeSync(1)
    await new Promise(r => setTimeout(r, 2000))
    whisky.writeSync(0)
    res.send("Hello")
})

app.get('/rhum', async (req, res) => {
    rhum.writeSync(1)
    await new Promise(r => setTimeout(r, 2000))
    rhum.writeSync(0)
    res.send("Hello")
})

app.listen(port, () => {
    console.log("Serveur lancé")
})
