exports.cealdta = (req, res) => {
    if(!req.body.numdoc || ! req.body.monto){
        res.json("ERROR: Formato de json incorrecto, añadir campos 'monto' y 'numdoc'.");
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

exports.cealdtaOK = (req, res) => {res.json(require('../Json ejemplos/CEALDTA/montoCorrecto.json'))};

exports.cealdtaMontoExcedido = (req, res) => {res.json(require('../Json ejemplos/CEALDTA/montoExcedido.json'))};

exports.cealdtaMontoInferior = (req, res) => {res.json(require('../Json ejemplos/CEALDTA/montoInferior.json'))};

exports.cealdtaNumeroExcedido = (req, res) => {res.json(require('../Json ejemplos/CEALDTA/numeroTarjetasExcedido.json'))};

exports.cealdtaSaldoExcedido = (req, res) => {res.json(require('../Json ejemplos/CEALDTA/saldoExcedido.json'))};