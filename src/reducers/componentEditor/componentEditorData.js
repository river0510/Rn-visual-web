import SetOfControl from "../../config/index";
import {deepCopy} from '../../utils/Utils'

const initialState ={
    propperties: {},
    identifier: '',
    renameIdentifier: '',
    renameContainerName:'',
    selectedComponentIndex: undefined,
    operationMenuVisible:false,
    componentConfig: [
    ]
};

export default function operator(state = initialState, action) {
    let componentIndex;
    let component;
    let identifier;
    let selectComponent;
    let componentConfig;
    let newState ;
    let newProps ;
    let propsName;
    let propertyName ;
    let extractkey;
    let value;
    let parentIdentifier;
    let control;
    let container;
    let i;
    let styleObject;
    switch (action.type) {
        case 'IMPORT_COMPONENT': {
            newState = deepCopy(state);
            newState.propperties=action.payload.component;
            newState.componentConfig[newState.selectedComponentIndex].children=[action.payload.component];
            newState.propperties={};
            newState.identifier='';
            return newState;
        }
        case "RESET_COMPONENT": {
            componentConfig = deepCopy(state.componentConfig);
            componentIndex=getContainerIndex(state.identifier,componentConfig);
            control = newControl(SetOfControl["View"],action.randomNumber);

            componentConfig[componentIndex].children=[];
            componentConfig[componentIndex].children.push(control);
            return Object.assign({}, state, {
                componentConfig:componentConfig,
            })
        }
        // case 'EDITOR_REPLACE_COMPONENT': {
        //     identifier = action.payload.identifier;
        //     selectComponent = search(state, identifier)
        //     component = deepCopy(action.payload.component);
        //     component.status = 1;
        //     newState = deepCopy(state);
        //     newState = replaceComponent(newState, identifier, component);
        //     return newState
        // }
        case 'EDITOR_ADD_COMPONENT': {
            parentIdentifier = action.payload.parentIdentifier;
            control = newControl(SetOfControl[action.payload.controlIndex],action.payload.randomNumber);
            newState = deepCopy(state);
            componentIndex=getContainerIndex(parentIdentifier,newState.componentConfig);
            addComponent(newState.componentConfig[componentIndex], parentIdentifier, control);
            newState.selectedComponentIndex=componentIndex;
            newState.identifier=control.identifier;
            newState.propperties=control;
            return newState
        }
        case 'EDITOR_ADD_COMPONENT_CONTAINER': {
            container=createContainer(action.componentName,action.randomNumber);
            newState = deepCopy(state);
            newState.componentConfig.push(container);
            newState.selectedComponentIndex=getContainerIndex(container.identifier,newState.componentConfig);
            newState.identifier=container.identifier;
            newState.propperties=container;
            return newState
        }
        case 'EDITOR_REMOVE_COMPONENT': {
            componentConfig = deepCopy(state.componentConfig);
            componentIndex=getContainerIndex(action.payload.identifier,componentConfig);
            if(deleteComponentContainer(componentConfig, action.payload.identifier)){
                identifier=undefined;
                container={};
                componentIndex=undefined;
            }
            else {
                deleteComponent(componentConfig[componentIndex], action.payload.identifier);
                container=componentConfig[componentIndex];
                identifier=container.identifier;
            }
            return Object.assign({}, state, {
                componentConfig:componentConfig,
                identifier: identifier,
                propperties:container,
                selectedComponentIndex:componentIndex
            })
        }
        case 'EDITOR_BEGIN_RENAME':
        {
            return Object.assign({}, state, {
                renameIdentifier:action.identifier,
                renameContainerName:getContainer(action.identifier,state.componentConfig).componentName,
            })
        }
        case "CHANGE_CONTAINER_NAME":
        {
            componentConfig = deepCopy(state.componentConfig);
            container = getContainer(state.renameIdentifier, componentConfig);
            container.componentName = action.name;
            return Object.assign({}, state, {
                componentConfig: componentConfig,
            })
        }
        case 'EDITOR_SELECT_CONTROL':
        {
            componentIndex=getContainerIndex(action.payload.identifier,state.componentConfig);
            component = search(state.componentConfig[componentIndex],action.payload.identifier)
            return Object.assign({}, state, {
                identifier: action.payload.identifier,
                propperties:component,
                selectedComponentIndex:componentIndex,
                operationMenuVisible:getOperationMenuVisible(action.payload.identifier,state.componentConfig)

            })
        }
        case 'EDITOR_CHANGE_PROPERTY':
        {
            newState = deepCopy(state)
            propsName = action.payload.name;
            value = action.payload.value;

            component = search(newState.componentConfig[state.selectedComponentIndex],state.identifier)
            newProps = component.props
            if(newProps[propsName])
            {
                newProps[propsName].value=value
            }
            for (i = 0; i < newProps.style.length; i++) {
                styleObject = newProps.style[i]
                if(styleObject.name === propsName)
                {
                    styleObject.value = value;
                    break;
                }
            }
            newState.propperties=component;
            return newState;
        }
        case "EDITOR_ADD_EXTRACT":
        {
            newState = deepCopy(state);
            newState.propperties = search(newState.componentConfig[state.selectedComponentIndex],state.identifier)
            newProps = newState.propperties.props
            propertyName = action.payload.propertyName;
            extractkey = action.payload.extractkey;
            if(newProps[propertyName])
            {
                newProps[propertyName].componentPropName=extractkey
                newProps[propertyName].constant = false
            }
            else {
                for (i = 0; i < newProps.style.length; i++) {
                    styleObject = newProps.style[i]
                    if(styleObject.name === propertyName)
                    {
                        styleObject.componentPropName = extractkey;
                        styleObject.constant = false;
                        break;
                    }
                }
            }
            return newState;
        }
        case "EDITOR_DELETE_EXTRACT":
        {
            newState = deepCopy(state);
            newState.propperties = search(newState.componentConfig[state.selectedComponentIndex],state.identifier)
            newProps = newState.propperties.props;
            propertyName = action.payload.propertyName;
            if(newProps[propertyName])
            {
                newProps[propertyName].componentPropName=undefined
                newProps[propertyName].constant = true
            }
            else {
                for (i = 0; i < newProps.style.length; i++) {
                    styleObject = newProps.style[i]
                    if(styleObject.name === propertyName)
                    {
                        styleObject.componentPropName = undefined;
                        styleObject.constant = true;
                        break;
                    }
                }
            }
            return newState;
        }
        case "SCREEN_IMPORT_DATA":{
            componentConfig=[];
            for(let c in action.data.componentConfig){
                componentConfig.push(createContainer(c,c,action.data.componentConfig[c]));
            }
            return Object.assign({}, initialState, {
                componentConfig:componentConfig,
            })
        }
        default:
            return state;
    }
}
function getOperationMenuVisible(identifier,componentConfig) {
    for(let i=0;i<componentConfig.length;i++){

        if(componentConfig[i].identifier===identifier){
            return true;
        }
    }
    return false;
}
function getContainerIndex(identifier,componentConfig) {
    let result=undefined;
    for(let i=0;i<componentConfig.length;i++){
        if(search(componentConfig[i],identifier)){
            result=i+'';
            break;
        }
    }
    return result;
}
function getContainer(identifier,componentConfig) {
    let result=undefined;
    for(let i=0;i<componentConfig.length;i++){
        result=search(componentConfig[i],identifier);
        if(result){
            break;
        }
    }
    return result;
}
function search(component,identifier)
{
    if(component){
        if(component.identifier === identifier)
        {
            return component
        }else {
            for(let index = 0;index < component.children.length;index++)
            {
                let temp=search(component.children[index],identifier);
                if(temp) return temp;
            }
            return undefined;
        }
    }else {
        return undefined;
    }
}
// function search(component, identifier) {
//     if (component.identifier === identifier) {
//         return component
//     }
//     else if (component.children && component.children.length > 0) {
//         for (let index = 0; index < component.children.length; index++) {
//             let subCompoent = search(component.children[index], identifier)
//             if (subCompoent !== undefined) {
//                 return subCompoent
//             }
//         }
//     }
//     return undefined;
// }
// "name": "component",
//     "identifier": "34340",
//     "componentName": "RK12A12A01",
//     "children": [{
function createContainer(componentName,randomNumber,control) {
    let result={};
    result.name="Container";
    result.identifier=randomNumber;
    result.componentName=componentName;
    result.children=[];
    randomNumber=""+(Number(randomNumber)+1);
    if(!control){
        control = newControl(SetOfControl["View"],randomNumber);
    }
    result.children.push(control);
    return result;
}
function replaceComponent(componentConfig, identifier, newCompoment) {
    if (componentConfig.identifier === identifier) {
        return newCompoment
    }
    else if (componentConfig.children && componentConfig.children.length > 0) {
        let newChildren = []
        for (let index = 0; index < componentConfig.children.length; index++) {
            newChildren.push(replaceComponent(componentConfig.children[index], identifier, newCompoment))
        }
        componentConfig.children = newChildren
    }
    return componentConfig
}
function deleteComponentContainer(componentConfig, identifier) {
    for(let i=0;i<componentConfig.length;i++){
        if(componentConfig[i].identifier===identifier){
            componentConfig.splice(i,1);
            return true;
        }
    }
    return false;
}

function deleteComponent(componentConfig, identifier) {
    if (componentConfig.identifier === identifier) {
        return true
    }
    else if (componentConfig.children && componentConfig.children.length > 0) {
        for (let index = 0; index < componentConfig.children.length; index++) {
            if (deleteComponent(componentConfig.children[index], identifier)) {
                componentConfig.children.splice(index, 1)
                break;
            }
        }
    }
    return false
}

function addComponent(componentConfig, identifier, child) {
    if (componentConfig.identifier === identifier) {
        componentConfig.children.push(child)
        return true;
    }
    if (componentConfig.children === undefined) {
        return false
    }
    for (let i = 0; i < componentConfig.children.length; i++) {
        let item = componentConfig.children[i];
        if (addComponent(item, identifier, child)) {
            return true;
        }
    }
    return false;
}

function newControl(Proptype,timestamp)
{
    let control = {
        "name":Proptype.name,
        "identifier":timestamp,
        "status":0,
        "props":{
            "style":[]
        },
        "children":[]
    }
    let {style,...otherProtypeOfProps} = Proptype.props
    let protypeOfStyles =style;
    for (let i = 0; i < protypeOfStyles.length; i++) {
        let styleItem = protypeOfStyles[i];
        let item = {
            "name":styleItem.name,
            "type":styleItem.type,
            "value":styleItem.default,
            "constant":true,
        }
        control.props.style.push(item)
    }

    for (let variable in otherProtypeOfProps) {
        if (otherProtypeOfProps.hasOwnProperty(variable)) {
            let prop = otherProtypeOfProps[variable];
            let item = {
                "name":prop.name,
                "value":prop.default,
                "type":prop.type,
                "constant":true,
            }
            control.props[variable] = item;
        }
    }
    return control;
}

