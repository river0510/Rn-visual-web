import Esprima from 'esprima'

class ProjectImporter {
  constructor() {
    this.imageSet = {}
  }

  selectFile(files,callback) {
    this.clearWork();
    this.donecallback = callback
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      if (file.webkitRelativePath.indexOf('PAFFThemeManager/PAFFHomePage') >= 0) {
        this.getImageSet(file, files)
      } else if (file.webkitRelativePath.indexOf('PAFFHomeForSite/config') >= 0) {
        this.getPageConfig(file,files)
      } else if (file.webkitRelativePath.indexOf('PAFFHomeForSite/componentConfig')) {
        this.getComponentsIndex(file,files)
      }
    }
  }

  getImageSet(indexFile, fileSet) {
    if (indexFile.webkitRelativePath === 'react_native/PAFFThemeManager/PAFFHomePage/image/home/index.js' ||
      indexFile.webkitRelativePath === 'react_native/PAFFThemeManager/PAFFHomePage/image/life/index.js') {
      this.addWork();
      let reader = new FileReader();
      reader.onload = () => {
        let object = this.parseJS(Esprima.parse(reader.result), indexFile.webkitRelativePath, fileSet);
        this.imageSet = { ...object,
          ...this.imageSet
        };
        this.checkoutWorkDone();
      }
      reader.readAsText(indexFile)
    }
    else if(indexFile.webkitRelativePath === 'react_native/PAFFThemeManager/PAFFHomePage/image/index.js')
    {
      this.addWork();
      let reader = new FileReader();
      reader.onload = () => {
        let jsString = reader.result;
        jsString=jsString.replace("...require('./home/index'),",'');
        jsString=jsString.replace("...require('./finance/index'),",'');
        jsString=jsString.replace("...require('./life/index'),",'');
        jsString=jsString.replace("\n",'');
        try {
          let object = this.parseJS(Esprima.parse(jsString), indexFile.webkitRelativePath, fileSet);
          this.imageSet = { ...object,
            ...this.imageSet
          };
          this.checkoutWorkDone();
        } catch (e) {
          console.log(e)
          this.checkoutWorkDone();
        }


      }
      reader.readAsText(indexFile)
    }
  }

  getPageConfig(file,fileSet) {
    if (file.webkitRelativePath === 'react_native/PAFFHomeForSite/config/LatticeHomeScreen.js' ||
      file.webkitRelativePath === 'react_native/PAFFHomeForSite/config/LatticeLifeScreen.js') {
      this.addWork();
      let reader = new FileReader();
      reader.onload = () => {
        let object = this.parseJS(Esprima.parse(reader.result), file.webkitRelativePath, fileSet);
        if(file.webkitRelativePath === 'react_native/PAFFHomeForSite/config/LatticeHomeScreen.js')
        {
          this.homeconfig = object
        }
        else {
          this.lifeconfig = object
        }
        this.checkoutWorkDone();
      }
      reader.readAsText(file)
    }
  }

  getComponentsIndex(file,fileSet)
  {
    if (file.webkitRelativePath === 'react_native/PAFFHomeForSite/componentConfig/index.js') {
      this.addWork();
      let reader = new FileReader();
      reader.onload = () => {
        let object = this.parseJS(Esprima.parse(reader.result), file.webkitRelativePath, fileSet);
        this.customComponents = object
        for (let identifier in this.customComponents) {
          if (this.customComponents.hasOwnProperty(identifier)) {
            this.getComponentConfig(identifier,this.customComponents[identifier],fileSet)
          }
        }
        this.checkoutWorkDone();
      }
      reader.readAsText(file)
    }
  }
  getComponentConfig(identifier,file,fileSet)
  {
    this.addWork();
    let reader = new FileReader();
    reader.onload = () => {
      let object = this.parseJS(Esprima.parse(reader.result), file.webkitRelativePath, fileSet);
      this.customComponents[identifier] = object
      this.checkoutWorkDone();
    }
    reader.readAsText(file)
  }


  parseJS(programObject, file, fileSet) {
    for (let i = 0; i < programObject.body.length; i++) {
      let statement = programObject.body[i];
      if (statement.expression.right.type === 'ObjectExpression') {
        return this.parseExpression(statement.expression.right, file, fileSet);
      }
    }
  }

  parseExpression(expression, filePath, fileSet) {
    switch (expression.type) {
      case 'ObjectExpression':
        {
          let object = {};
          for (let i = 0; i < expression.properties.length; i++) {
            let property = expression.properties[i];
            object[this.parseExpression(property.key, filePath, fileSet)] = this.parseExpression(property.value, filePath, fileSet)
          }
          return object;
        }
      case 'ArrayExpression':
        {
          let array = [];
          for (let i = 0; i < expression.elements.length; i++) {
            let element = expression.elements[i];
            array.push(this.parseExpression(element, filePath, fileSet))
          }
          return array;
        }
      case 'ArrowFunctionExpression':
        {
          if (expression.body.type === 'CallExpression') {
            return this.parseExpression(expression.body, filePath, fileSet)
          } else {
            return '';
          }
        }
      case 'CallExpression':
        {
          if (expression.callee.type === 'Identifier' && expression.callee.name === 'require') {
            let targetFilePathString = expression.arguments[0].value
            if(targetFilePathString.indexOf('.js') < 0 && targetFilePathString.indexOf('.png') < 0 &&targetFilePathString.indexOf('.jpg') < 0)
            {
              targetFilePathString+='.js'
            }
            let targetFilePath = this.getFilePath(filePath, targetFilePathString)
            for (let i = 0; i < fileSet.length; i++) {
              let file = fileSet[i];
              if (targetFilePath.indexOf('.png') >= 0) {
                let splitArray = targetFilePath.split('.png');
                let twoxFilePath = splitArray[0] + "@2x.png";
                let threexFilePath = splitArray[0] + "@3x.png";
                if (file.webkitRelativePath === targetFilePath ||
                  file.webkitRelativePath === twoxFilePath ||
                  file.webkitRelativePath === threexFilePath) {
                  return file;
                }
              }
              else {
                if (file.webkitRelativePath === targetFilePath) {
                  return file;
                }
              }
            }
          }
          return '';
        }
      case 'Literal':
        {
          return expression.value;
        }
      case 'Identifier':
        {
          return expression.name;
        }
      default:

    }
  }

  getFilePath(currentPaths, relativePaths) {
    let currentfilePathsArray = currentPaths.split('/');
    let relativePathsArray = relativePaths.split('/');
    let targetFilePathArray = currentPaths.split('/');
    targetFilePathArray.pop();
    for (let i = 0; i < relativePathsArray.length; i++) {
      let filename = relativePathsArray[i];
      if (filename === '.') {
        continue;
      } else if (filename === '..') {
        targetFilePathArray.pop();
      } else {
        targetFilePathArray.push(filename)
      }
    }
    let targetFilePathString = '';
    for (let i = 0; i < targetFilePathArray.length; i++) {
      let pathString = targetFilePathArray[i];
      if (i >= targetFilePathArray.length - 1) {
        targetFilePathString += pathString;
      } else {
        targetFilePathString += (pathString + '/')
      }
    }
    return targetFilePathString;
  }

  clearWork()
  {
    this.workCount = 0
  }
  addWork()
  {
    this.workCount++;
  }
  checkoutWorkDone()
  {
    this.workCount--;
    if(this.workCount<=0)
    {
      let data={
        screenData:{
          LatticeHomeScreen:this.homeconfig,
          LatticeLifeScreen:this.lifeconfig
        },
        images:this.imageSet,
        componentConfig:this.customComponents
      }
      this.donecallback(data);
      console.log('workdown');
      console.log('>>>>>>>>>>>>>>>>>imageset');
      console.log(this.imageSet);
      console.log('>>>>>>>>>>>>>>>>>homeconfig');
      console.log(this.homeconfig);
      console.log('>>>>>>>>>>>>>>>>>lifeconfig');
      console.log(this.lifeconfig);
      console.log('>>>>>>>>>>>>>>>>>customerComponent')
      console.log(this.customComponents);
    }
  }
}

module.exports = ProjectImporter
