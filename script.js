import { Unit } from './Unit.js';
const canv = document.querySelector("canvas");

canv.height = 768;
canv.width = 1024;

//Создание персонажей

//Орки
window.onload = () => {
    let dragonSprite = new Image();
    dragonSprite.src = 'assets/orc/dragon.png';

    dragonSprite.onload = function () {
        let dragon = new Unit({
            name: 'Dragon',
            height: 80,
            width: 88,
            ctx: canv.getContext("2d"),
            image: dragonSprite,
            countMoveFrame: 4,
            countAttackFrame: 1,
            countDeathFrame: 6,
            fly: true,
            position: {
                x: 0,
                y: 80
            },
            velocity: 4,
            speedAnimate: 7
        })
    }

    let deathKnightSprite = new Image();
    deathKnightSprite.src = 'assets/orc/death_knight.png';

    deathKnightSprite.onload = function () {
        let deathKnight = new Unit({
            name: 'deathKnight',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: deathKnightSprite,
            countMoveFrame: 4,
            countAttackFrame: 4,
            countDeathFrame: 4,
            position: {
                x: 0,
                y: 0
            },
            velocity: 2,
            speedAnimate: 7,
        })
    }


    let catapultSprite = new Image();
    catapultSprite.src = 'assets/orc/catapult.png';

    catapultSprite.onload = function () {
        let catapult = new Unit({
            name: 'catapult',
            height: 64,
            width: 64,
            ctx: canv.getContext("2d"),
            image: catapultSprite,
            countMoveFrame: 2,
            countAttackFrame: 2,
            position: {
                x: 0,
                y: 160
            },
            velocity: 2,
            speedAnimate: 5
        })
    }

    let gruntSpite = new Image();
    gruntSpite.src = 'assets/orc/grunt.png';

    gruntSpite.onload = function () {
        let grunt = new Unit({
            name: 'grunt',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: gruntSpite,
            countMoveFrame: 5,
            countAttackFrame: 4,
            countDeathFrame: 3,
            position: {
                x: 0,
                y: 250
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let ogrePrite = new Image();
    ogrePrite.src = 'assets/orc/ogre.png';

    ogrePrite.onload = function () {
        let ogre = new Unit({
            name: 'ogre',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: ogrePrite,
            countMoveFrame: 5,
            countAttackFrame: 4,
            countDeathFrame: 5,
            position: {
                x: 0,
                y: 320
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let peonSprite = new Image();
    peonSprite.src = 'assets/orc/peon.png';

    peonSprite.onload = function () {
        let peon = new Unit({
            name: 'peon',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: peonSprite,
            countMoveFrame: 5,
            countAttackFrame: 5,
            countDeathFrame: 3,
            position: {
                x: 0,
                y: 380
            },
            velocity: 2,
            speedAnimate: 7
        })
    }


    let peonWithWoodSprite = new Image();
    peonWithWoodSprite.src = 'assets/orc/peon_with_wood.png';

    peonWithWoodSprite.onload = function () {
        let peonWithWood = new Unit({
            name: 'peonWithWood',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: peonWithWoodSprite,
            countMoveFrame: 5,
            countAttackFrame: 5,
            countDeathFrame: 3,
            position: {
                x: 0,
                y: 450
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let peonWithGoldSprite = new Image();
    peonWithGoldSprite.src = 'assets/orc/peon_with_gold.png';

    peonWithGoldSprite.onload = function () {
        let peonWithGold = new Unit({
            name: 'peonWithGold',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: peonWithGoldSprite,
            countMoveFrame: 5,
            countAttackFrame: 5,
            countDeathFrame: 3,
            position: {
                x: 0,
                y: 510
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let trollAxethrowerSprite = new Image();
    trollAxethrowerSprite.src = 'assets/orc/troll_axethrower.png';

    trollAxethrowerSprite.onload = function () {
        let trollAxethrower = new Unit({
            name: 'trollAxethrower',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: trollAxethrowerSprite,
            countMoveFrame: 5,
            countAttackFrame: 4,
            countDeathFrame: 3,
            position: {
                x: 0,
                y: 570
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let eyeOfKilroggSprite = new Image();
    eyeOfKilroggSprite.src = 'assets/orc/eye_of_kilrogg.png';

    eyeOfKilroggSprite.onload = function () {
        let eyeOfKilrogg = new Unit({
            name: 'eyeOfKilrogg',
            height: 32,
            width: 32,
            ctx: canv.getContext("2d"),
            image: eyeOfKilroggSprite,
            countMoveFrame: 1,
            position: {
                x: 20,
                y: 600
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let goblinZeppelinSprite = new Image();
    goblinZeppelinSprite.src = 'assets/orc/goblin_zeppelin.png';

    eyeOfKilroggSprite.onload = function () {
        let goblinZeppelin = new Unit({
            name: 'goblinZeppelin',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: goblinZeppelinSprite,
            countMoveFrame: 1,
            position: {
                x: 90,
                y: 0
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let ogreJuggernaughtSprite = new Image();
    ogreJuggernaughtSprite.src = 'assets/orc/ogre_juggernaught.png';

    ogreJuggernaughtSprite.onload = function () {
        let ogreJuggernaught = new Unit({
            name: 'ogreJuggernaught',
            height: 88,
            width: 88,
            ctx: canv.getContext("2d"),
            image: ogreJuggernaughtSprite,
            countMoveFrame: 1,
            countDeathFrame: 2,
            position: {
                x: 90,
                y: 100
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let orcTankerEmptySprite = new Image();
    orcTankerEmptySprite.src = 'assets/orc/orc_tanker_empty.png';

    orcTankerEmptySprite.onload = function () {
        let orcTankerEmpty = new Unit({
            name: 'orcTankerEmpty',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: orcTankerEmptySprite,
            countMoveFrame: 1,
            countDeathFrame: 2,
            position: {
                x: 90,
                y: 200
            },
            velocity: 2,
            speedAnimate: 7
        })
    }


    let oilTankerFullSprite = new Image();
    oilTankerFullSprite.src = 'assets/orc/oil_tanker_full.png';

    oilTankerFullSprite.onload = function () {
        let oilTankerFull = new Unit({
            name: 'oilTankerFull',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: oilTankerFullSprite,
            countMoveFrame: 1,
            countDeathFrame: 2,
            position: {
                x: 90,
                y: 280
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    // let transportOrcSprite = new Image();
    // transportOrcSprite.src = 'assets/orc/transport.png';

    // transportOrcSprite.onload = function () {
    //     let transport = new Unit({
    //         name:'transport',
    //         height: 72,
    //         width: 72,
    //         ctx: canv.getContext("2d"),
    //         image: transportOrcSprite,
    //         countMoveFrame: 1,
    //         countDeathFrame: 2,
    //         position: {
    //             x: 90,
    //             y: 400
    //         },
    //         velocity: 2,
    //         speedAnimate: 7
    //     })
    // }

    let giantTurtleSprite = new Image();
    giantTurtleSprite.src = 'assets/orc/giant_turtle.png';

    giantTurtleSprite.onload = function () {
        let giantTurtle = new Unit({
            name: 'giantTurtle',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: giantTurtleSprite,
            countMoveFrame: 1,
            position: {
                x: 90,
                y: 360
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let trollDestroyerSprite = new Image();
    trollDestroyerSprite.src = 'assets/orc/troll_destroyer.png';

    trollDestroyerSprite.onload = function () {
        let trollDestroyer = new Unit({
            name: 'trollDestroyer',
            height: 88,
            width: 88,
            ctx: canv.getContext("2d"),
            image: trollDestroyerSprite,
            countMoveFrame: 1,
            countDeathFrame: 2,
            position: {
                x: 90,
                y: 450
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let orcRiderSprite = new Image();
    orcRiderSprite.src = 'assets/orc/orcRider.png';

    orcRiderSprite.onload = function () {
        let orcRider = new Unit({
            name: 'trollDestroyer',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: orcRiderSprite,
            countMoveFrame: 5,
            countAttackFrame: 5,
            countDeathFrame: 5,
            position: {
                x: 90,
                y: 540
            },
            velocity: 2,
            speedAnimate: 7
        })
    }




    //Люди
    let ballistaSprite = new Image();
    ballistaSprite.src = 'assets/human/ballista.png';

    ballistaSprite.onload = function () {
        let ballista = new Unit({
            name: 'ballista',
            height: 64,
            width: 64,
            ctx: canv.getContext("2d"),
            image: ballistaSprite,
            countMoveFrame: 2,
            countAttackFrame: 2,
            position: {
                x: 300,
                y: 0
            },
            velocity: 2,
            speedAnimate: 7
        })

    }

    let elvenArcherSprite = new Image();
    elvenArcherSprite.src = 'assets/human/elven_archer.png';

    elvenArcherSprite.onload = function () {
        let elvenArcher = new Unit({
            name: 'elvenArcher',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: elvenArcherSprite,
            countMoveFrame: 5,
            countAttackFrame: 2,
            countDeathFrame: 3,
            position: {
                x: 300,
                y: 60
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let footmanSprite = new Image();
    footmanSprite.src = 'assets/human/footman.png';

    footmanSprite.onload = function () {
        let footman = new Unit({
            name: 'footman',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: footmanSprite,
            countMoveFrame: 5,
            countAttackFrame: 4,
            countDeathFrame: 3,
            position: {
                x: 300,
                y: 130
            },
            velocity: 2,
            speedAnimate: 10
        })
    }


    let gryphonRiderSprite = new Image();
    gryphonRiderSprite.src = 'assets/human/gryphon_rider.png';

    gryphonRiderSprite.onload = function () {
        let gryphonRider = new Unit({
            name: 'gryphonRider',
            height: 80,
            width: 80,
            ctx: canv.getContext("2d"),
            image: gryphonRiderSprite,
            countMoveFrame: 4,
            countAttackFrame: 3,
            countDeathFrame: 6,
            fly: true,
            position: {
                x: 300,
                y: 200
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let knightSprite = new Image();
    knightSprite.src = 'assets/human/knight.png';

    knightSprite.onload = function () {
        let knight = new Unit({
            name: 'knight',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: knightSprite,
            countMoveFrame: 5,
            countAttackFrame: 4,
            countDeathFrame: 5,
            position: {
                x: 300,
                y: 280
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    let mageSprite = new Image();
    mageSprite.src = 'assets/human/mage.png';

    mageSprite.onload = function () {
        let mage = new Unit({
            name: 'mage',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: mageSprite,
            countMoveFrame: 5,
            countAttackFrame: 4,
            countDeathFrame: 7,
            position: {
                x: 300,
                y: 350
            },
            velocity: 2,
            speedAnimate: 6
        })
    }

    let peasantSprite = new Image();
    peasantSprite.src = 'assets/human/peasant.png';

    peasantSprite.onload = function () {
        let peasant = new Unit({
            name: 'peasant',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: peasantSprite,
            countMoveFrame: 5,
            countAttackFrame: 4,
            countDeathFrame: 3,
            position: {
                x: 300,
                y: 430
            },
            velocity: 2,
            speedAnimate: 8
        })
    }

    let peasantWithGoldSprite = new Image();
    peasantWithGoldSprite.src = 'assets/human/peasant_with_gold.png';

    peasantWithGoldSprite.onload = function () {
        let peasantWithGold = new Unit({
            name: 'peasantWithGold',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: peasantWithGoldSprite,
            countMoveFrame: 5,
            countAttackFrame: 4,
            countDeathFrame: 3,
            position: {
                x: 300,
                y: 480
            },
            velocity: 2,
            speedAnimate: 8
        })
    }


    let peasantWithWoodSprite = new Image();
    peasantWithWoodSprite.src = 'assets/human/peasant_with_wood.png';

    peasantWithWoodSprite.onload = function () {
        let peasantWithWood = new Unit({
            name: 'peasantWithWood',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: peasantWithWoodSprite,
            countMoveFrame: 5,
            countAttackFrame: 4,
            countDeathFrame: 3,
            position: {
                x: 300,
                y: 550
            },
            velocity: 2,
            speedAnimate: 8
        })
    }

    let gnomishFlyingMachineSprite = new Image();
    gnomishFlyingMachineSprite.src = 'assets/human/gnomish_flying_machine.png';

    gnomishFlyingMachineSprite.onload = function () {
        let gnomishFlyingMachine = new Unit({
            name: 'gnomishFlyingMachine',
            height: 80,
            width: 80,
            ctx: canv.getContext("2d"),
            image: gnomishFlyingMachineSprite,
            countMoveFrame: 2,
            countDeathFrame: 3,
            fly: true,
            position: {
                x: 400,
                y: 0
            },
            velocity: 2,
            speedAnimate: 5
        })
    }

    let battleshipSprite = new Image();
    battleshipSprite.src = 'assets/human/battleship.png';

    battleshipSprite.onload = function () {
        let battleship = new Unit({
            name: 'battleship',
            height: 88,
            width: 88,
            ctx: canv.getContext("2d"),
            image: battleshipSprite,
            countMoveFrame: 1,
            countDeathFrame: 2,
            position: {
                x: 400,
                y: 80
            },
            velocity: 2,
            speedAnimate: 5
        })
    }

    let elvenDestroyerSprite = new Image();
    elvenDestroyerSprite.src = 'assets/human/elven_destroyer.png';

    elvenDestroyerSprite.onload = function () {
        let elvenDestroyer = new Unit({
            name: 'elvenDestroyer',
            height: 88,
            width: 80,
            ctx: canv.getContext("2d"),
            image: elvenDestroyerSprite,
            countMoveFrame: 1,
            countDeathFrame: 2,
            position: {
                x: 400,
                y: 160
            },
            velocity: 2,
            speedAnimate: 5
        })
    }

    let gnomishSubmarineSprite = new Image();
    gnomishSubmarineSprite.src = 'assets/human/gnomish_submarine.png';

    gnomishSubmarineSprite.onload = function () {
        let gnomishSubmarine = new Unit({
            name: 'gnomishSubmarine',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: gnomishSubmarineSprite,
            countMoveFrame: 1,
            position: {
                x: 400,
                y: 260
            },
            velocity: 2,
            speedAnimate: 5
        })
    }

    let oilTankerEmptySprite = new Image();
    oilTankerEmptySprite.src = 'assets/human/oil_tanker_empty.png';

    oilTankerEmptySprite.onload = function () {
        let oilTankerEmpty = new Unit({
            name: 'oilTankerEmpty',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: oilTankerEmptySprite,
            countMoveFrame: 1,
            countDeathFrame: 2,
            position: {
                x: 400,
                y: 340
            },
            velocity: 2,
            speedAnimate: 5
        })
    }

    let transportSprite = new Image();
    transportSprite.src = 'assets/human/transport.png';

    transportSprite.onload = function () {
        let transport = new Unit({
            name: 'transport',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: transportSprite,
            countMoveFrame: 1,
            countDeathFrame: 2,
            position: {
                x: 400,
                y: 410
            },
            velocity: 2,
            speedAnimate: 5
        })
    }

    let lotharSprite = new Image();
    lotharSprite.src = 'assets/human/lothar.png';

    lotharSprite.onload = function () {
        let lothar = new Unit({
            name: 'lothar',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: lotharSprite,
            countMoveFrame: 5,
            countAttackFrame: 5,
            countDeathFrame: 3,
            position: {
                x: 400,
                y: 480
            },
            velocity: 2,
            speedAnimate: 7
        })
    }

    // Нейтральные
    let deamonSprite = new Image();
    deamonSprite.src = 'assets/neutral/daemon.png';

    deamonSprite.onload = function () {
        let deamon = new Unit({
            name: 'deamon',
            height: 72,
            width: 72,
            ctx: canv.getContext("2d"),
            image: deamonSprite,
            countMoveFrame: 5,
            countAttackFrame: 5,
            countDeathFrame: 6,
            position: {
                x: 580,
                y: 0
            },
            velocity: 3,
            speedAnimate: 8
        })
    }

    let demonSprite = new Image();
    demonSprite.src = 'assets/neutral/demon.png';

    demonSprite.onload = function () {
        let demon = new Unit({
            name: 'demon',
            height: 48,
            width: 48,
            ctx: canv.getContext("2d"),
            image: demonSprite,
            countMoveFrame: 5,
            countAttackFrame: 5,
            countDeathFrame: 6,
            position: {
                x: 580,
                y: 100
            },
            velocity: 3,
            speedAnimate: 8
        })
    }
}




