var w = 35;
var h = 35; //block的长宽


var curMap; //当前地图数据数组，初始与CurLevel相同，游戏中改变
var CurLevel; //当前级地图数据，游戏中不变，用来判断游戏是否结束
var iCurLevel = 0; //当前是第几关
var curMan; //当前小人图片

//var MoveTimes = 0; //移动次数 
var mycanvas = document.getElementById('myCanvas');
var context = mycanvas.getContext('2d'); //把画布定义成二维的向量
var block = document.getElementById("block"); //把html里的img信息提出来，后面的box等等也一样
var box = document.getElementById("box");
var wall = document.getElementById("wall");
var ball = document.getElementById("ball");
var pdown = document.getElementById("pdown");
var pup = document.getElementById("pup");
var pleft = document.getElementById("pleft");
var pright = document.getElementById("pright");
var msg = document.getElementById("msg");
//位置坐標
function Point(x, y) {
    this.x = x;
    this.y = y;
}
//定義小人的起始位置坐標
var per_position = new Point(5, 5);
//初始化
function init() {
    initLevel();
    showMoveInfo();
}
//初始化坐標地圖
function initLevel() {
    curMap = copyArray(levels[iCurLevel]); //應用後面的克隆數組的函數，把原始的地圖數組克隆
    CurLevel = copyArray(levels[iCurLevel]); //同上
    curMan = pdown; //初始化的小人面朝正面
    InitMap(); //重新平鋪方塊
    DrawMap(curMap); //把坐標從數字變成圖片顯示出來

}
//用innerHTML把第幾關的信息顯示在網頁上
function showMoveInfo() {
    msg.innerHTML = "第" + (iCurLevel + 1) + "关 ";

}
//画地板，平铺方块
function InitMap() {

    for (var j = 0; j < 16; j++) {
        for (var i = 0; i < 16; i++) {
            context.drawImage(block, w * i, h * j, w, h); //把block顯示在網頁設置的畫布上，w*i，h*j是坐標。w,h是寬和長
        }
    }

}
//把數字轉化成圖片顯示
function DrawMap(level) {
    for (i = 0; i < level.length; i++) //y轴
    {
        for (j = 0; j < level[i].length; j++) //x轴
        {
            var pic = block;
            switch (level[i][j]) {
                case 1:
                    pic = wall; //遇到1顯示墻
                    break;
                case 2:
                    pic = ball; //遇到2顯示箱子
                    break;
                case 3:
                    pic = box; //遇到3顯示球
                    break;

                case 4:
                    pic = curMan; //遇到4顯示小人
                    per_position.x = i; //把小人的坐標幾下，後面的go函數會用到
                    per_position.y = j;
                    break;
            }
            context.drawImage(pic, w * j - (pic.width - w) / 2, h * (i) - (pic.height - h), pic.width, pic.height); //同樣把圖片顯示出來
        }
    }

}
//移動函數
function go(dir) {
    var p1; //小人坐標
    var p2; //箱子坐標

    switch (dir) {
        case "up":
            curMan = pup; //向上走的圖片
            p1 = new Point(per_position.x - 1, per_position.y);
            p2 = new Point(per_position.x - 2, per_position.y);
            break;
        case "down":
            curMan = pdown; //向下走的圖片
            p1 = new Point(per_position.x + 1, per_position.y);
            p2 = new Point(per_position.x + 2, per_position.y);
            break;
        case "left":
            curMan = pleft; //向左走的圖片
            p1 = new Point(per_position.x, per_position.y - 1);
            p2 = new Point(per_position.x, per_position.y - 2);
            break;
        case "right":
            curMan = pright; //向右走的圖片
            p1 = new Point(per_position.x, per_position.y + 1);
            p2 = new Point(per_position.x, per_position.y + 2);
            break;
    }

    TryGo(p1, p2); //每調用一次go函數就要判斷一次能不能走

    InitMap(); //再平鋪方塊，避免留下行動航跡
    DrawMap(curMap); //每動一次，所有的坐標點就會改變，就要重新顯示一次
    //每走一次也要檢查是否完成遊戲
    if (CheckFinish()) {
        alert("恭喜过关。");
        NextLevel(1); //开始下一关
    }
}
//判斷人是否能走，箱子是否能動
function TryGo(p1, p2) {
    if (p1.x < 0) return false;
    if (p1.y < 0) return false;
    if (p1.x >= curMap.length) return false;
    if (p1.y >= curMap[0].length) return false;

    if (curMap[p1.x][p1.y] == 1) return false; //如果是墙，不能通行
    if (curMap[p1.x][p1.y] == 3) //如果是箱子，继续判断前一格
    {
        if (curMap[p2.x][p2.y] == 1 || curMap[p2.x][p2.y] == 3) //前一格如果是墙或箱子都不能前进
            return false;
        //箱子前进一格
        curMap[p2.x][p2.y] = 3;

    }
    //小人前进一格
    curMap[p1.x][p1.y] = 4;
    var v = CurLevel[per_position.x][per_position.y]; //小人或者箱子向前走的時候，原來的位置的數字就要改變，要改成小綠塊，不改變的話走過的地方都是小人和箱子

    if (v != 2) {


        v = 0; //显示平地
    }

    curMap[per_position.x][per_position.y] = v; //把變動過后的數字記錄進cuiMap保存起來
    // per_position = p1;
    return true;
}

//判断是否完成本关
function CheckFinish() {
    for (var i = 0; i < curMap.length; i++) //y轴
    {
        for (var j = 0; j < curMap[i].length; j++) //x轴
        {
            if (CurLevel[i][j] == 2 && curMap[i][j] != 3) //如果目标位置上没放上箱子，则还没结束
            {
                return false;
            }
        }
    }
    return true;
}
//下一關或者重玩，還有上一關
function NextLevel(i) {
    iCurLevel = iCurLevel + i;
    if (iCurLevel < 0) {
        iCurLevel = 0;
        return;
    }

    initLevel(); //重新開始時要重新顯示地圖



    showMoveInfo(); //重新顯示關卡信息
}
//調用鍵盤，在html中寫 <body onload="init()" onkeydown="DoKeyDown(event)">
function DoKeyDown(event) {
    switch (event.keyCode) {
        case 37: //left
            go('left');
            break;
        case 38: //up
            go('up');
            break;
        case 39: //right
            go('right');
            break;
        case 40: //down
            go('down');
            break;
    }
}



//克隆二维数组
function copyArray(arr) {
    var b = [];
    for (i = 0; i < arr.length; i++) {
        b[i] = arr[i].concat();
    }
    return b;
}