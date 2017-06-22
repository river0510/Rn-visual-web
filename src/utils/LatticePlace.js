/**
 * Created by luohaoxin on 2017/5/22.
 */
class LatticePlace{
    constructor(width){
        this.width=width;
        this.positionArray=[new Position(0,width,0)];
    }
    reset(){
        this.positionArray=[new Position(0,width,0)];
    }
    put(width,height){
        let tempWidth=0;
        let lowPositionIndex=this.getLowPosition();
        let lowPosition=this.positionArray[lowPositionIndex];
        let result={};
        result.x=lowPosition.fromX;
        result.y=lowPosition.height;
        if(lowPosition.getWidth()===width){
            lowPosition.height+=height;
        }
        else{
            if(lowPosition.getWidth()>width){
                let addPosition=new Position(lowPosition.fromX,lowPosition.fromX+width,lowPosition.height+height);
                lowPosition.fromX+=width;
                this.positionArray.splice(lowPositionIndex,0,addPosition);
            }else {

            }
        }
        this.mergePosition();
        return result;
    }
    mergePosition(){
        for(let i=0;i<this.positionArray.length;i++){
            if(this.positionArray[i+1]&&this.positionArray[i].height===this.positionArray[i+1].height){
                this.positionArray[i].toX=this.positionArray[i+1].toX;
                this.positionArray.splice(i+1,1);
                i--;
            }
        }
    }
    getLowPosition(){
        if(this.positionArray.length===1) return 0;
        let index=0;
        for(let i=0;i<this.positionArray.length;i++){
            if(this.positionArray[index].height>this.positionArray[i].height){
                index=i;
            }
        }
        return index;
    }
}
class Position{
    constructor(fromX,toX,height){
        this.fromX=fromX;
        this.toX=toX;
        this.height=height;
    }
    getWidth(){
        return this.toX-this.fromX;
    }
}
module.exports=LatticePlace
// var lattice=new LatticePlace(100);
// lattice.put(50,50);
// lattice.put(50,50);
//
// console.log("sdsd");