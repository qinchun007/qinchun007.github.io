/* sokoban game
 * author:tinhour
 * email:fangfeng335@qq.com
 * version:1.0
 * createTime:2012-11-10
 */
var level1 = {
    boulders: 1,
    field: [
        "###############",
        "#######@#######",
        "#       o    *#",
        "########  #####",
        "#######  ######",
        "#####        ##",
        "###   #####  ##",
        "##  #######  ##",
        "#  ########  ##",
        "  ####### #  ##",
        "#########    ##",
        "###############"
    ]
};
var level2 = {
    boulders: 3,
    field: [
        "###############",
        "###    @    ###",
        "####### #######",
        "#######o#######",
        "#*            #",
        "######o #######",
        "#####   #######",
        "####  #* ######",
        "###  ###  #####",
        "##  #####  ####"
    ]
};
var level3 = {
    boulders: 9,
    field: [
        "###### ##### ",
        "#    # #   # ",
        "# o  ### o # ",
        "# o @      # ",
        "#  ######o # ",
        "####  ### ###",
        "      #     #",
        "      #o    #",
        "      # o   #",
        "     ## o   #",
        "     #*o  o #",
        "     ########"
    ]
};
var levers = [level1, level3];
var Msg = { statusMsg: "还有?个箱子要推", newGame: "新游戏", restGame: "重新开始", gameName: "推箱子", levels: "第?关:", nextLever: "通过,下一关开始!", gameOver: "游戏通关了!" };

function Square(character, img) {
    this.img = img;
    var content = { "@": "player", "#": "wall", "*": "exit", " ": "empty", "o": "boulder" }[character];
    if (content == null) {
        throw new Error("Unregcognaized character:'" + character + "'");
    }
    this.setContent(content);
};
Square.prototype.setContent = function(content) {
    this.content = content;
    this.img.src = "http://sandbox.runjs.cn/uploads/rs/298/tch4calq/" + content + ".png";
};

function Point(x, y) {
    this.x = x;
    this.y = y;
};
Point.prototype.add = function(pointer) {
    var x = this.x + pointer.x;
    var y = this.y + pointer.y;
    return new Point(x < 0 ? 0 : x, y < 0 ? 0 : y);
};

function SokobanField(level) {
    this.fieldDiv = dom("DIV");
    this.squares = [];
    this.bouldersToGo = level.boulders;
    this.playerPos = null;

    for (var y = 0; y < level.field.length; y++) {
        var line = level.field[y];
        var squareRow = [];
        for (var x = 0; x < line.length; x++) {
            var img = dom("IMG");
            this.fieldDiv.appendChild(img);
            squareRow.push(new Square(line.charAt(x), img));
            if (line.charAt(x) == "@") {
                this.playerPos = new Point(x, y);
            }
        }
        this.fieldDiv.appendChild(dom("BR"));
        this.squares.push(squareRow);
    }
};
SokobanField.prototype.status = function() {
    return Msg.statusMsg.replace("?", this.bouldersToGo);
};
SokobanField.prototype.won = function() {
    return this.bouldersToGo <= 0;
};
SokobanField.prototype.place = function(where) {
    where.appendChild(this.fieldDiv);
};
SokobanField.prototype.remove = function() {
    this.fieldDiv.parentNode.removeChild(this.fieldDiv);
};
SokobanField.prototype.move = function(direction) {
    var playerSquare = this.squares[this.playerPos.y][this.playerPos.x],
        targetPos = this.playerPos.add(direction),
        targetSquare = this.squares[targetPos.y][targetPos.x];
    //Firest,see if the player can push a boulder...
    if (targetSquare.content == "boulder") {
        var pushPos = targetPos.add(direction),
            pushSquare = this.squares[pushPos.y][pushPos.x];
        if (pushSquare.content == "empty") {
            targetSquare.setContent("empty");
            pushSquare.setContent("boulder");
        } else if (pushSquare.content == "exit") {
            targetSquare.setContent("empty");
            this.bouldersToGo--;
        }
    }
    //Then,try to move...
    if (targetSquare.content == "empty") {
        playerSquare.setContent("empty");
        targetSquare.setContent("player");
        this.playerPos = targetPos;
    }
};

function SokobanGame(levels, place) {
    this.levels = levers;
    var newGame = dom("BUTTON", null, Msg.newGame);
    addHandler(newGame, "click", method(this, "newGame"));
    var reset = dom("BUTTON", null, Msg.restGame);
    addHandler(reset, "click", method(this, "resetLevel"));
    this.status = dom("DIV", { id: "status" });
    this.container = dom("DIV", null, dom("H1", null, Msg.gameName), dom("DIV", null, newGame, " ", reset), this.status);
    place.appendChild(this.container);
    addHandler(document, "keydown", method(this, "keyDown"));
    this.newGame();
}
SokobanGame.prototype.newGame = function() {
    this.level = 0;
    this.resetLevel();
};
SokobanGame.prototype.resetLevel = function() {
    if (this.field) {
        this.field.remove();
    }
    this.field = new SokobanField(this.levels[this.level]);
    this.field.place(this.container);
    this.updateStatus();
};
SokobanGame.prototype.updateStatus = function() {
    this.status.innerHTML = Msg.levels.replace("?", 1 + this.level) + this.field.status();
};

var arrowKeyCode = {
    37: new Point(-1, 0), //left
    38: new Point(0, -1), //up
    39: new Point(1, 0), //right
    40: new Point(0, 1) //donw
};
SokobanGame.prototype.keyDown = function(event) {
    if (arrowKeyCode.hasOwnProperty(event.keyCode)) {
        event.stop();
        this.field.move(arrowKeyCode[event.keyCode]);
        this.updateStatus();
        if (this.field.won()) {
            if (this.level < this.levels.length - 1) {
                alert(Msg.nextLever);
                this.level++;
                this.resetLevel();
            } else {
                alert(Msg.gameOver);
                this.newGame();
            }
        }
    }
};