import express from 'express';
import controller from '../controllers/measurement_controller';

const app = express();


app.post('/measurement/', controller.create);
app.get('/measurement/', controller.findAll);
app.get('/measurement/:id', controller.findOne);
app.delete('/measurement/', controller.removeAll);

export { app as measurementRouter };