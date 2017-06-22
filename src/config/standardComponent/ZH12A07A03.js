/**
 * Created by luohaoxin on 2017/6/6.
 */
module.exports = {
    nologin: {
        "name": "View",
        "identifier": "1496818982141",
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
                }
            ]
        },
        "children": [
            {
                "name": "Image",
                "identifier": "1496819569080",
                "status": 0,
                "props": {
                    "style": [
                        {
                            "name": "position",
                            "type": "enum",
                            "value": "absolute",
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
                            "name": "top",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "bottom",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "right",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "left",
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
                            "name": "backgroundColor",
                            "type": "color",
                            "constant": true
                        }
                    ],
                    "src": {
                        "name": "src",
                        "type": "image",
                        "constant": false,
                        "componentPropName": "backgroundImage",
                        "value": "headpage_user_icon_bg@3x"
                    }
                },
                "children": []
            },
            {
                "name": "View",
                "identifier": "1496819610058",
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
                            "value": 3.7,
                            "constant": true
                        },
                        {
                            "name": "marginLeft",
                            "type": "measurement",
                            "value": 3.7,
                            "constant": true
                        },
                        {
                            "name": "alignItems",
                            "type": "enum",
                            "value": "flex-end",
                            "constant": false,
                            "componentPropName": "align"
                        },
                        {
                            "name": "justifyContent",
                            "type": "enum",
                            "value": "flex-end",
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
                            "value": "column",
                            "constant": true
                        },
                        {
                            "name": "borderWidth",
                            "type": "int",
                            "constant": true
                        }
                    ]
                },
                "children": [
                    {
                        "name": "Text",
                        "identifier": "1496819849320",
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
                                    "name": "borderColor",
                                    "type": "color",
                                    "constant": true
                                },
                                {
                                    "name": "borderWidth",
                                    "type": "int",
                                    "constant": true
                                },
                                {
                                    "name": "color",
                                    "type": "color",
                                    "constant": false,
                                    "componentPropName": "bankNameColor",
                                    "value": "#111111"
                                },
                                {
                                    "name": "fontWeight",
                                    "type": "enum",
                                    "value": "normal",
                                    "constant": true
                                },
                                {
                                    "name": "fontSize",
                                    "type": "measurement",
                                    "value": 4,
                                    "constant": true
                                },
                                {
                                    "name": "lineHeight",
                                    "type": "measurement",
                                    "value": 4,
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
                                    "value": 0.9,
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
                                }
                            ],
                            "text": {
                                "name": "text",
                                "value": "XX银行",
                                "type": "string",
                                "constant": false,
                                "componentPropName": "bankName"
                            }
                        },
                        "children": []
                    },
                    {
                        "name": "Text",
                        "identifier": "1496819852783",
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
                                    "name": "borderColor",
                                    "type": "color",
                                    "constant": true
                                },
                                {
                                    "name": "borderWidth",
                                    "type": "int",
                                    "constant": true
                                },
                                {
                                    "name": "color",
                                    "type": "color",
                                    "constant": false,
                                    "value": "#666666",
                                    "componentPropName": "bankDesColor"
                                },
                                {
                                    "name": "fontWeight",
                                    "type": "enum",
                                    "value": "normal",
                                    "constant": true
                                },
                                {
                                    "name": "fontSize",
                                    "type": "measurement",
                                    "value": 2.3,
                                    "constant": true
                                },
                                {
                                    "name": "lineHeight",
                                    "type": "measurement",
                                    "value": 2.3,
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
                                }
                            ],
                            "text": {
                                "name": "text",
                                "value": "XX银行",
                                "type": "string",
                                "constant": false,
                                "componentPropName": "bankDes"
                            }
                        },
                        "children": []
                    },
                    {
                        "name": "View",
                        "identifier": "1496819859978",
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
                                    "constant": true
                                },
                                {
                                    "name": "width",
                                    "type": "measurement",
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
                                    "value": 3.6,
                                    "constant": true
                                },
                                {
                                    "name": "marginBottom",
                                    "type": "measurement",
                                    "value": 3.8,
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
                                    "value": "flex-end",
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
                                }
                            ]
                        },
                        "children": [
                            {
                                "name": "Text",
                                "identifier": "1496819940111",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "value": "#1773d0",
                                            "componentPropName": "buttonColor"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 2.3,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 2.3,
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
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "登录",
                                        "type": "string",
                                        "constant": true
                                    }
                                },
                                "children": []
                            },
                            {
                                "name": "Text",
                                "identifier": "1496819943456",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "value": "#1773d0",
                                            "componentPropName": "buttonColor"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 2.3,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 2.3,
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
                                            "value": 3.7,
                                            "constant": true
                                        },
                                        {
                                            "name": "marginLeft",
                                            "type": "measurement",
                                            "value": 3.7,
                                            "constant": true
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "|",
                                        "type": "string",
                                        "constant": true
                                    }
                                },
                                "children": []
                            },
                            {
                                "name": "Text",
                                "identifier": "1496819946628",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "value": "#1773d0",
                                            "componentPropName": "buttonColor"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 2.3,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 2.3,
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
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "注册",
                                        "type": "string",
                                        "constant": true
                                    }
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Text",
                "identifier": "1496840044253",
                "status": 0,
                "props": {
                    "style": [
                        {
                            "name": "position",
                            "type": "enum",
                            "value": "absolute",
                            "constant": true
                        },
                        {
                            "name": "borderColor",
                            "type": "color",
                            "constant": true
                        },
                        {
                            "name": "borderWidth",
                            "type": "int",
                            "constant": true
                        },
                        {
                            "name": "color",
                            "type": "color",
                            "value": "#00000000",
                            "constant": true
                        },
                        {
                            "name": "fontWeight",
                            "type": "enum",
                            "value": "normal",
                            "constant": true
                        },
                        {
                            "name": "fontSize",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "lineHeight",
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
                        }
                    ],
                    "text": {
                        "name": "text",
                        "value": "",
                        "type": "string",
                        "constant": false,
                        "componentPropName": "queryAssetNew"
                    }
                },
                "children": []
            }
        ]
    },
    lowLevel:{
        "name": "View",
        "identifier": "1496818982141",
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
                }
            ]
        },
        "children": [
            {
                "name": "Image",
                "identifier": "1496819569080",
                "status": 0,
                "props": {
                    "style": [
                        {
                            "name": "position",
                            "type": "enum",
                            "value": "absolute",
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
                            "name": "top",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "bottom",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "right",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "left",
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
                            "name": "backgroundColor",
                            "type": "color",
                            "constant": true
                        }
                    ],
                    "src": {
                        "name": "src",
                        "type": "image",
                        "constant": false,
                        "componentPropName": "backgroundImage",
                        "value": "headpage_user_icon_bg@3x"
                    }
                },
                "children": []
            },
            {
                "name": "View",
                "identifier": "1496819610058",
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
                            "value": 3.7,
                            "constant": true
                        },
                        {
                            "name": "marginLeft",
                            "type": "measurement",
                            "value": 3.7,
                            "constant": true
                        },
                        {
                            "name": "alignItems",
                            "type": "enum",
                            "value": "flex-end",
                            "constant": false,
                            "componentPropName": "align"
                        },
                        {
                            "name": "justifyContent",
                            "type": "enum",
                            "value": "flex-end",
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
                            "value": "column",
                            "constant": true
                        },
                        {
                            "name": "borderWidth",
                            "type": "int",
                            "constant": true
                        }
                    ]
                },
                "children": [
                    {
                        "name": "Text",
                        "identifier": "1496819849320",
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
                                    "name": "borderColor",
                                    "type": "color",
                                    "constant": true,
                                    "value": "#333333"
                                },
                                {
                                    "name": "borderWidth",
                                    "type": "int",
                                    "constant": true
                                },
                                {
                                    "name": "color",
                                    "type": "color",
                                    "constant": false,
                                    "componentPropName": "openAccountTitleColor"
                                },
                                {
                                    "name": "fontWeight",
                                    "type": "enum",
                                    "value": "normal",
                                    "constant": true
                                },
                                {
                                    "name": "fontSize",
                                    "type": "measurement",
                                    "value": 4,
                                    "constant": true
                                },
                                {
                                    "name": "lineHeight",
                                    "type": "measurement",
                                    "value": 4,
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
                                    "value": 1.1,
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
                                }
                            ],
                            "text": {
                                "name": "text",
                                "value": "开户有礼",
                                "type": "string",
                                "constant": false,
                                "componentPropName": "openAccountTitle"
                            }
                        },
                        "children": []
                    },
                    {
                        "name": "Text",
                        "identifier": "1496819852783",
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
                                    "name": "borderColor",
                                    "type": "color",
                                    "constant": true
                                },
                                {
                                    "name": "borderWidth",
                                    "type": "int",
                                    "constant": true
                                },
                                {
                                    "name": "color",
                                    "type": "color",
                                    "constant": false,
                                    "value": "#666666",
                                    "componentPropName": "openAccountDesColor"
                                },
                                {
                                    "name": "fontWeight",
                                    "type": "enum",
                                    "value": "normal",
                                    "constant": true
                                },
                                {
                                    "name": "fontSize",
                                    "type": "measurement",
                                    "value": 2.3,
                                    "constant": true
                                },
                                {
                                    "name": "lineHeight",
                                    "type": "measurement",
                                    "value": 2.3,
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
                                }
                            ],
                            "text": {
                                "name": "text",
                                "value": "三步搞定 轻松开户",
                                "type": "string",
                                "constant": false,
                                "componentPropName": "openAccountDes"
                            }
                        },
                        "children": []
                    },
                    {
                        "name": "View",
                        "identifier": "1496819859978",
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
                                    "constant": true
                                },
                                {
                                    "name": "width",
                                    "type": "measurement",
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
                                    "value": 3.3,
                                    "constant": true
                                },
                                {
                                    "name": "marginBottom",
                                    "type": "measurement",
                                    "value": 3.8,
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
                                    "value": "center",
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
                                }
                            ]
                        },
                        "children": [
                            {
                                "name": "Image",
                                "identifier": "1496826818610",
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
                                            "value": 3,
                                            "constant": true
                                        },
                                        {
                                            "name": "width",
                                            "type": "measurement",
                                            "value": 3,
                                            "constant": true
                                        },
                                        {
                                            "name": "top",
                                            "type": "measurement",
                                            "value": 0,
                                            "constant": true
                                        },
                                        {
                                            "name": "bottom",
                                            "type": "measurement",
                                            "value": 0,
                                            "constant": true
                                        },
                                        {
                                            "name": "right",
                                            "type": "measurement",
                                            "value": 0,
                                            "constant": true
                                        },
                                        {
                                            "name": "left",
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
                                            "name": "backgroundColor",
                                            "type": "color",
                                            "constant": true
                                        }
                                    ],
                                    "src": {
                                        "name": "src",
                                        "value": "headpage_ic_Open_account",
                                        "type": "image",
                                        "constant": true
                                    }
                                },
                                "children": []
                            },
                            {
                                "name": "Text",
                                "identifier": "1496826839048",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "componentPropName": "buttonColor",
                                            "value": "#1773d0"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 2.3,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 2.3,
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
                                            "value": 1,
                                            "constant": true
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "立即开户",
                                        "type": "string",
                                        "constant": true
                                    }
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    hightLevelShowAsset:{
        "name": "View",
        "identifier": "1496818982141",
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
                }
            ]
        },
        "children": [
            {
                "name": "Image",
                "identifier": "1496819569080",
                "status": 0,
                "props": {
                    "style": [
                        {
                            "name": "position",
                            "type": "enum",
                            "value": "absolute",
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
                            "name": "top",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "bottom",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "right",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "left",
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
                            "name": "backgroundColor",
                            "type": "color",
                            "constant": true
                        }
                    ],
                    "src": {
                        "name": "src",
                        "type": "image",
                        "constant": false,
                        "componentPropName": "backgroundImage",
                        "value": "headpage_user_icon_bg@3x"
                    }
                },
                "children": []
            },
            {
                "name": "View",
                "identifier": "1496819610058",
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
                            "value": 3.7,
                            "constant": true
                        },
                        {
                            "name": "marginLeft",
                            "type": "measurement",
                            "value": 3.7,
                            "constant": true
                        },
                        {
                            "name": "alignItems",
                            "type": "enum",
                            "value": "flex-end",
                            "constant": false,
                            "componentPropName": "align"
                        },
                        {
                            "name": "justifyContent",
                            "type": "enum",
                            "value": "flex-end",
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
                            "value": "column",
                            "constant": true
                        },
                        {
                            "name": "borderWidth",
                            "type": "int",
                            "constant": true
                        }
                    ]
                },
                "children": [
                    {
                        "name": "Text",
                        "identifier": "1496819849320",
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
                                    "name": "borderColor",
                                    "type": "color",
                                    "constant": true
                                },
                                {
                                    "name": "borderWidth",
                                    "type": "int",
                                    "constant": true
                                },
                                {
                                    "name": "color",
                                    "type": "color",
                                    "constant": false,
                                    "componentPropName": "accountTitleColor",
                                    "value": "#666666"
                                },
                                {
                                    "name": "fontWeight",
                                    "type": "enum",
                                    "value": "normal",
                                    "constant": true
                                },
                                {
                                    "name": "fontSize",
                                    "type": "measurement",
                                    "value": 1.8,
                                    "constant": true
                                },
                                {
                                    "name": "lineHeight",
                                    "type": "measurement",
                                    "value": 1.8,
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
                                    "value": 1.2,
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
                                }
                            ],
                            "text": {
                                "name": "text",
                                "value": "账户余额(元)",
                                "type": "string",
                                "constant": false,
                                "componentPropName": "accountTitle"
                            }
                        },
                        "children": []
                    },
                    {
                        "name": "View",
                        "identifier": "1494819859978",
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
                                    "constant": true
                                },
                                {
                                    "name": "width",
                                    "type": "measurement",
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
                                    "value": "center",
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
                                }
                            ]
                        },
                        "children": [
                            {
                                "name": "Image",
                                "identifier": "1496826818610",
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
                                            "value": 4,
                                            "constant": true
                                        },
                                        {
                                            "name": "width",
                                            "type": "measurement",
                                            "value": 4,
                                            "constant": true
                                        },
                                        {
                                            "name": "top",
                                            "type": "measurement",
                                            "value": 0,
                                            "constant": true
                                        },
                                        {
                                            "name": "bottom",
                                            "type": "measurement",
                                            "value": 0,
                                            "constant": true
                                        },
                                        {
                                            "name": "right",
                                            "type": "measurement",
                                            "value": 0,
                                            "constant": true
                                        },
                                        {
                                            "name": "left",
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
                                            "name": "backgroundColor",
                                            "type": "color",
                                            "constant": true
                                        }
                                    ],
                                    "src": {
                                        "name": "src",
                                        "value": "headpage_ic_eye",
                                        "type": "image",
                                        "constant": true
                                    }
                                },
                                "children": []
                            },
                            {
                                "name": "Text",
                                "identifier": "1496826839048",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "componentPropName": "accountValueColor",
                                            "value": "#333333"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 4,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 4,
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
                                            "value": 1,
                                            "constant": true
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "0.00",
                                        "type": "string",
                                        "constant": true
                                    }
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "name": "View",
                        "identifier": "1496819859978",
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
                                    "constant": true
                                },
                                {
                                    "name": "width",
                                    "type": "measurement",
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
                                    "value": 3.8,
                                    "constant": true
                                },
                                {
                                    "name": "marginBottom",
                                    "type": "measurement",
                                    "value": 3.8,
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
                                    "value": "flex-end",
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
                                }
                            ]
                        },
                        "children": [
                            {
                                "name": "Text",
                                "identifier": "1496819940111",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "value": "#1773d0",
                                            "componentPropName": "buttonColor"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 2.3,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 2.3,
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
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "转出",
                                        "type": "string",
                                        "constant": false,
                                        "componentPropName": "transferOutText"
                                    }
                                },
                                "children": []
                            },
                            {
                                "name": "Text",
                                "identifier": "1496819943456",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "value": "#1773d0",
                                            "componentPropName": "buttonColor"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 2.3,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 2.3,
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
                                            "value": 3.7,
                                            "constant": true
                                        },
                                        {
                                            "name": "marginLeft",
                                            "type": "measurement",
                                            "value": 3.7,
                                            "constant": true
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "|",
                                        "type": "string",
                                        "constant": true
                                    }
                                },
                                "children": []
                            },
                            {
                                "name": "Text",
                                "identifier": "1496819946628",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "value": "#1773d0",
                                            "componentPropName": "buttonColor"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 2.3,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 2.3,
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
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "转入",
                                        "type": "string",
                                        "constant": false,
                                        "componentPropName": "transferInText"
                                    }
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    hightLevelHideAsset:{
        "name": "View",
        "identifier": "1496818982141",
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
                }
            ]
        },
        "children": [
            {
                "name": "Image",
                "identifier": "1496819569080",
                "status": 0,
                "props": {
                    "style": [
                        {
                            "name": "position",
                            "type": "enum",
                            "value": "absolute",
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
                            "name": "top",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "bottom",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "right",
                            "type": "measurement",
                            "value": 0,
                            "constant": true
                        },
                        {
                            "name": "left",
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
                            "name": "backgroundColor",
                            "type": "color",
                            "constant": true
                        }
                    ],
                    "src": {
                        "name": "src",
                        "type": "image",
                        "constant": false,
                        "componentPropName": "backgroundImage",
                        "value": "headpage_user_icon_bg@3x"
                    }
                },
                "children": []
            },
            {
                "name": "View",
                "identifier": "1496819610058",
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
                            "value": 3.7,
                            "constant": true
                        },
                        {
                            "name": "marginLeft",
                            "type": "measurement",
                            "value": 3.7,
                            "constant": true
                        },
                        {
                            "name": "alignItems",
                            "type": "enum",
                            "value": "flex-end",
                            "constant": false,
                            "componentPropName": "align"
                        },
                        {
                            "name": "justifyContent",
                            "type": "enum",
                            "value": "flex-end",
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
                            "value": "column",
                            "constant": true
                        },
                        {
                            "name": "borderWidth",
                            "type": "int",
                            "constant": true
                        }
                    ]
                },
                "children": [
                    {
                        "name": "Text",
                        "identifier": "1496819849320",
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
                                    "name": "borderColor",
                                    "type": "color",
                                    "constant": true
                                },
                                {
                                    "name": "borderWidth",
                                    "type": "int",
                                    "constant": true
                                },
                                {
                                    "name": "color",
                                    "type": "color",
                                    "constant": false,
                                    "componentPropName": "accountTitleColor",
                                    "value": "#666666"
                                },
                                {
                                    "name": "fontWeight",
                                    "type": "enum",
                                    "value": "normal",
                                    "constant": true
                                },
                                {
                                    "name": "fontSize",
                                    "type": "measurement",
                                    "value": 1.8,
                                    "constant": true
                                },
                                {
                                    "name": "lineHeight",
                                    "type": "measurement",
                                    "value": 1.8,
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
                                    "value": 1.2,
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
                                }
                            ],
                            "text": {
                                "name": "text",
                                "value": "账户余额(元)",
                                "type": "string",
                                "constant": false,
                                "componentPropName": "accountTitle"
                            }
                        },
                        "children": []
                    },
                    {
                        "name": "View",
                        "identifier": "1494819859978",
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
                                    "constant": true
                                },
                                {
                                    "name": "width",
                                    "type": "measurement",
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
                                    "value": "center",
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
                                }
                            ]
                        },
                        "children": [
                            {
                                "name": "Image",
                                "identifier": "1496826818610",
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
                                            "value": 4,
                                            "constant": true
                                        },
                                        {
                                            "name": "width",
                                            "type": "measurement",
                                            "value": 4,
                                            "constant": true
                                        },
                                        {
                                            "name": "top",
                                            "type": "measurement",
                                            "value": 0,
                                            "constant": true
                                        },
                                        {
                                            "name": "bottom",
                                            "type": "measurement",
                                            "value": 0,
                                            "constant": true
                                        },
                                        {
                                            "name": "right",
                                            "type": "measurement",
                                            "value": 0,
                                            "constant": true
                                        },
                                        {
                                            "name": "left",
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
                                            "name": "backgroundColor",
                                            "type": "color",
                                            "constant": true
                                        }
                                    ],
                                    "src": {
                                        "name": "src",
                                        "value": "headpage_ic_eye_un",
                                        "type": "image",
                                        "constant": true
                                    }
                                },
                                "children": []
                            },
                            {
                                "name": "Text",
                                "identifier": "1496826839048",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "componentPropName": "accountValueColor",
                                            "value": "#333333"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 4,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 4,
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
                                            "value": 1,
                                            "constant": true
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "0.00",
                                        "type": "string",
                                        "constant": true
                                    }
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "name": "View",
                        "identifier": "1496819859978",
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
                                    "constant": true
                                },
                                {
                                    "name": "width",
                                    "type": "measurement",
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
                                    "value": 3.8,
                                    "constant": true
                                },
                                {
                                    "name": "marginBottom",
                                    "type": "measurement",
                                    "value": 3.8,
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
                                    "value": "flex-end",
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
                                }
                            ]
                        },
                        "children": [
                            {
                                "name": "Text",
                                "identifier": "1496819940111",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "value": "#1773d0",
                                            "componentPropName": "buttonColor"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 2.3,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 2.3,
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
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "转出",
                                        "type": "string",
                                        "constant": false,
                                        "componentPropName": "transferOutText"
                                    }
                                },
                                "children": []
                            },
                            {
                                "name": "Text",
                                "identifier": "1496819943456",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "value": "#1773d0",
                                            "componentPropName": "buttonColor"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 2.3,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 2.3,
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
                                            "value": 3.7,
                                            "constant": true
                                        },
                                        {
                                            "name": "marginLeft",
                                            "type": "measurement",
                                            "value": 3.7,
                                            "constant": true
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "|",
                                        "type": "string",
                                        "constant": true
                                    }
                                },
                                "children": []
                            },
                            {
                                "name": "Text",
                                "identifier": "1496819946628",
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
                                            "name": "borderColor",
                                            "type": "color",
                                            "constant": true
                                        },
                                        {
                                            "name": "borderWidth",
                                            "type": "int",
                                            "constant": true
                                        },
                                        {
                                            "name": "color",
                                            "type": "color",
                                            "constant": false,
                                            "value": "#1773d0",
                                            "componentPropName": "buttonColor"
                                        },
                                        {
                                            "name": "fontWeight",
                                            "type": "enum",
                                            "value": "normal",
                                            "constant": true
                                        },
                                        {
                                            "name": "fontSize",
                                            "type": "measurement",
                                            "value": 2.3,
                                            "constant": true
                                        },
                                        {
                                            "name": "lineHeight",
                                            "type": "measurement",
                                            "value": 2.3,
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
                                        }
                                    ],
                                    "text": {
                                        "name": "text",
                                        "value": "转入",
                                        "type": "string",
                                        "constant": false,
                                        "componentPropName": "transferInText"
                                    }
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    },
}
