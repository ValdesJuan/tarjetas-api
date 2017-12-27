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

exports.cealtarOK = function (req, res) {
    res.json(require('../Json ejemplos/montoCorrecto.json'));
};

exports.cealtarMontoExcedido = function (req, res) {
    res.json(require('../Json ejemplos/montoExcedido.json'));
};

exports.cealtarMontoInferior = function (req, res) {
    res.json(require('../Json ejemplos/montoInferior.json'));
};

exports.cealtarNumeroExcedido = function (req, res) {
    res.json(require('../Json ejemplos/numeroTarjetasExcedido.json'));
};

exports.cealtarSaldoExcedido = function (req, res) {
    res.json(require('../Json ejemplos/saldoExcedido.json'));
};