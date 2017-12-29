//GET
exports.getJsonExample = function (req, res) {
    res.json({
        "runService":{
            "opData":{
                "avanzar":false,
                "canal":"C_0002",
                "claveFin":"claveInicio",
                "entidad":"0002",
                "idioma":"es",
                "pantPagina":"0",
                "retroceder":false,
                "securityHash":"dd39bb21b834aa17d00de09ac50121de409bba3952c3cdcb7baf7abd8690c9f2"
            },
            "eEntrada":{
                "campo1":"0001",
                "campo2":"1000000001287",
                "campoN":"00000106"
            }
        }
    });
};



exports.cealtar = function (req, res) {
    if(!req.body.numdoc || ! req.body.monto){
        res.json("ERROR: Formato de json incorrecto\nAñadir campos 'monto' y 'numdoc'.");
    }
    else{
        var numdoc = parseInt(req.body.numdoc, 10);
        if(numdoc % 10 == 0){
            res.json(require('../Json ejemplos/CEALDTA/numeroTarjetasExcedido.json'));
        }
        else if(req.body.monto > 3000000){
            res.json(require('../Json ejemplos/CEALDTA/montoExcedido.json'));
        }
        else if(req.body.monto > 500000){
            res.json(require('../Json ejemplos/CEALDTA/saldoExcedido.json'));
        }
        else if(req.body.monto < 1000){
            res.json(require('../Json ejemplos/CEALDTA/montoInferior.json'));
        }
        else{
            res.json(require('../Json ejemplos/CEALDTA/montoCorrecto.json'));
        }
    }
};

exports.cealtarOK = function (req, res) {
    res.json(require('../Json ejemplos/CEALDTA/montoCorrecto.json'));
};

exports.cealtarMontoExcedido = function (req, res) {
    res.json(require('../Json ejemplos/CEALDTA/montoExcedido.json'));
};

exports.cealtarMontoInferior = function (req, res) {
    res.json(require('../Json ejemplos/CEALDTA/montoInferior.json'));
};

exports.cealtarNumeroExcedido = function (req, res) {
    res.json(require('../Json ejemplos/CEALDTA/numeroTarjetasExcedido.json'));
};

exports.cealtarSaldoExcedido = function (req, res) {
    res.json(require('../Json ejemplos/CEALDTA/saldoExcedido.json'));
};