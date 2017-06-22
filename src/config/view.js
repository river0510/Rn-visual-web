export default {
  "name":"View",
  "props":{
    "style":[
      {
        "name":"position",
        "type":"enum",
        "default":"relative",
      },
      {
        "name":"height",
        "type":"measurement",
        "default":10,
      },
      {
        "name":"width",
        "type":"measurement",
        "default":10,
      },
      {
        "name":"borderColor",
        "type":"string",
        "title":"边框颜色",
        "default":undefined
      },
      {
        "name":"borderRadius",
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
        "name":"alignItems",
        "type":"enum",
        "default":"flex-start",
      },
      {
        "name":"justifyContent",
        "type":"enum",
        "default":"flex-start",
      },
      {
        "name":"backgroundColor",
        "type":"string",
        "default":undefined
      },
      {
        "name":"flexDirection",
        "type":"enum",
        "default":"row"
      },
      {
        "name":"borderWidth",
        "type":"int",
        "default":undefined
      },
      // {
      //   "name":"borderTopWidth",
      //   "type":"int",
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

    ]
  }
}
