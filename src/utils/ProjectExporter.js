import JSZip from 'jszip';
import {saveAs} from 'file-saver'

class ProjectExporter
{
  exportZipFile(object,callBack)
  {
    this.workCount = 0;
    this.callBack = callBack;
    this.imageSet = {};
    this.homePageConfig=object.screenData.LatticeHomeScreen;
    this.lifePageConfig=object.screenData.LatticeLifeScreen;
    this.componentConfig=object.componentConfig;
    this.loadImageFiles(object.images)
  }

  loadImageFiles(images)
  {
    for (let imageId in images) {
      if (images.hasOwnProperty(imageId)) {
        this.workCount++;
        let imageFile = images[imageId];
        let reader = new FileReader();
        reader.onload = () => {
          let imageData = this.dataUrlToBlob(reader.result)
          this.imageSet[imageId] = imageData;
          this.checkoutImageImportDone();
        };
        reader.readAsDataURL(imageFile)
      }
    }
  }

  dataUrlToBlob(dataurl) {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
    // data:image/jpeg;base64,xxxxxx
    // var datas = dataurl.split(',', 2);
    // var blob = binaryToBlob(atob(datas[1]));
    // blob.fileType = datas[0].split(';')[0].split(':')[1];
    // blob.name = blob.fileName = 'pic.' + blob.fileType.split('/')[1];
    // return blob;
  }

  doZip()
  {
    let zip = new JSZip();
    let rootFolder = zip.folder('react_native');
    //forsite 文件夹
    let siteFolder = rootFolder.folder('PAFFHomeForSite');

    //组件文件
    let componentsFolder = siteFolder.folder('componentConfig');
    this.setComponentsFiles(componentsFolder);

    //栅格化配置
    let pageConfigFolder = siteFolder.folder('config');
    this.setPageConfig(pageConfigFolder)

    //图片资源配置
    let commonImageFolder = rootFolder.folder('PAFFThemeManager').folder('PAFFHomePage').folder('image').folder('common')
    this.setImageFolder(commonImageFolder)

    zip.generateAsync({type:"blob"}).then(
      content=> {
      // see FileSaver.js
        this.callBack(true)
        saveAs(content);
      },
      err=>{
        this.callBack(false)
      }
    );
  }

  setComponentsFiles(folder)
  {
    let indexJsString = "module.exports.componentConfig = {";
    for (let id in this.componentConfig) {
      if (this.componentConfig.hasOwnProperty(id)) {
        let component = this.componentConfig[id];
        folder.file(id+'.js','module.exports='+JSON.stringify(component))
        indexJsString+=("\n"+id+":() => require('./"+id+"'),")
      }
    }
    indexJsString+="\n}"
    folder.file('index.js',indexJsString);
  }

  setPageConfig(folder)
  {
    folder.file('LatticeHomeScreen.js','module.exports='+JSON.stringify(this.homePageConfig))
    folder.file('LatticeLifeScreen.js','module.exports='+JSON.stringify(this.lifePageConfig))
  }

  setImageFolder(folder)
  {
    let indexJsString = "module.exports = {";
    for (let id in this.imageSet) {
      if (this.imageSet.hasOwnProperty(id)) {
        let imageData = this.imageSet[id];
        folder.file(id+'.png',imageData, {base64: true})
        indexJsString+=("\n"+id+":() => require('./"+id+".png'),")
      }
    }
    indexJsString+="\n}"
    folder.file('index.js',indexJsString);
  }

  checkoutImageImportDone()
  {
    this.workCount--;
    if(this.workCount <= 0)
    {
      this.doZip();
    }
  }
}
module.exports = ProjectExporter
