// import logo from './logo.svg';
// import './App.css';
import ComponentParser from './component/compentEditor/ComponentParser'
import ScreenParser from './component/compentEditor/ScreenParser'
import GridBackGround from './component/compentEditor/GridBackGround'
import ComponentTreeView from './component/compentEditor/ComponentTreeView'
import ComponentListView from './component/compentEditor/ComponentListView'
import ControllerPropertyInspector from './component/compentEditor/controllerPropertyInspector'
import BindComponentPropertyInspector from './component/compentEditor/BindComponentPropertyInspector'
import ShowDataModal from './component/compentEditor/ShowDataModal'
import ImportDataModal from './component/compentEditor/ImportDataModal'
import ShowScreenModal from './component/screenEditor/ShowScreenModal'
import ComponentSettingView from './component/compentEditor/ComponentSettingView'
import dispatchActions from './actions/index'
import {Layout,Button,InputNumber} from 'antd'
var {connect} = require('react-redux');
const { Header, Content, Footer, Sider,message } = Layout;
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import React, {Component} from "react";
import { Select} from 'antd';
const Option = Select.Option;
import MySelect from "./component/view/MySelect"
import ReactDOM from 'react-dom';
import ProjectImporter from './utils/ProjectImporter'
import ProjectExporter from './utils/ProjectExporter'

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      screenWidth:this.getScreenSize().screenWidth,
      screenHeight:this.getScreenSize().screenHeight,
      a:18,
      componentWidth:40,
      componentHeight:20,
      showDataModalVisible:false,
      importDataModalVisible:false,
    }
    this.updateDimensions = this.updateDimensions.bind(this);
      this.onFileImported=this.onFileImported.bind(this);
  }
  componentDidMount()
  {
    window.addEventListener("resize", this.updateDimensions);
      var input = ReactDOM.findDOMNode(this.refs.customAttributes)
      input.setAttribute('webkitdirectory', '')
      input.setAttribute('directory', '')
      input.setAttribute('multiple', '')
  }
  importFromFile(data){
      this.props.importData(data);
  }
  exportToFile(){
      let result={};
      result.images=this.props.images.toJS();
      result.screenData=this.props.screenData.toJS();
      result.componentConfig={};
      for(let c in this.props.componentConfig){
          result.componentConfig[this.props.componentConfig[c].componentName]=this.props.componentConfig[c].children[0]
      }
      let ex=new ProjectExporter();
      ex.exportZipFile(result,(e)=>{console.log(e)});
  }
  updateDimensions() {
      this.props.update(this.getScreenSize());
    // this.setState(this.getScreenSize());
  }
    onFileImported(){
        var input = ReactDOM.findDOMNode(this.refs.customAttributes);
        let im=new ProjectImporter();
        im.selectFile(input.files,(data)=>this.importFromFile(data));
        input.files=undefined;

    }
  getScreenSize()
  {
    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
    return {screenHeight:height,screenWidth:width};
  }
    render() {
        return (
            <div style={{display:'flex',position:'absolute',left:100,backgroundColor:"#00ff00",height:100,width:100}}>
                <div style={{display:'flex',position:'absolute',backgroundColor:"#ff0000",height:50,width:50,borderColor:'#0000ff',borderStyle:'solid',borderWidth:5}}>
                    <div style={{backgroundColor:"#fff000",height:150,width:150,}}></div>
                </div>
            </div>
        )
    }

  render() {
    return (
        <div className="card-container" style={{height:"100vh",overflow: "hidden"}}>
          <div style={{textAlign: "right", padding: "5px",height: "5vh"}}>
              <input type='file' onChange={this.onFileImported} id="uploadhead" ref='customAttributes'/>

              <Button type="primary" onClick={()=>this.exportToFile()}>导出文件</Button>
          </div>
          <div>
            <Tabs type="card" >
              <TabPane tab="Tab 1" key="1">{this.renderLayout1()}</TabPane>
              <TabPane tab="Tab 2" key="2">{this.renderLayout2()}</TabPane>
              <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
          </div>
          <div style={{clear: "both"}}> </div>
        </div>
    )
  }
  renderPainter(){
    let width = this.props.componentWidth*this.props.a
    let height = this.props.componentHeight*this.props.a
    return (
      <div style={{textAlign:"left"}}>
        <ComponentParser contentSize={{height:height,width:width}} a={this.props.a} style={{backgroundColor:"white",margin:'22px',width:width+'px',height:height+"px",marginLeft:'auto',marginRight:'auto',marginTop:'50px',marginBottom:"50px"}}>
          <GridBackGround a={this.props.a} contentSize={{height:height,width:width}}/>
        </ComponentParser>
      </div>
    );
  }
    renderScreen(){
        let width = 60*this.props.a2
        let height = this.props.latticceScreenHeight*this.props.a2
        return (
            <div style={{textAlign:"left"}}>
                <ScreenParser contentSize={{height:height,width:width}} a={this.props.a2} style={{backgroundColor:"white",margin:'22px',width:width+'px',height:height+"px",marginLeft:'auto',marginRight:'auto',marginTop:'50px',marginBottom:"50px"}}>
                    <GridBackGround a={this.props.a2} contentSize={{height:height,width:width}}/>
                </ScreenParser>
            </div>
        );
    }
  renderLayout1()
  {
    let {componentConfig} = this.props
    return (
      <Layout>
          <Content style={{ padding: '0 0' }}>
            <Layout style={{background: '#fff' ,height: "80vh"}}>
              <Sider width={300} style={{ background: '#fff' ,overflow: "auto"}}>
                <ComponentTreeView />
              </Sider>
              <Content style={{ minHeight: 280,overflow:"scroll",backgroundColor:"gray" }}>
                  <div style={{display:"flex",flexDirection:"row"}}>
                      <div hidden={this.props.operationMenuVisible? "":"hidden"}>
                          <ShowDataModal visible={this.props.showDataModalVisible} onCancel={()=>this.props.update({showDataModalVisible:false})}/>
                          <Button type="primary" onClick={()=>this.props.update({showDataModalVisible:true})}>显示配置数据</Button>
                          <ImportDataModal visible={this.props.importDataModalVisible} onCancel={()=>this.props.update({importDataModalVisible:false})} onOk={()=>this.props.update({importDataModalVisible:false})}/>
                          <Button type="primary" onClick={()=>this.props.update({importDataModalVisible:true})}>导入配置数据</Button>
                          <Button type="primary" onClick={()=>{
                              this.props.reset();
                          }}>重置数据</Button>
                      </div>
                      <span>a的单位长度:</span>
                      <InputNumber min={5} value={this.props.a}formatter={(e) => {
                          if(e === '')
                          {
                              return e;
                          }
                          if(e <5)
                          {
                              return this.props.a
                          }
                          let value = isNaN(parseFloat(e)) ? this.props.a:parseFloat(e)
                          if(this.props.a !== e)
                          {
                              this.props.update({a:e})
                          }
                          return value
                      }} onChange={(e)=>this.props.update({a:e})} />
                      <span>宽度(A):</span>
                      <InputNumber min={1} max={12} value={this.props.componentWidth/5} formatter={(e) => {
                          if(e === '')
                          {
                              return e;
                          }
                          if(e>12 || e <1)
                          {
                              return this.props.componentWidth
                          }
                          let value = isNaN(parseFloat(e)) ? this.props.componentWidth:parseFloat(e)
                          if(this.props.componentWidth !== e*5)
                          {
                              this.props.update({componentWidth:e*5})
                          }
                          return value
                      }} onChange={(e)=>this.props.update({componentWidth:e*5})} />
                      <span>高度(a):</span>
                      <InputNumber min={1} value={this.props.componentHeight}formatter={(e) => {
                          if(e === '')
                          {
                              return e;
                          }
                          if(e < 1)
                          {
                              return this.props.componentHeight
                          }
                          let value = isNaN(parseFloat(e)) ? this.props.componentHeight:parseFloat(e)
                          if(this.props.componentHeight !== e)
                          {
                              this.props.update({componentHeight:e})
                          }
                          return value
                      }} onChange={(e)=>this.props.update({componentHeight:e})} />
                  </div>

                  {this.renderPainter()}
              </Content>
              <Sider width={300} style={{ background: '#fff',overflow: "auto" }}>
                <Tabs type="card">
                  <TabPane tab="控件属性" key="1">
                    <ControllerPropertyInspector />
                  </TabPane>
                  <TabPane tab="组件属性" key="2">
                    <BindComponentPropertyInspector />
                  </TabPane>
                </Tabs>
            </Sider>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' ,height: '10vh'}}>
            PACB ©2017 Created by Ant UED
          </Footer>
        </Layout>
    )
  }
    renderLayout2()
    {
        return (
            <Layout>
                <Content style={{ padding: '0 0' }}>
                    <Layout style={{background: '#fff' ,height: "80vh"}}>
                        <Sider width={300} style={{ background: '#fff' ,overflow: "auto"}}>
                            <ComponentListView />
                        </Sider>
                        <Content style={{ minHeight: 280,overflow:"scroll",backgroundColor:"gray" ,overflow: "auto" }}>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div >
                                    <ShowScreenModal visible={this.props.showScreenModalVisible} onCancel={()=>this.props.update({showScreenModalVisible:false})}/>
                                    <Button type="primary" onClick={()=>this.props.update({showScreenModalVisible:true})}>显示配置数据</Button>
                                </div>
                                <span>a的单位长度:</span>
                                <InputNumber min={5} value={this.props.a2}formatter={(e) => {
                                    if(e === '')
                                    {
                                        return e;
                                    }
                                    if(e <5)
                                    {
                                        return this.props.a2
                                    }
                                    let value = isNaN(parseFloat(e)) ? this.props.a2:parseFloat(e)
                                    if(this.props.a2 !== e)
                                    {
                                        this.props.update({a2:e})
                                    }
                                    return value
                                }} onChange={(e)=>this.props.update({a2:e})} />
                                <span>高度(a):</span>
                                <InputNumber min={1} value={this.props.latticceScreenHeight}formatter={(e) => {
                                    if(e === '')
                                    {
                                        return e;
                                    }
                                    if(e < 1)
                                    {
                                        return this.props.latticceScreenHeight
                                    }
                                    let value = isNaN(parseFloat(e)) ? this.props.latticceScreenHeight:parseFloat(e)
                                    if(this.props.latticceScreenHeight !== e)
                                    {
                                        this.props.update({latticceScreenHeight:e})
                                    }
                                    return value
                                }} onChange={(e)=>this.props.update({latticceScreenHeight:e})} />
                                <span>页面选择:</span>
                                <MySelect
                                    value={this.props.selectedScreen}
                                    data={this.props.screenItems}
                                    onChange={(e)=>this.props.selectScreen(e)}
                                />
                            </div>

                            {this.renderScreen()}
                        </Content>
                        <Sider width={300} style={{background: '#fff' ,overflow: "auto",paddingLeft: "10px"}}>
                            <ComponentSettingView/>
                        </Sider>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' ,height: '10vh'}}>
                    PACB ©2017 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}
const mapStateToProps = (state) => {
    let screenData=state.screenEditorData.get('screenData').toJS();
    let screenItems=[];
    for(let i in screenData){
        screenItems.push(i);
    }
    return {
        screenWidth:state.screenStateData.screenWidth,
        screenHeight:state.screenStateData.screenHeight,
        a:state.screenStateData.a,
        componentWidth:state.screenStateData.componentWidth,
        componentHeight:state.screenStateData.componentHeight,
        a2:state.screenStateData.a2,
        latticceScreenHeight:state.screenStateData.latticceScreenHeight,
        showDataModalVisible:state.screenStateData.showDataModalVisible,
        importDataModalVisible:state.screenStateData.importDataModalVisible,
        operationMenuVisible:state.componentEditorData.operationMenuVisible,
        showScreenModalVisible:state.screenStateData.showScreenModalVisible,
        selectedScreen:state.screenEditorData.get('selectedScreen'),
        screenItems,
        images:state.screenEditorData.get('images'),
        screenData:state.screenEditorData.get('screenData'),
        componentConfig:state.componentEditorData.componentConfig,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (data) => {
            dispatch({type:"UPDATE_SCREEN",data:data});
        },
        reset:()=>{
            dispatch({type:"RESET_COMPONENT",randomNumber:(""+(new Date()).valueOf())});
        },
        selectScreen:(value)=>{
            dispatch({type:"SCREEN_SELECT_SCREEN",value});
        },
        importData:(data)=>{
            dispatch({type:"SCREEN_IMPORT_DATA",data});
        }
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(App);
