// node-soap functionality ***********************
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

var fs = require('fs');
var jsonfile = require('jsonfile');

var http = require('http');
var cmd = require('node-cmd');
var shell = require('shelljs');

const fse = require('fs-extra');
const readline = require('readline');

var caleTest = "./rmt/examples/test.rmt";
var caleResult = "./rmt/examples/result.txt";
var caleResultEx = "./examples/result.txt";
var caleMaincode = "./examples/maincode.json";
var caleMaincodermt = "./rmt/examples/maincode.rmt";

// expose the routes to our app with module.exports
module.exports = function (app) {
    app.post('/api/view', function (req, res) {
        res.json({});
        shell.cd('C:/Users/Sonia/Documents/Visual Studio 2015/Projects/Node/Nodejs/');

        try {
            fse.copySync('./rmt/examples/example1.rmt', './rmt/examples/test.rmt')
            console.log("success!")
        } catch (err) {
            console.error(err)
        }

        fs.appendFile(caleTest, req.body.desc + ';', function (error) {

            if (error) {
                console.error("write error:  " + error.message);
            } else {

                shell.cd('C:/Users/Sonia/Documents/Visual Studio 2015/Projects/Node/Nodejs/rmt/');
                if (shell.exec('rmt.exe < examples/test.rmt > examples/result.txt').code !== 0) {
                    shell.echo('Error: rmt failed');
                    shell.exit(1);
                    shell.cd('C:/Users/Sonia/Documents/Visual Studio 2015/Projects/Node/Nodejs/');
                }
                console.log("Successful Write to " + caleTest);
            };

            var array = fs.readFileSync(caleResultEx).toString().split('\r\n');
            var jsonArray = [];
            array.forEach(function (value) {
                if (value.includes("loop") || value.includes("done")) {
                    if (value.includes("if")) {
                        jsonArray.push(value);
                    };
                };
            });

            //console.log(jsonArray);
            res.send(jsonArray);

            //var jsonobj = './examples/maincode.json';
            //var array = fs.readFileSync(caleResultEx).toString().split('\n');
            //var obj = {
            //    table: []
            //};
            //obj.table.push({ square: req.body.desc  });
            //var jsonobj = JSON.stringify(obj);

            //fs.writeFile(caleMaincode, jsonobj, 'utf8');
            //for (i in array) {
            //    console.log('Array= '+ array[i]);
            //    var string = array[i];
            //    var substring = "loop";

            //    fs.readFile(caleMaincode, 'utf8', function readFileCallback(err, data) {
            //        if (err) {
            //            console.log(err);
            //            console.log('Array= ' + array[i]);
            //        } else { 
            //            obj = JSON.parse(data); //now it an object
            //            obj.table.push({square: array[i] }); //add some data
            //            jsonobj = JSON.stringify(obj); //convert it back to json
            //            fs.writeFile(caleMaincode, jsonobj, 'utf8'); // write it back 
            //        }
            //    }) ;
            //}

        });
        //console.log('Json= ' + jsonobj);
        //res.send(jsonobj);
        //res.end();

    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};



