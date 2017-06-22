import React, {Component} from "react";
var {connect} = require('react-redux');
const STATE_NO_LOAD = 0;
const STATE_LOADING = 1;
const STATE_LOADED =2;
class ImageView extends Component {
    constructor(props) {
        super(props);
        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseOut = this.onMouseOut.bind(this)
        this.loadState = STATE_NO_LOAD;
    }

    onMouseOver() {
        // alert('mouseOver')
        // console.log('textmouseOver')
        let {componentIdentifier, dispatch} = this.props
        // dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_SELECT_COMPONENT',{identifier:componentIdentifier});
    }

    onMouseOut() {
        let {componentIdentifier, dispatch} = this.props
        // dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_UN_SELECT_COMPONENT',{identifier:componentIdentifier});
    }
    getImageFromMemory(src){
        return this.props.images.get(src)||this.props.images.get(src+"@3x")||this.props.images.get(src+"@2x")||undefined
    }
    render() {
        let {object, children, componentIdentifier, src, componentStatus, dispatch, style, ...props} = this.props
        let imageFile=this.getImageFromMemory(src);
        if (imageFile !== undefined) {
            switch (this.loadState){
                case STATE_NO_LOAD:{
                    this.image = "./src/img/loading.png";
                    this.loadState = STATE_LOADING;
                    var reader = new FileReader();
                    var me = this;
                    reader.onload = function (e) {
                        me.image = e.target.result;
                        me.setState({});
                    }
                    reader.readAsDataURL(imageFile);
                    break;
                }
                case STATE_LOADING:{
                    this.loadState=STATE_LOADED;
                    break;
                }
                case STATE_LOADED:{
                    if(this.src!==src){
                        this.image = "./src/img/loading.png";
                        this.loadState = STATE_LOADING;
                        var reader = new FileReader();
                        var me = this;
                        reader.onload = function (e) {
                            me.image = e.target.result;
                            me.setState({});
                        }
                        reader.readAsDataURL(imageFile);
                        break;
                    }
                }
            }
        } else {
            this.image = src;
        }
        this.src=src;
        if (componentStatus === 1) {
            style.borderColor = 'blue';
            style.borderWidth = '1px';
            style.borderStyle = 'solid';
        }
        return (
            <img style={style} onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver} {...props}
                 src={this.image}/>)
    }
}
function mapStateToProps(state) {
    return {
        images: state.screenEditorData.get('images'),
    };
}

module.exports = connect(mapStateToProps)(ImageView);
