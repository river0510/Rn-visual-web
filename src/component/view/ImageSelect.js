/**
 * Created by luohaoxin on 2017/6/6.
 */
import React, {Component} from "react";
import MySelect from "./MySelect";
var {connect} = require('react-redux');
class ImageSelect extends Component {
    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
    }

    render() {
        return (
            <div style={{display: "flex", flexDirection: "column",  margin: '5px',flex:1}}>
                <div style={{display: "flex", flexDirection: "row",  margin: '5px',flex:1}}>
                    {this.props.name}
                    <MySelect
                        value={this.props.value}
                        data={this.props.images}
                        onChange={(e)=>this.props.onChange(e)}
                    />
                </div>
                <input type='file' onChange={(e)=>this.test(e)}/>
            </div>
        )
    }

    test(ee) {
        let props = this.props;
        var f = ee.target.files[0];
        props.uploadImage(f.name.split('.')[0], f);
        this.props.onChange(f.name.split('.')[0]);
        // props.edit(props.selectedComponentConfig.get('type'),key,f.name.split('.')[0]);

    }
}
function mapStateToProps(state) {
    let images = [];
    let data = state.screenEditorData.get('images').toJS();
    for (var key in data) {
        images.push(key);
    }
    return {
        images
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        uploadImage: (name, value)=> {
            dispatch({type: "SCREEN_UPLOAD_IMAGE", name, value});
        }
    }
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(ImageSelect);
