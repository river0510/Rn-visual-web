export default {
  "name":"Text",
  "props":{
    "style":[
      {
        "name":"position",
        "type":"enum",
        "default":"relative",
      },
      {
        "name":"borderColor",
        "type":'color',
        "default":undefined
      },
      {
        "name":"borderWidth",
        "type":'int',
        "default":undefined
      },
      {
        "name":"color",
        "type":'color',
        "default":undefined
      },
      {
        "name":"fontWeight",
        "type":"enum",
        "default":"normal"
      },
      {
        "name":"fontSize",
        "type":'measurement',
        "default":2
      },
      {
        "name":"lineHeight",
        "type":'measurement',
        "default":2
      },
      // {
      //   "name":"borderTopWidth",
      //   "type":'int',
      //   "default":undefined
      // },
      // {
      //   "name":"borderTopColor",
      //   "type":'color',
      //   "default":undefined
      // },
      // {
      //   "name":"borderBottomWidth",
      //   "type":'int',
      //   "default":undefined
      // },
      // {
      //   "name":"borderBottomColor",
      //   "type":'string',
      //   "default":undefined
      // },
      // {
      //   "name":"borderRightWidth",
      //   "type":'int',
      //   "default":undefined
      // },
      // {
      //   "name":"borderRightColor",
      //   "type":'color',
      //   "default":undefined
      // },
      // {
      //   "name":"borderLeftWidth",
      //   "type":'int',
      //   "default":undefined
      // },
      // {
      //   "name":"borderLeftColor",
      //   "type":'color',
      //   "default":undefined
      // },
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
        "title":"右边距",
        "default":0,
      },
      {
        "name":"marginLeft",
        "type":"measurement",
        "default":0,
      },
      // {
      //   "name":"alignItems",
      //   "type":"enum",
      //   "title":"alignItems",
      // },
      // {
      //   "name":"justifyContent",
      //   "type":"enum",
      //   "title":"justifyContent",
      // }
    ],
    "text":{
      "type":'string',
      "name":"text",
      "default":'文本框'
    }
  }
}
