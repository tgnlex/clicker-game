rmport { Eta } from 'eta';

const config = {
  views: 'src/pages',
  varName: 'data'
}
config.functionHeader = "";
config.plugins = [];
config.parse = {}

const eta = new Eta({ views: 'pages'} );



export default eta;
