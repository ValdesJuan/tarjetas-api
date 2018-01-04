exports.cemodta = (req, res) => {
    if(!req.body.numdoc || ! req.body.tipblq){
        res.json("ERROR: Formato de json incorrecto, añadir campos 'tipblq' ('B' o 'D') y 'numdoc'.");
    }
    else if(req.body.tipblq != "D" && req.body.tipblq != "B"){
        res.json("ERROR: El campo 'tipblq' solo puede ser 'B' o 'D'.");
    }
    else{
        var numdoc = parseInt(req.body.numdoc, 10);
        if(numdoc % 10 == 0){
            if(req.body.tipblq == "D"){
                res.json(require('../Json ejemplos/CEMODTA/errorDesbloqueo.json'));
            }
            if(req.body.tipblq == "B"){
                res.json(require('../Json ejemplos/CEMODTA/errorBloqueo.json'));
            }
        }
        else{
            if(req.body.tipblq == "D"){
                res.json(require('../Json ejemplos/CEMODTA/desbloqueo.json'));
            }
            if(req.body.tipblq == "B"){
                res.json(require('../Json ejemplos/CEMODTA/bloqueo.json'));
            }
        }
    }
};

exports.cemodtaDOK = (req,res) =>{ res.json(require('../Json ejemplos/CEMODTA/desbloqueo.json')); }
exports.cemodtaDERROR = (req,res) =>{ res.json(require('../Json ejemplos/CEMODTA/errorDesbloqueo.json')); }
exports.cemodtaBOK = (req,res) =>{ res.json(require('../Json ejemplos/CEMODTA/bloqueo.json')); }
exports.cemodtaBERROR = (req,res) =>{ res.json(require('../Json ejemplos/CEMODTA/errorBloqueo.json')); }