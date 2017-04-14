/**
 * Created by HUANGCH7 on 2/21/2017.
 */
var express = require('express');
require('express-mongoose');
var ProbdataSchema = require('../model/ProbdataSchema');

var Probdata = ProbdataSchema.Probdata;
var router = express.Router();

router.get('/', function (req, res, next) {
    var criteria = JSON.parse(req.query.criteria);
    var fields = {};
    var options = {skip:0};
    Probdata.find(criteria, fields, options
    ).lean().exec(function (err, doc){
        res.send(doc);
        }
    );

});

router.post('/', function (req, res, next) {
    var criteria = req.body.criteria;
    var update = req.body.update;
    var options={upsert:true};
    Probdata.update(criteria,update,options,function(err){
        if(err){
            console.log(err);
            res.send({result:'fail'});
        }
        console.log('Update: '+JSON.stringify(update));
        res.send({result:'success'});
    });

});

module.exports = router;