/**
 * Created by luohaoxin on 2017/6/6.
 * 自动生成interface，jumpType的脚本工具
 */
var fs = require("fs");

function readLines(input, func) {
    var remaining = '';
    input.on('data', function(data) {
        remaining += data;
        var index = remaining.indexOf('\n');
        while (index > -1) {
            var line = remaining.substring(0, index);
            remaining = remaining.substring(index + 1);
            func(line);
            index = remaining.indexOf('\n');
        }

    });

    input.on('end', function() {
        if (remaining.length > 0) {
            func(remaining);
        }
    });
}

function func(data) {
    if(data.indexOf('case ')>=0){
        if(data.split('case ')[1]===undefined){
            console.log(data);
        }
        fs.appendFileSync(jumpTypePath,"   "+data.split('case ')[1].split(':')[0]+',\n');

        if(data.indexOf('qrcode_page')>=0){
            fs.appendFileSync(jumpTypePath,']\n');
        }
    }
}
function func2(data) {
    if(data.indexOf('case ')>=0){
        if(data.split('case ')[1]===undefined){
            console.log(data);
        }
        fs.appendFileSync(interfacePath,"   "+data.split('case ')[1].split(':')[0]+',\n');

        if(data.indexOf('ShowcaseListInterface_V_2')>=0){
            fs.appendFileSync(interfacePath,']\n');
        }
    }
}
var jumpTypePath=__dirname+"/jumpType.js";
var interfacePath=__dirname+"/interface.js";
fs.writeFileSync(jumpTypePath,'');
fs.writeFileSync(interfacePath,'');
fs.appendFileSync(jumpTypePath,'export default [\n');
fs.appendFileSync(interfacePath,'export default [\n');



var input = fs.createReadStream('/Users/luohaoxin/Documents/android/workspace/fuzhou/App_Android/react_native/PAFFHomePage/interface/base/LatticeInterface.js');
readLines(input, func);

var input2 = fs.createReadStream('/Users/luohaoxin/Documents/android/workspace/fuzhou/App_Android/react_native/PAFFHomePage/interface/base/InterfaceFactory.js');
readLines(input2,func2);
