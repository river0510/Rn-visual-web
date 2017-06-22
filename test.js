/**
 * Created by luohaoxin on 2017/5/18.
 */

var Immutable =require('immutable');
foo = Immutable.fromJS({a: [{a:1},{b:2}]});
// console.log(foo.getIn('a').get(0).setIn('a',100));  // 使用 getIn 取值，打印 1
console.log(foo.updateIn(['a'],list=>list.push(Immutable.fromJS({c:3}))));  // 使用 getIn 取值，打印 1


bar = foo.setIn(['a'], 2);   // 使用 setIn 赋值
console.log(foo.get('a'));  // 使用 getIn 取值，打印 1
console.log(foo === bar);  //  打印 false
var a=1;
var b="1"
console.log(typeof b==='string');
var c='3A';
var d=c.split('A');

var sss=[1,2,3];
if(sss[4]){

}else {
    console.log('sss');
}

sss.splice(2,0,4);

console.log(sss);
foo = Immutable.fromJS({images:{}});
var bbb=foo.set(['images','luo'],'1213');
console.log(bbb.get('images').get('luo'));
var aaa='0123456';
console.log(aaa.substring(2,3));
var str = "07";
var n = parseInt(str);
if (!isNaN(n))
{
    console.log(n);
}

var arr2 = ['a','b','c','d'];
arr2.splice(1,1,'ttt');
console.log(arr2);
// {
//     screenData: {
//         LatticeHomeScreen: {
//             name: "HomePage",
//                 version: 0,
//                 hideNavigationBar: "true",
//                 attr: {
//                 pageType: "home"
//             },
//             items: []
//         },
//         LatticeLifeScreen: {
//             version: 0,
//                 pageType: "react-native",
//                 moduleName: "PAFFHomePage.LatticeLifeScreen",
//                 pageName: "LatticeLifeScreen",
//                 hideNavigationBar: true,
//                 // navigatorTitle: "",
//                 // url: "",
//                 // className: "",
//                 attr: {
//                 pageType: "life",
//                     width: 12
//             },
//             items: []
//         }
//
//     },
//     images: {},
//     componentConfig: {}
// }
class LHX{
    constructor(){
        this.a=1;
    }
    coutA(){
        return this.a;
    }
}
class DDD extends LHX{
    constructor(){
        super()
        this.b=2;
    }
}
var ff=new DDD();
for(let c in ff){
    console.log(ff[c]);
}
