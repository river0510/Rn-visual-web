export default {
  "name":"Image",
  "props":{
    "style":[
      {
        "name":"position",
        "type":"enum",
        "title":"布局类型",
        "default":"relative",
      },
      {
        "name":"height",
        "type":"measurement",
        "title":"高度",
        "nouse":true,
        "default":3,
      },
      {
        "name":"width",
        "type":"measurement",
        "title":"宽度",
        "nouse":true,
        "default":3,
      },
      // {
      //   "name":"borderColor",
      //   "type":"color",
      //   "title":"边框颜色",
      //   "default":undefined
      // },
      // {
      //   "name":"borderWidth",
      //   "type":"int",
      //   "title":"边框宽度",
      //   "default":undefined
      // },
      // {
      //   "name":"borderTopWidth",
      //   "type":"int",
      //   "title":"上边框宽度",
      //   "default":undefined
      // },
      // {
      //   "name":"borderTopColor",
      //   "type":"color",
      //   "default":undefined
      // },
      // {
      //   "name":"borderBottomWidth",
      //   "type":"int",
      //   "default":undefined
      // },
      // {
      //   "name":"borderBottomColor",
      //   "type":"string",
      //   "default":undefined
      // },
      // {
      //   "name":"borderRightWidth",
      //   "type":"int",
      //   "default":undefined
      // },
      // {
      //   "name":"borderRightColor",
      //   "type":"color",
      //   "default":undefined
      // },
      // {
      //   "name":"borderLeftWidth",
      //   "type":"int",
      //   "default":undefined
      // },
      // {
      //   "name":"borderLeftColor",
      //   "type":"color",
      //   "default":undefined
      // },
      {
        "name":"top",
        "type":"measurement",
        "default":0,
      },
      {
        "name":"bottom",
        "type":"measurement",
        "default":0,
      },
      {
        "name":"right",
        "type":"measurement",
        "default":0,
      },
      {
        "name":"left",
        "type":"measurement",
        "default":0,
      },
      {
        "name":"marginTop",
        "type":"measurement",
        "default":0,
      },
      {
        "name":"marginBottom",
        "type":"measurement",
        "default":0,
      },
      {
        "name":"marginRight",
        "type":"measurement",
        "default":0,
      },
      {
        "name":"marginLeft",
        "type":"measurement",
        "default":0,
      },
      {
        "name":"backgroundColor",
        "type":"color",
        "default":undefined
      }
    ],
    "src":{
      "type":'image',
      "name":"src",
      "default":undefined
    }
  }
}
