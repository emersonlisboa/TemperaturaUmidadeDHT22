export default (mongoose) => {

  const schema = mongoose.Schema({
    sensor_name: {
      type: String,
      required: true,
    },

    temperature: {
      type: Number,
      required: true,
    },

    humidity: {
      type: Number,
      required: true,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });

  const Measurement = mongoose.model('measurement', schema);
  return Measurement
}