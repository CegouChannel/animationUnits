const canv = document.querySelector("canvas");
let ctx = canv.getContext("2d");


canv.height = 768;
canv.width = 1024;

export class Unit {
    constructor(options) {
        this.canv = document.querySelector("canvas");
        this.ctx = this.canv.getContext("2d");
        this.name = options.name;
        this.image = options.image;
        this.width = options.width;
        this.height = options.height;
        this.positionX = options.position.x;
        this.positionY = options.position.y;
        this.velocity = options.velocity;
        this.countMoveFrame = options.countMoveFrame;
        this.countAttackFrame = options.countAttackFrame;
        this.countDeathFrame = options.countDeathFrame;
        this.speedAnimate = options.speedAnimate;
        this.fly = options.fly;
        this.color = "none";

        this.startAttackFrame = this.countMoveFrame * this.height;
        this.endAttackFrame = this.height * (this.countMoveFrame + (this.countAttackFrame - 1));

        if (this.countAttackFrame && this.countDeathFrame && this.countMoveFrame) {
            this.startDeathFrame = this.height * (this.countMoveFrame + this.countAttackFrame);
            this.endDeathFrame = this.height * (this.countMoveFrame + this.countAttackFrame + (this.countDeathFrame - 1));
        } else {
            this.startDeathFrame = this.height * this.countMoveFrame
            this.endDeathFrame = this.height * (this.countMoveFrame + (this.countDeathFrame - 1));
        }

        this.cordinateFrameX = 0;
        this.cordinateFrameY = 0;
        this.tick_count = 0;
        this.activeTick = false;
        this.selected = false;
        this.activeSelectButton = false;
        this.animate;
        this.moveStop();
        this.panelControl();
        this.getDataImage();
    }

    tick(action) {
        if (this.activeTick === true) {
            if (this.tick_count == this.speedAnimate) {
                this.draw(action);
                this.tick_count = 0;
                if (action == 'Death' & this.startDeathFrame == this.endDeathFrame) {
                    this.activeTick = false;
                }
            }
            this.tick_count += 1;
            this.animate = requestAnimationFrame(() => {
                this.tick(action);
            });
        }
    }

    draw(action) {
        switch (action) {
            case 'Move':
                if (this.countMoveFrame <= 2) {
                    this.cordinateFrameY = (this.cordinateFrameY === this.countMoveFrame * this.height - this.height ? 0 : this.cordinateFrameY + this.height);
                    ctx.clearRect(this.positionX, this.positionY, this.width, this.height)
                    this.ctx.drawImage(this.image, this.cordinateFrameX, this.cordinateFrameY, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
                    if (this.color == 'none') {
                        return false;
                    } else {
                        this.getDataImage(this.color)
                    }

                } else {
                    this.cordinateFrameY = (this.cordinateFrameY === this.countMoveFrame * this.height - this.height ? this.height : this.cordinateFrameY + this.height);
                    ctx.clearRect(this.positionX, this.positionY, this.width, this.height)
                    this.ctx.drawImage(this.image, this.cordinateFrameX, this.cordinateFrameY, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
                    if (this.color == 'none') {
                        return false;
                    } else {
                        this.getDataImage(this.color)
                    }
                }
                break;
            case 'Attack':
                if (this.countAttackFrame) {
                    ctx.clearRect(this.positionX, this.positionY, this.width, this.height)
                    this.ctx.drawImage(this.image, this.cordinateFrameX, this.startAttackFrame, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
                    this.startAttackFrame = (this.startAttackFrame === this.endAttackFrame ? this.countMoveFrame * this.height : this.startAttackFrame + this.height);
                    if (this.color == 'none') {
                        return false;
                    } else {
                        this.getDataImage(this.color)
                    }
                }
                break;
            case 'Death':
                if (this.countDeathFrame) {
                    if (this.startDeathFrame != this.endDeathFrame + this.height) {
                        this.startDeathFrame += this.height
                    } else {
                        if (this.countAttackFrame) {
                            this.startDeathFrame = this.height * (this.countMoveFrame + this.countAttackFrame);
                        } else {
                            this.startDeathFrame = this.height * this.countMoveFrame;
                        }
                    }
                }
                ctx.clearRect(this.positionX, this.positionY, this.width, this.height)
                this.ctx.drawImage(this.image, this.cordinateFrameX, this.startDeathFrame, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
                if (this.color == 'none') {
                    return false;
                } else {
                    this.getDataImage(this.color)
                }
                break;
        }
    }

    moveStop() {
        this.tick_count = 0;
        this.activeTick = false;
        this.ctx.clearRect(this.positionX, this.positionY, this.width, this.height);
        this.ctx.drawImage(this.image, this.cordinateFrameX, 0, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
        if (this.color == 'none') {
            return false;
        } else {
            this.getDataImage(this.color)
        }
    }

    getCoordFrame(direct) {
        switch (direct) {
            case 'Left':
                return 6;
            case 'Right':
                return 2;
            case 'Top':
                return 0;
            case 'Down':
                return 4;
            case 'DiagonalTR':
                return 1;
            case 'DiagonalDR':
                return 3;
            case 'DiagonalDL':
                return 5;
            case 'DiagonalTL':
                return 7;
        }
    }

    move(direct) {
        // switch(this.getCoordFrame(direct)){
        //     case 6:
        //         this.positionX -= this.velocity;
        //         break;
        //     case 2:
        //         this.positionX += this.velocity;
        //         break;
        //     case 0:
        //         this.positionY -= this.velocity;
        //         break;
        //     case 4:
        //         this.positionY += this.velocity;
        //         break;
        //     case 1:
        //         this.positionY -= this.velocity
        //         this.positionX += this.velocity;
        //         break;
        //     case 3:
        //         this.positionY += this.velocity
        //         this.positionX += this.velocity;
        //     case 5:
        //         this.positionY += this.velocity
        //         this.positionX -= this.velocity;
        //         break;
        //     case 7:
        //         this.positionY -= this.velocity
        //         this.positionX -= this.velocity;
        // }
        this.cordinateFrameX = this.width * this.getCoordFrame(direct);
        cancelAnimationFrame(this.animate);
        this.activeTick = false;
        if (this.activeTick == false) {
            this.activeTick = true;
            this.tick('Move');
        }
    }

    action(action) {
        cancelAnimationFrame(this.animate);
        this.activeTick = false;
        if (this.activeTick == false) {
            this.activeTick = true;
            this.tick(action);
        }
    }

    changeColor(data, color) {
        switch (color) {
            case "green":
                for (let i = 0; i < data.length; i += 4) {
                    if (75 < data[i] && data[i] < 200 && data[i + 1] == 0 && data[i + 2] == 0) {
                        let saveValue;
                        saveValue = data[i];
                        data[i] = 0;
                        data[i + 1] = saveValue;
                        data[i + 2] = data[i + 2]
                    }
                }
                break;
            case "blue":
                for (let i = 0; i < data.length; i += 4) {
                    if (75 < data[i] && data[i] < 200 && data[i + 1] == 0 && data[i + 2] == 0) {
                        let saveValue;
                        saveValue = data[i];
                        data[i] = 0;
                        data[i + 1] = data[i + 1];
                        data[i + 2] = saveValue;
                    }
                }
                break;
            case "purple":
                for (let i = 0; i < data.length; i += 4) {
                    if (75 < data[i] && data[i] < 200 && data[i + 1] == 0 && data[i + 2] == 0) {
                        let saveValue;
                        saveValue = data[i + 1];
                        data[i] = data[i];
                        data[i + 1] = 0;
                        data[i + 2] = 255 - saveValue;
                    }
                }
                break;
            case "orange":
                for (let i = 0; i < data.length; i += 4) {
                    if (75 < data[i] && data[i] < 200 && data[i + 1] == 0 && data[i + 2] == 0) {
                        let saveValue;
                        saveValue = data[i];
                        data[i] = 190 + saveValue;
                        data[i + 1] = 10 + saveValue;
                        data[i + 2] = 10;
                    }
                }
                break;
            case "white":
                for (let i = 0; i < data.length; i += 4) {
                    if (75 < data[i] && data[i] < 200 && data[i + 1] == 0 && data[i + 2] == 0) {
                        let saveValue;
                        saveValue = data[i];
                        data[i] = saveValue
                        data[i + 1] = saveValue
                        data[i + 2] = saveValue + 30
                    }
                }
                break;
            case "yellow":
                for (let i = 0; i < data.length; i += 4) {
                    if (75 < data[i] && data[i] < 200 && data[i + 1] == 0 && data[i + 2] == 0) {
                        let saveValue;
                        saveValue = data[i];
                        data[i] = saveValue
                        data[i + 1] = saveValue
                        data[i + 2] = 30
                    }
                }
                break;
            case "pink":
                for (let i = 0; i < data.length; i += 4) {
                    if (75 < data[i] && data[i] < 200 && data[i + 1] == 0 && data[i + 2] == 0) {
                        let saveValue, saveSecondValue;
                        saveValue = data[i];
                        data[i] = saveValue
                        data[i + 1] = saveValue / 2
                        data[i + 2] = saveValue / 2
                    }
                }
                break;
            case "black":
                for (let i = 0; i < data.length; i += 4) {
                    if (75 < data[i] && data[i] < 200 && data[i + 1] == 0 && data[i + 2] == 0) {
                        let saveValue, saveSecondValue;
                        saveValue = data[i];
                        data[i] = saveValue / 6
                        data[i + 1] = saveValue / 6
                        data[i + 2] = saveValue / 6
                    }
                }
                break;

        }
    }


    getDataImage(color) {
        if (color == "none") {
            return false
        } else {
            this.color = color;
            let img = ctx.getImageData(this.positionX, this.positionY, this.width, this.height);
            this.changeColor(img.data, color);
            ctx.putImageData(img, this.positionX, this.positionY);
        }
    }


    panelControl() {
        let move = document.querySelectorAll("button[name='move']");
        move.forEach((butt) => {
            butt.addEventListener('click', () => {
                if (this.activeSelectButton === false) {
                    this.move(butt.className);
                } else if (this.activeSelectButton === true && this.selected == true) {
                    this.move(butt.className);
                }
            })
        })

        let actions = document.querySelectorAll("button[name='action']");
        actions.forEach((action) => {
            action.addEventListener('click', () => {
                if (this.activeSelectButton === false) {
                    this.action(action.className);
                } else if (this.activeSelectButton === true && this.selected == true) {
                    this.action(action.className);
                }
            })
        })

        let stop = document.querySelector("button[class='stopMove']")
        stop.addEventListener('click', () => {
            if (this.activeSelectButton === false) {
                this.moveStop();
            } else if (this.activeSelectButton === true && this.selected == true) {
                this.moveStop();
            }
        })

        let changeColor = document.querySelectorAll("button[name='color']")
        changeColor.forEach((butt) => {
            butt.style.background = butt.className;
        })

        changeColor.forEach((butt) => {
            butt.addEventListener('click', () => {
                if (this.activeSelectButton === false) {
                    this.getDataImage(butt.className);
                } else if (this.activeSelectButton === true && this.selected == true) {
                    this.getDataImage(butt.className);
                } else if (butt.className == 'red' && this.activeSelectButton === true && this.selected == true) {
                    this.color = 'none';
                } else if (butt.className == 'red' && this.activeSelectButton === false) {
                    this.color = 'none';
                }
            })
        })


        let selectUnit = document.querySelector("button[name='selectUnit']")
        selectUnit.addEventListener('click', () => {
            this.getCoordinateSelect();
        })
    }



    getCoordinateSelect() {
        let getCoordinateClick = (event) => {
            if (this.activeSelectButton === false) {
                return false;
            } else {
                let clickX = event.pageX;
                let clickY = event.pageY;
                let rangeX = this.positionX + this.width;
                let rangeY = this.positionY + this.height;
                this.selectUnit(clickX, clickY, rangeX, rangeY)
            }
        }

        if (this.activeSelectButton === false) {
            this.activeSelectButton = true;
        } else if (this.activeSelectButton === true) {
            this.activeSelectButton = false;
            if (this.selected === true) {
                ctx.clearRect(this.positionX - 3, this.positionY - 3, this.width + 6, this.height + 6)
                this.moveStop();
                this.selected = false;
            }
        }
        canv.addEventListener('click', getCoordinateClick);
    }

    selectUnit(clickX, clickY, rangeX, rangeY) {
        if (this.positionX <= clickX && clickX <= rangeX && this.positionY <= clickY && clickY <= rangeY) {
            this.selected = true;
            this.ctx.strokeRect(this.positionX, this.positionY, this.width, this.height);
        }
    }
}

let selectUnit = document.querySelector("button[name='selectUnit']")
selectUnit.addEventListener('click', () => {
    selectUnit.classList.toggle('active');
})




