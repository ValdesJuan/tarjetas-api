var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

var servicios = {
  "Servicios disponibles (solo post)": {
   "CEALDRE": {
      "/":"Cargar tarjeta",
   },
   "CEALDTA": {
      "/": "Alta de tarjetas",
      "/OK": "Ejemplo alta correcta",
      "/ME": "Ejemplo monto excedido",
      "/MI": "Ejemplo monto inferior",
      "/NE": "Ejemplo numero de tarjetas excedido",
      "/SE": "Ejemplo saldo excedido"
    },
   "CECLDTA": {
      "/":"Listado de tarjetas",
      "/OK":"Ejemplo listado tarjetas",
      "/ER":"Ejemplo usuario no existe"
    },
   "CECOSAL": {
      "/":"Consulta saldo"
   },
   "CEMODTA": {
      "/":"Bloqueo y desbloqueo",
      "/D/OK":"Ejemplo desbloqueo correcto",
      "/D/ER":"Ejemplo desbloqueo fallido",
      "/B/OK":"Ejemplo bloqueo correcto",
      "/B/ER":"Ejemplo bloqueo fallido"
   }
  }
};

router.get('/', (req, res) => { res.json(servicios);})
      .post('/', (req, res) => { res.json(servicios);});

app.use(router);

var CealdreCtrl = require('./controllers/CEALDRE');
var CealdtaCtrl = require('./controllers/CEALDTA');
var CecldtaCtrl = require('./controllers/CECLDTA');
var CecosalCtrl = require('./controllers/CECOSAL');
var CemodtaCtrl = require('./controllers/CEMODTA');

var rutas = express.Router();

rutas.route('/CEALDRE/').post(CealdreCtrl.cealdre);

rutas.route('/CEALDTA/').post(CealdtaCtrl.cealdta);
rutas.route('/CEALDTA/Ok').post(CealdtaCtrl.cealdtaOK);
rutas.route('/CEALDTA/ME').post(CealdtaCtrl.cealdtaMontoExcedido);
rutas.route('/CEALDTA/MI').post(CealdtaCtrl.cealdtaMontoInferior);
rutas.route('/CEALDTA/NE').post(CealdtaCtrl.cealdtaNumeroExcedido);
rutas.route('/CEALDTA/SE').post(CealdtaCtrl.cealdtaSaldoExcedido);

rutas.route('/CECLDTA/').post(CecldtaCtrl.cecldta);
rutas.route('/CECLDTA/OK').post(CecldtaCtrl.cecldtaOK);
rutas.route('/CECLDTA/ER').post(CecldtaCtrl.cecldtaERROR);


rutas.route('/CECOSAL/').post(CecosalCtrl.cecosal);

rutas.route('/CEMODTA/').post(CemodtaCtrl.cemodta);
rutas.route('/CEMODTA/D/OK').post(CemodtaCtrl.cemodtaDOK);
rutas.route('/CEMODTA/D/ER').post(CemodtaCtrl.cemodtaDERROR);
rutas.route('/CEMODTA/B/OK').post(CemodtaCtrl.cemodtaBOK);
rutas.route('/CEMODTA/B/ER').post(CemodtaCtrl.cemodtaBERROR);

app.use(rutas);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});