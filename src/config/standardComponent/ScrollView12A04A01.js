module.exports = {
    "name": "ScrollView",
    "identifier": "1496893905217",
    "status": 0,
    "props": {
        "style": [
            {
                "name": "position",
                "type": "enum",
                "value": "relative",
                "constant": true
            },
            {
                "name": "height",
                "type": "measurement",
                "value": "componentHeight",
                "constant": true
            },
            {
                "name": "width",
                "type": "measurement",
                "value": "componentWidth",
                "constant": true
            },
            {
                "name": "borderColor",
                "type": "string",
                "constant": true
            },
            {
                "name": "borderRadius",
                "type": "measurement",
                "value": 0,
                "constant": true
            },
            {
                "name": "marginTop",
                "type": "measurement",
                "value": 0,
                "constant": true
            },
            {
                "name": "marginBottom",
                "type": "measurement",
                "value": 0,
                "constant": true
            },
            {
                "name": "marginRight",
                "type": "measurement",
                "value": 0,
                "constant": true
            },
            {
                "name": "marginLeft",
                "type": "measurement",
                "value": 0,
                "constant": true
            },
            {
                "name": "alignItems",
                "type": "enum",
                "value": "flex-start",
                "constant": true
            },
            {
                "name": "justifyContent",
                "type": "enum",
                "value": "flex-start",
                "constant": true
            },
            {
                "name": "backgroundColor",
                "type": "string",
                "constant": true
            },
            {
                "name": "flexDirection",
                "type": "enum",
                "value": "row",
                "constant": true
            },
            {
                "name": "borderWidth",
                "type": "int",
                "constant": true
            },
            {
                "name": "paddingLeft",
                "type": "measurement",
                "value": 0,
                "constant": false,
                "componentPropName": "containerPaddingHorizontal"
            },
            {
                "name": "paddingRight",
                "type": "measurement",
                "value": 0,
                "constant": false,
                "componentPropName": "containerPaddingHorizontal"
            }
        ],
        "subComponentType": {
            "name": "childType",
            "type": "string",
            "constant": false,
            "componentPropName": "subComponentType"
        },
        "list": {
            "name": "list",
            "type": "object",
            "constant": false,
            "componentPropName": "list",
            "value": []
        }
    },
}