import mongoose from 'mongoose';
import measurementModel from './measurement_model'

require('dotenv').config()

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_CONNECTION
db.measurements = measurementModel(mongoose);
export { db };