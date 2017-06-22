/**
 * Created by luohaoxin on 2017/4/28.
 */
import {deepCopy} from '../../utils/Utils'
import Immutable from 'immutable';

const initialState = {
    screenWidth:getScreenSize().screenWidth,
    screenHeight:getScreenSize().screenHeight,
    a:12,
    componentWidth:60,
    componentHeight:20,
    showDataModalVisible:false,
    importDataModalVisible:false,
    renameModalVisible:false,
    showScreenModalVisible:false,
    addExtraPropertyVisible:false,
    modifyExtraPropertyVisible:false,
    a2:8,
    latticceScreenHeight:80,
    modifyProperty: null,
};
function getScreenSize()
{
    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
    return {screenHeight:height,screenWidth:width};
}
export default function operator(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_SCREEN': {
            return Object.assign({}, state, action.data);
        }
        default:
            return state;
    }
}