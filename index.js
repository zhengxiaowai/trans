var qiniu = require("qiniu");
var shortid = require('shortid');
var _ = require('underscore');
var path = require('path');
var fs = require('fs');


var configPath = path.join(process.env.HOME, '.transrc');
var config = readConfig(configPath);


qiniu.conf.ACCESS_KEY = config.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.SECRET_KEY;
domain = config.domain;
bucket = config.bucket;


function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}


function uploadFile(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        process.stdout.write(domain + ret.key + '\n');
      } else {
        process.stderr.write(err);
      }
  });
}


function readConfig (configPath) {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
}

module.exports = function run(args) {
    _.each(args, function(item, index) {
        var extname = path.extname(item);
        var randomId = shortid.generate();
        var newFileName = randomId + extname;

        token = uptoken(bucket, newFileName);
        uploadFile(token, newFileName, item);
    });
}




