var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);



var CealdtaCtrl = require('./controllers/CEALDTA');
var cealdta = express.Router();

cealdta.route('/').post(CealdtaCtrl.cealtar);
cealdta.route('/Ok').post(CealdtaCtrl.cealtarOK);
cealdta.route('/ME').post(CealdtaCtrl.cealtarMontoExcedido);
cealdta.route('/MI').post(CealdtaCtrl.cealtarMontoInferior);
cealdta.route('/NE').post(CealdtaCtrl.cealtarNumeroExcedido);
cealdta.route('/SE').post(CealdtaCtrl.cealtarSaldoExcedido);

app.use("/cealtar",cealdta);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});