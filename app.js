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



var cealtarCtrl = require('./controllers/CEALTAR');
var cealtar = express.Router();

cealtar.route('/').post(cealtarCtrl.cealtarOK);
cealtar.route('/Ok').post(cealtarCtrl.cealtarOK);
cealtar.route('/ME').post(cealtarCtrl.cealtarMontoExcedido);
cealtar.route('/MI').post(cealtarCtrl.cealtarMontoInferior);
cealtar.route('/NE').post(cealtarCtrl.cealtarNumeroExcedido);
cealtar.route('/SE').post(cealtarCtrl.cealtarSaldoExcedido);

app.use("/cealtar",cealtar);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});