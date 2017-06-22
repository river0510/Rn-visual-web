//
// function deepCopy(object)
// {
//   let newObject = undefined
//   if(object instanceof Array)
//   {
//     newObject = []
//     for (let i = 0; i < object.length; i++) {
//       let item = object[i];
//       newObject.push(deepCopy(item))
//     }
//   }
//   else if(typeof(object) === 'string'||typeof(object) === 'number'||typeof(object) === 'boolean')
//   {
//     newObject = object
//   }
//   else if(object === undefined)
//   {
//     newObject = undefined
//   }
//   else
//   {
//     newObject = {}
//     for (let variable in object) {
//       if (object.hasOwnProperty(variable)) {
//         let item = object[variable];
//         newObject[variable] = deepCopy(item)
//       }
//     }
//   }
//   return newObject
// }
function deepCopy(source) {
  let result={};
  if(source instanceof Array){
    result=[];
  }
  for (var key in source) {
    result[key] = source[key] instanceof Object? deepCopy(source[key]): source[key];
  }
  return result;
}

function fileDownload(data, filename, mime) {
  var blob = new Blob([data], {type: mime || 'application/octet-stream'});
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // IE workaround for "HTML7007: One or more blob URLs were
    // revoked by closing the blob for which they were created.
    // These URLs will no longer resolve as the data backing
    // the URL has been freed."
    window.navigator.msSaveBlob(blob, filename);
  }
  else {
    var blobURL = window.URL.createObjectURL(blob);
    var tempLink = document.createElement('a');
    tempLink.href = blobURL;
    tempLink.setAttribute('download', filename);
    tempLink.setAttribute('target', '_blank');
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  }
}
function hasMultipleState(componentCofig){
  if(!componentCofig) return true;
  if(componentCofig.hasOwnProperty('name')&&componentCofig.hasOwnProperty('identifier')&&componentCofig.hasOwnProperty('props')){
    return false
  }
  else{
    return true
  }
}


module.exports={
  deepCopy,
  fileDownload,
  hasMultipleState,
}
