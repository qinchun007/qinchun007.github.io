var w = 35;
var h = 35;
//var per_h = 62;
//var per_w = 50;

var curMap; //当前地图数据数组，初始与CurLevel相同，游戏中改变
var CurLevel; //当前级地图数据，游戏中不变，用来判断游戏是否结束
var iCurLevel = 0; //当前是第几关
var curMan; //当前小人图片

//var MoveTimes = 0; //移动次数 
var mycanvas = document.getElementById('myCanvas');
var context = mycanvas.getContext('2d');
var block = document.getElementById("block");
var box = document.getElementById("box");
var wall = document.getElementById("wall");
var ball = document.getElementById("ball");
var pdown = document.getElementById("pdown");
var pup = document.getElementById("pup");
var pleft = document.getElementById("pleft");
var pright = document.getElementById("pright");
var msg = document.getElementById("msg");

function Point(x, y) {
    this.x = x;
    this.y = y;
}

var per_position = new Point(5, 5);

function init() {
    initLevel();
    showMoveInfo();
}

function initLevel() {
    curMap = copyArray(levels[iCurLevel]);
    CurLevel = copyArray(levels[iCurLevel]);
    curMan = pdown;
    InitMap();
    DrawMap(curMap);

}

function showMoveInfo() {
    msg.innerHTML = "第" + (iCurLevel + 1) + "关 ";
    //移动次数：" + MoveTimes
}
//画地板，平铺方块
function InitMap() {

    for (var j = 0; j < 16; j++) {
        for (var i = 0; i < 16; i++) {
            context.drawImage(block, w * i, h * j, w, h);
        }
    }

}

function DrawMap(level) {
    for (i = 0; i < level.length; i++) //y轴
    {
        for (j = 0; j < level[i].length; j++) //x轴
        {
            var pic = block;
            switch (level[i][j]) {
                case 1:
                    pic = wall;
                    break;
                case 2:
                    pic = ball;
                    break;
                case 3:
                    pic = box;
                    break;
                case 5:
                    pic = box;
                    break;
                case 4:
                    pic = curMan;
                    per_position.x = i;
                    per_position.y = j;
                    break;
            }
            context.drawImage(pic, w * j - (pic.width - w) / 2, h * (i) - (pic.height - h), pic.width, pic.height);
        }
    }

}

function go(dir) {
    var p1;
    var p2;

    switch (dir) {
        case "up":
            curMan = pup;
            p1 = new Point(per_position.x - 1, per_position.y);
            p2 = new Point(per_position.x - 2, per_position.y);
            break;
        case "down":
            curMan = pdown;
            p1 = new Point(per_position.x + 1, per_position.y);
            p2 = new Point(per_position.x + 2, per_position.y);
            break;
        case "left":
            curMan = pleft;
            p1 = new Point(per_position.x, per_position.y - 1);
            p2 = new Point(per_position.x, per_position.y - 2);
            break;
        case "right":
            curMan = pright;
            p1 = new Point(per_position.x, per_position.y + 1);
            p2 = new Point(per_position.x, per_position.y + 2);
            break;
    }

    TryGo(p1, p2);

    InitMap();
    DrawMap(curMap);

    if (CheckFinish()) {
        alert("恭喜过关。");
        NextLevel(1); //开始下一关
    }
}

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
    var v = CurLevel[per_position.x][per_position.y];

    if (v != 2) {


        v = 0; //显示平地
    }

    curMap[per_position.x][per_position.y] = v;
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

function NextLevel(i) {
    iCurLevel = iCurLevel + i;
    if (iCurLevel < 0) {
        iCurLevel = 0;
        return;
    }

    initLevel();


    //MoveTimes = 0;
    showMoveInfo();
}

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