const sensor = require("node-dht-sensor").promises;

const PIN = 22
const SENSOR_TYPE = 22
const READ_TIMER = 10000

async function readData() {
  try {
    const res = await sensor.read(SENSOR_TYPE, PIN);
    let d = new Date()
    let n = d.toLocaleString()

    console.log(
      `Date: ${n}, ` +
      `temp: ${res.temperature.toFixed(1)} °C, ` +
      `humidity: ${res.humidity.toFixed(1)}% `
    );
  } catch (err) {
    console.error("Falhou na leitura do Sensor:", err);
  }
}

console.log('Aguarde Inicilizacao do Sensor...')

setInterval(function () {
  readData();
}, READ_TIMER);
