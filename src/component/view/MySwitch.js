/**
 * Created by luohaoxin on 2017/5/25.
 */
import React,{Component} from 'react'
class MySwitch extends Component{
    constructor(props){
        super(props);
        this.status=this.props.status? this.props.status:false;
        this.onClick=this.onClick.bind(this);
    }
    render(){
        return(
            <img style={{width:this.props.width,height:this.props.height}} src={this.getImage()} onClick={this.onClick}/>
        );
    }
    getImage(){
        if(this.status){
            return this.props.onPic;
        }else{
            return this.props.offPic;
        }
    }
    onClick(){
        this.status=!this.status;
        if(this.props.onStatusChanged){
            this.props.onStatusChanged(this.status);
        }
        this.setState({});
    }
    componentWillReceiveProps(props){
        this.status=props.status;
    }

}
module.exports=MySwitch