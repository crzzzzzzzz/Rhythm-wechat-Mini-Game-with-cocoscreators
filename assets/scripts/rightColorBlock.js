var prefabArr = new Array(3);
var locArr = new Array(15);
var colorArr = new Array(15);
//var Global.rightPrefabIndex;//素材的色块的颜色编号 0 1 2
var locIndex;//储存屏幕上生成的色块前后位置关系
//按钮的位置编号 0 1 2.
var count = 0;
//按钮的位置编号 0 1 2
var redTime = 0;//红灯亮的时间
var greenTime = 0;//绿灯亮的时间
var time = 0;
var comboFlag = false;//判断是否已经增加combo数
var missFlag = false;//判断是否已经增加miss数
var startJudge = false;//标记是否开始判定对错
var judgeIndex;//记录判定区的色块序号
var maxCB; //屏幕最多色块数目
var correctTime;//判定正确的最大容错时间
var CBDis;//色块生成的距离间隔（不能用色块的高度，由于update执行效率问题）
window.Global = {
   rightButtonIndex: null,
   rightSpeed: null,
   rightPrefabIndex: null
};
var tempButtonIndex;
cc.Class({
    extends: cc.Component,

    properties: {
     //引用三个色块的预制资源(prefab)
     color1Prefab: {
        default: null,
        type: cc.Prefab
     },

     color2Prefab: {
        default: null,
        type: cc.Prefab
     },

     color3Prefab: {
        default: null,
        type: cc.Prefab
     },

     //引用左右红绿四个判定颜色的节点(Node)
     rightRedLed: {
        default: null,
        type: cc.Node
     },

     rightGreenLed: {
      default: null,
      type: cc.Node
     },

     },

    //不断生成新的色块
    spawnNewCb: function(){
      Global.rightSpeed = 351;
      //Global.rightPrefabIndex =  1;     /*Math.floor(Math.random() * 3);*/
      var newcb = cc.instantiate(prefabArr[Global.rightPrefabIndex]);
      newcb.setPosition(0,0);
      locIndex = (count++)%maxCB;
      locArr[locIndex] = newcb;
      colorArr[locIndex] = Global.rightPrefabIndex;
      this.node.addChild(locArr[locIndex]);
   },
    
    init: function(){
      Global.Score = 0;
      Global.Combo = 0;
      Global.Miss = 0;
      Global.rightPrefabIndex =  1;
      prefabArr[0] = this.color1Prefab;
      prefabArr[1] = this.color2Prefab;
      prefabArr[2] = this.color3Prefab;
      //为了方便判定一开始就让红色显示
      this.rightGreenLed.zIndex = -1;
      this.rightRedLed.zIndex = 1;
      //参数调整
      maxCB = 15;
      correctTime = 7;
      CBDis = -87;
      //测试随机生成色块
      this.spawnNewCb();
    },

    onLoad () {
      
     },

    start () {
      this.init();
    },

    //判断色块与按钮位置是否对应
    update (dt) {
       if(locArr[locIndex].y < CBDis){
       this.spawnNewCb();
       } 
       judgeIndex = (locIndex + 2) % maxCB;
       //cc.log(judgeIndex);
       if(locArr[judgeIndex] != null){
          if(locArr[judgeIndex].y < -1242 && locArr[judgeIndex].y > -1294){
            startJudge = true;
            if(startJudge == true){
               //cc.log(redTime);
               if(redTime <= correctTime && comboFlag == false){
                  //增加combo
                  Global.Combo++;
                  comboFlag = true;
                  //Global.Score += 2 * Global.Combo; 
                }else if(redTime > correctTime && missFlag == false ){
                     Global.Combo = 0;
                     //alert("here" + redTime + missFlag);
                     Global.Miss ++;
                     missFlag = true;
                }
                if(colorArr[judgeIndex] == Global.rightButtonIndex) {//判定正确的情况
                  //色块与摇杆位置一致，判定正确时，重置miss是否已增加的状态
                  missFlag = false;
                  tempButtonIndex = Global.rightButtonIndex;
                  this.rightGreenLed.zIndex = 1;
                  this.rightRedLed.zIndex = 0;
                 }else if(colorArr[judgeIndex] != Global.rightButtonIndex){//判定错误的情况
                  redTime++;
                  this.rightRedLed.zIndex = 1;
                  this.rightGreenLed.zIndex = 0;
               }
            }

          }else{
             //色块开始区域不在判定区时重置combo是否已增加的设置
             comboFlag = false;
             missFlag = false;
             redTime = 0;
          }

          //如果玩家在绿灯亮的时候改变按钮位置则判定为错误
          if(tempButtonIndex != Global.rightButtonIndex){
            this.rightRedLed.zIndex = 1;
            this.rightGreenLed.zIndex = 0;
         }
      }
    },
});
