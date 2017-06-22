/**
 * Created by luohaoxin on 2017/5/15.
 */
import Immutable,{Map} from "immutable";
const initialState = Immutable.fromJS({
    selectedIndex: undefined,
    selectedScreen: 'LatticeHomeScreen',
    componentStates: {},
    screenData: {
        LatticeHomeScreen: {
            name: "HomePage",
            version: 0,
            hideNavigationBar: "true",
            attr: {
                pageType: "home"
            },
            items: []
        },
        LatticeLifeScreen: {
            version: 0,
            pageType: "react-native",
            moduleName: "PAFFHomePage.LatticeLifeScreen",
            pageName: "LatticeLifeScreen",
            hideNavigationBar: true,
            // navigatorTitle: "",
            // url: "",
            // className: "",
            attr: {
                pageType: "life",
                width: 12
            },
            items: []
        }

    },
    images: {}

});
export default function operator(state = initialState, action) {
    let index;
    let component1;
    let component2;
    switch (action.type) {
        case 'SCREEN_ADD_COMPONENT': {
            let t = state.updateIn(['screenData', state.get('selectedScreen'), 'items'], list=>list.push(Immutable.fromJS(createItemByName(action.name))));
            return t;
        }
        case 'SCREEN_SELECT_COMPONENT': {
            let aa = state.set('selectedIndex', action.index);
            return aa;
        }
        case 'SCREEN_EDIT_COMPONENT': {
            if (action.property === 'width') {
                return state.setIn(['screenData', state.get('selectedScreen'), 'items', state.get('selectedIndex'), 'width'], action.value);
            } else if (action.property === 'height') {
                return state.setIn(['screenData', state.get('selectedScreen'), 'items', state.get('selectedIndex'), 'height'], action.value);
            } else {
                return state.setIn(['screenData', state.get('selectedScreen'), 'items', state.get('selectedIndex'), 'data', action.property], action.value);
            }
        }
        case 'SCREEN_UPLOAD_IMAGE': {
            return state.setIn(['images', action.name], action.value);

        }
        case 'SCREEN_EDIT_COMPONENT_STATE': {
            return state.setIn(['componentStates', action.name], action.value);
        }
        case "SCREEN_SELECT_SCREEN": {
            return state.set('selectedScreen', action.value).set('selectedIndex', undefined);
        }
        case "SCREEN_DELETE_COMPONENT": {
            index=state.get('selectedIndex');
            return state.updateIn(['screenData',state.get('selectedScreen'),'items'],list=>list.splice(index,1)).set('selectedIndex', undefined);
        }
        case "SCREEN_UP_COMPONENT": {
            index=state.get('selectedIndex');
            if(index==0) return state;

            component1=state.getIn(['screenData',state.get('selectedScreen'),'items',index-1]);
            component2=state.getIn(['screenData',state.get('selectedScreen'),'items',index]);
            return state.updateIn(['screenData',state.get('selectedScreen'),'items'],list=>list.set(index,component1).set(index-1,component2)).set('selectedIndex', index-1);
        }
        case "SCREEN_DOWN_COMPONENT": {
            index=state.get('selectedIndex');
            let size=state.getIn(['screenData',state.get('selectedScreen'),'items']).size;
            if(index==size) return state;

            component1=state.getIn(['screenData',state.get('selectedScreen'),'items',index]);
            component2=state.getIn(['screenData',state.get('selectedScreen'),'items',index+1]);
            return state.updateIn(['screenData',state.get('selectedScreen'),'items'],list=>list.set(index,component2).set(index+1,component1)).set('selectedIndex', index+1);

        }
        case "SCREEN_ADD_EXTRA_PROPERTY":{
            index=state.get('selectedIndex');
            let newState = state.toJS();
            newState.screenData[newState.selectedScreen].items[index].data[action.key] = action.value;
            newState = Immutable.fromJS(newState);
            return newState;
        }
        case "SCREEN_IMPORT_DATA":{
            let o=Immutable.fromJS({});
            for(let i in action.data.images){
                if(action.data.images[i] instanceof File)
                {
                    o=o.set(i,action.data.images[i]);
                }
            }
            return initialState.set("screenData",Immutable.fromJS(action.data.screenData)).set("images",o);
        }

        default:
            return state;
    }
}
function getComponentConfigById(name, componentConfigList) {
    for (let i = 0; i < componentConfigList.length; i++) {
        if (name === componentConfigList[i].type) {
            return componentConfigList[i];
        }
    }
}
function createItemByName(name) {
    let width = '4A';
    let height = '3A';
    let length = name.length;
    let unit = name.substring(length - 3, length - 2);
    let number = parseInt(name.substring(length - 5, length - 3));
    if ((unit === 'a' || unit === 'A') && !isNaN(number)) {
        height = number + unit;
    }
    unit = name.substring(length - 6, length - 5);
    number = parseInt(name.substring(length - 8, length - 6));
    if ((unit === 'a' || unit === 'A') && !isNaN(number)) {
        width = number + unit;
    }

    return {type: name, width, height, data: {}};

}
