import app from './config/app.js';
import eta from './config/eta.js';
import data from './data/etaData.js';
const PORT = 4000;
app.get('/', (req, res, next) => {
  let index = eta.render("index.eta", data.index)
  res.status(200).send(index);
});

// Start function
const server = async(req, res, next) => {
  app.listen((PORT), (req, res) => {
    console.info(`Server listening on ${app.get('addr')}`)            
  })
}

export default server;
