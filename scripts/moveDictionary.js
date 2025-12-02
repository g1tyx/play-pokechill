const move = {}

const defaultPlayerMoveTimer = 2000


//tier 1 - 20-40 uncompromised dmg
//tier 2 - 50-70 uncompromised dmg
//tier 3 - 80-100 uncompromised dmg

//signatures need to be learnt through cloning inheriting!



//unique skills

move.mysticalPower = {
    split: "special",
    type: "psychic",
    power: 70,
    info: function() {return `Increases Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self") },
}

move.prismaticLaser = {
    split: "physical",
    type: "psychic",
    power: 160,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.dynamicPunch = {
    split: "physical",
    type: "fighting",
    power: 100,
    info: function() {return `Inflicts ${tagConfused}`},
    hitEffect: function(target) { moveBuff(target,'confused') },
}

move.thunderousKick = {
    split: "physical",
    type: "fighting",
    power: 90,
    info: function() {return `Decreases enemy Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
}

move.meteorAssault = {
    split: "physical",
    type: "fighting",
    power: 150,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.cottonGuard = {
    split: "special",
    type: "grass",
    power: 0,
    info: function() {return `Increases Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'defup2',"self")},
}

move.drumBeating = {
    split: "physical",
    type: "grass",
    power: 80,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.tropKick = {
    split: "physical",
    type: "grass",
    power: 70,
    info: function() {return `Decreases enemy Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.shiftGear = {
    split: "special",
    type: "steel",
    power: 0,
    info: function() {return `Increases Attack by 50% and Speed by 100%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'speup2',"self") },
}

move.gearUp = {
    split: "special",
    type: "steel",
    power: 0,
    info: function() {return `Increases Attack and Special Attack by 50% to the entire team`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"team"); moveBuff(target,'satkup1',"team");},
}

move.relicSong = {
    split: "special",
    type: "normal",
    power: 100,
    info: function() {return `30% chance to inflict ${tagSleep}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'sleep') },
}

move.triAttack = {
    split: "special",
    type: "normal",
    power: 120,
    info: function() {return `10% chance to inflict ${tagBurn},${tagParalysis} or ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)){ if (rng(0.33)) {moveBuff(target,'burn')} else if (rng(0.33)) { moveBuff(target,'paralysis')} else moveBuff(target,'freeze') }},
}

move.judgment = { 
    split: "special",
    type: "fighting",
    power: 150
}

move.nobleRoar = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Attack and Special Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'atkdown2'); moveBuff(target,'satkdown2') },
}

move.hyperDrill = { 
    split: "physical",
    type: "normal",
    power: 150
}

move.fieryDance = {
    split: "special",
    type: "fire",
    power: 100,
    info: function() {return `30% chance to increase Special Attack by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'satkup1',"self") },
}

move.torchSong = {
    split: "special",
    type: "fire",
    power: 80,
    info: function() {return `Increases Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self") },
}

move.sacredFire = {
    split: "physical",
    type: "fire",
    power: 120,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.vCreate = {
    split: "physical",
    type: "fire",
    power: 180,
    info: function() {return `Decreases Defense, Special Defense and Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`); moveBuff(target,'sdefdown1',`self`); moveBuff(target,'spedown1',`self`); },
}

move.headlongRush = {
    split: "physical",
    type: "ground",
    power: 150,
    info: function() {return `Decreases Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`) },
}

move.sandsearStorm = {
    split: "special",
    type: "ground",
    power: 120,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.splash = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `...`} ,
}

move.flameBurst = {
    split: "special",
    type: "fire",
    power: 70,
    info: function() {return `Inflicts ${tagBurn} to the entire team`},
    hitEffect: function(target) { moveBuff(target,'burn',"team") },
}


//normal


move.quickAttack = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x0.8 faster than usual`} ,
}

move.tackle = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 40
}

move.cut = {
    moveset: [`normal`, `grass`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 50
}

move.leer = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 1,
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
}

move.swagger = {
    moveset: [`all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 0,
    info: function() {return `Inflicts ${tagConfused}, but increases Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'confused'); moveBuff(target,'atkup2') },
}

move.playNice = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.swift = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 60,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x0.8 faster than usual`} ,
}

move.dizzyPunch = {
    moveset: [`normal`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 70,
    info: function() {return `10% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
}

move.stomp = {
    moveset: [`normal`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 65
}

move.howl = {
    moveset: [`normal`, `dark`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 0,
    info: function() {return `Increases Attack by 50% to the entire team`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"team")},
}


move.screech = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'defdown2') },
}

move.extremeSpeed = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 75,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x0.8 faster than usual`} ,
}

move.strength = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 80
}

move.hyperVoice = {
    moveset: [`normal`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 90
}

move.bodyPress = { 
    moveset: [`normal`, `fighting`, `rock`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 80
}

move.hyperBeam = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 150,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return `Attacks x1.5 slower than usual`} ,
}

move.swordsDance = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 0,
    info: function() {return `Increases Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'atkup2',"self");},
}



//fire
move.ember = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 1,
    type: "fire",
    power: 40,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.fireSpin = {
    moveset: [`fire`],
    split: "special",
    rarity: 1,
    type: "fire",
    power: 35,
}

move.flameCharge = {
    moveset: [`fire`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 50,
    info: function() {return `Increases Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'speup1','self') },
}

move.incinerate = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 2,
    type: "fire",
    power: 60
}

move.fireFang = {
    moveset: [`fire`, `dark`, `dragon`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 65,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.firePunch = {
    moveset: [`fire`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 75,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.flamethrower = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 90,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.heatWave = {
    moveset: [`fire`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 95,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.fireBlast = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 110,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}











//electric
move.nuzzle = {
    moveset: [`electric`, `fairy`],
    split: "physical",
    rarity: 1,
    type: "electric",
    power: 40,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.magneticFlux = {
    moveset: [`electric`, `steel`],
    split: "special",
    rarity: 1,
    type: "electric",
    power: 0,
    info: function() {return `Increases Special Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'sdefup1',"self") },
}

move.thunderShock = {
    moveset: [`electric`],
    split: "special",
    rarity: 1,
    type: "electric",
    power: 40,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.thunderWave = {
    moveset: [`electric`, `psychic`, `ghost`, `fairy`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 0,
    info: function() {return `Inflicts ${tagParalysis}`},
    hitEffect: function(target) { moveBuff(target,'paralysis') },
}

move.chargeBeam = {
    moveset: [`electric`, `psychic`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 50,
    info: function() {return `10% chance to increase Special Attack by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'satkup1',"self") },
}

move.electroWeb = {
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 55,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.thunderFang = {
    moveset: [`electric`, `dark`, `dragon`],
    split: "physical",
    rarity: 2,
    type: "electric",
    power: 65,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.thunderPunch = {
    moveset: [`electric`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "electric",
    power: 75,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.thunderbolt = {
    moveset: [`electric`, `psychic`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 90,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.discharge = {
    moveset: [`electric`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 80,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}






//ground
move.mudSlap = {
    moveset: [`ground`, `water`, `poison`],
    split: "special",
    rarity: 1,
    type: "ground",
    power: 20
}

move.mudShot = {
    moveset: [`ground`, `water`, `poison`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 55,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.bulldoze = {
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 2,
    type: "ground",
    power: 60,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.rototiller = {
    moveset: [`ground`, `grass`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 0,
    info: function() {return `Increases Attack and Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'satkup1',"self") },
}

move.scorchingSands = {
    moveset: [`ground`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 70,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.earthquake = {
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 3,
    type: "ground",
    power: 100
}

move.dig = {
    moveset: [`ground`],
    split: "physical",
    rarity: 3,
    type: "ground",
    power: 80
}

move.earthPower = {
    moveset: [`ground`],
    split: "special",
    rarity: 3,
    type: "ground",
    power: 90,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}



//steel
move.bulletPunch = {
    moveset: [`steel`, `fighting`],
    split: "physical",
    rarity: 1,
    type: "steel",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x0.8 faster than usual`},
}

move.metalClaw = {
    moveset: [`steel`, `flying`, `dragon`],
    split: "physical",
    rarity: 1,
    type: "steel",
    power: 50,
    info: function() {return `10% chance to increase Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self") },
}

move.magnetBomb = {
    moveset: [`steel`, `electric`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 60
}



move.mirrorShot = {
    moveset: [`steel`],
    split: "special",
    rarity: 2,
    type: "steel",
    power: 60
}

move.steelWing = {
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 70,
    info: function() {return `10% chance to increase Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defup1',"self") },
}

move.ironHead = {
    moveset: [`steel`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 80
}

move.flashCannon = {
    moveset: [`steel`, `electric`, `psychic`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 80,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}


move.ironTail = {
    moveset: [`steel`],
    split: "physical",
    rarity: 3,
    type: "steel",
    power: 100,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.metalSound = {
    moveset: [`steel`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 0,
    info: function() {return `Decreases enemy Special Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'sdefdown2') },
}

move.ironDefense = {
    moveset: [`steel`, `fighting`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 0,
    info: function() {return `Increases Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self");},
}







//flying
move.peck = {
    moveset: [`flying`],
    split: "physical",
    rarity: 1,
    type: "flying",
    power: 35
}

move.gust = {
    moveset: [`flying`],
    split: "special",
    rarity: 1,
    type: "flying",
    power: 40
}

move.skyDrop = {
    moveset: [`flying`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 60
}

move.acrobatics = {
    moveset: [`flying`, `bug`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 55
}

move.airShlash = {
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 75
}

move.drillPeck = {
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 80
}

move.tailwind = {
    moveset: [`flying`],
    split: "special",
    rarity: 2,
    type: "flying",
    power: 0,
    info: function() {return `Increases Speed by 50% to the entire team`},
    hitEffect: function(target) { moveBuff(target,'speup1',"team"); },
}

move.fly = {
    moveset: [`flying` ,`dragon`],
    split: "physical",
    rarity: 3,
    type: "flying",
    power: 90
}

move.featherDance = {
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 0,
    info: function() {return `Decreases enemy Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'atkdown2') },
}

move.bounce = {
    moveset: [`flying`],
    split: "physical",
    rarity: 3,
    type: "flying",
    power: 85,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.hurricane = {
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 110,
    info: function() {return `10% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
}



//poison
move.acid = {
    moveset: [`poison`, `grass`],
    split: "special",
    rarity: 1,
    type: "poison",
    power: 40,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.smog = {
    moveset: [`poison`],
    split: "special",
    rarity: 1,
    type: "poison",
    power: 30,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.poisonSting = {
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "poison",
    power: 15,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.poisonPowder = {
    moveset: [`grass`,],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 0,
    info: function() {return `Inflicts ${tagPoisoned}`},
    hitEffect: function(target) { moveBuff(target,'poisoned') },
}

move.toxic = {
    moveset: [`poison`, `all`],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 0,
    info: function() {return `Inflicts ${tagPoisoned}`},
    hitEffect: function(target) { moveBuff(target,'poisoned') },
}

move.poisonFang = {
    moveset: [`poison`, `dark`],
    split: "physical",
    rarity: 2,
    type: "poison",
    power: 50,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.sludge = {
    moveset: [`poison`],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 65,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.crossPoison = {
    moveset: [`poison`, `fighting`, `dark`],
    split: "physical",
    rarity: 2,
    type: "poison",
    power: 70,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.poisonJab = {
    moveset: [`poison`, `fighting`, `dark`],
    split: "physical",
    rarity: 3,
    type: "poison",
    power: 80,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.sludgeBomb = {
    moveset: [`poison`, `ground`, `grass`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 90,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.sludgeWave = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 95,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.coil = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 0,
    info: function() {return `Increases Attack and Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'defup1',"self") },
}

move.acidArmor = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 0,
    info: function() {return `Increases Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'defup2',"self") },
}

move.acidSpray = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 40,
    info: function() {return `Decreases enemy Special Defense by 100%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown2') },
}







//ice
move.iceShard = {
    moveset: [`ice`],
    split: "physical",
    rarity: 1,
    type: "ice",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x0.8 faster than usual`} ,
}

move.powderSnow = {
    moveset: [`ice`],
    split: "special",
    rarity: 1,
    type: "ice",
    power: 40,
    info: function() {return `10% chance to inflict ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
}

move.icyWind = {
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 55,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.avalanche = {
    moveset: [`ice`, `rock`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 60
}

move.frostBreath = {
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 60
}

move.auroraBeam = {
    moveset: [`ice`, `water`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 65,
    info: function() {return `10% chance to decrease enemy Attack by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'atkdown1') },
}

move.iceFang = { 
    moveset: [`ice`, `dark`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 65,
    info: function() {return `10% chance to inflict ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
}

move.icePunch = { 
    moveset: [`ice`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 75,
    info: function() {return `10% chance to inflict ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
}

move.iceBeam = {
    moveset: [`ice`, `water`, `psychic`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: 90,
    info: function() {return `10% chance to inflict ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
}

move.blizzard = {
    moveset: [`ice`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: 110,
    info: function() {return `10% chance to inflict ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
}

move.icicleCrash = {
    moveset: [`ice`],
    split: "physical",
    rarity: 3,
    type: "ice",
    power: 85
}




//bug

move.twineedle = {
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "bug",
    power: 25,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.furyCutter = {
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "bug",
    power: 40
}

move.stickyWeb = {
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 0,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.pounce = {
    moveset: [`bug`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 50,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.struggleBug = {
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 50,
    info: function() {return `Decreases enemy Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'satkdown1') },
}

move.bugBite = {
    moveset: [`bug`, `dark`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 60
}

move.bugBuzz = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 90,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.signalBeam = {
    moveset: [`bug`, `electric`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 75,
    info: function() {return `10% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
}

move.silverWind = {
    moveset: [`bug`, `flying`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 60
}

move.xScissor = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 80
}

move.stringShot = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 0,
    info: function() {return `Decreases enemy Speed by 100%`},
    hitEffect: function(target) { moveBuff(target,'spedown2',"self") },
}



move.bugBuzz = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 90
}




//water
move.waterGun = {
    moveset: [`water`],
    split: "special",
    rarity: 1,
    type: "water",
    power: 40
}

move.aquaJet = {
    moveset: [`water`],
    split: "physical",
    rarity: 1,
    type: "water",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x0.8 faster than usual`} ,
}

move.waterPulse = {
    moveset: [`water`, `psychic`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 60,
    info: function() {return `10% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
}

move.chillingWater = {
    moveset: [`water`, `ice`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 50,
    info: function() {return `Decreases enemy Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkdown2') },
}

move.bubbleBeam = {
    moveset: [`water`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 65,
    info: function() {return `10% chance to decrease enemy Speed by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'spedown1') },
}

move.waterfall = {
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 80
}

move.scald = {
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 80,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.liquidation = {
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 85,
    info: function() {return `10% chance to increase Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defup1',"self") },
}

move.aquaTail = {
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 90
}

move.surf = {
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 90
}

move.muddyWater = {
    moveset: [`water`, `ground`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 90
}

//grass
move.leafage = {
    moveset: [`grass`],
    split: "physical",
    rarity: 1,
    type: "grass",
    power: 40
}

move.vineWhip = {
    moveset: [`grass`],
    split: "physical",
    rarity: 1,
    type: "grass",
    power: 45
}

move.magicalLeaf = {
    moveset: [`grass`, `psychic`, `fairy`],
    split: "special",
    rarity: 2,
    type: "grass",
    power: 60
}



move.razorLeaf = {
    moveset: [`grass`],
    split: "physical",
    rarity: 2,
    type: "grass",
    power: 55
}

move.stunSpore = {
    moveset: [`grass`],
    split: "special",
    rarity: 2,
    type: "grass",
    power: 0,
    info: function() {return `Inflicts ${tagParalysis}`},
    hitEffect: function(target) { moveBuff(target,'paralysis') },
}

move.leafBlade = {
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 90
}

move.energyBall = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 90,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.solarBeam = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.seedBomb = {
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 80
}

move.cottonSpore = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return `Decreases enemy Speed by 100%`},
    hitEffect: function(target) { moveBuff(target,'spedown2') },
}

move.spore = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return `50% chance to inflict ${tagSleep}`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sleep') },
}



//fighting
move.rockSmash = {
    moveset: [`fighting`,`steel`,`rock`],
    split: "physical",
    rarity: 1,
    type: "fighting",
    power: 40
}

move.vacuumWave = {
    moveset: [`fighting`],
    split: "special",
    rarity: 1,
    type: "fighting",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x0.8 faster than usual`} ,
}

move.machPunk = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 1,
    type: "fighting",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x0.8 faster than usual`} ,
}

move.powerupPunch = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 40,
    info: function() {return `Increases Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self")},
}

move.forcePalm = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 60
}

move.stormThrow = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 60
}

move.lowSweep = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 60,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.brickBreak = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 75
}

move.skyUppercut = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 85
}

move.hammerArm = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 90,
    info: function() {return `Increases Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1','self') },
}

move.auraSphere = {
    moveset: [`fighting`,`ghost`,`psychic`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 80
}

move.bulkUp = {
    moveset: [`fighting`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 0,
    info: function() {return `Increases Attack and Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'defup1',"self") },
}

move.crossChop = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 100
}

move.focusBlast = {
    moveset: [`fighting`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}





//psychic
move.confusion = {
    moveset: [`psychic`,`ghost`],
    split: "special",
    rarity: 1,
    type: "psychic",
    power: 50,
    info: function() {return `10% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
}

move.psybeam = {
    moveset: [`psychic`],
    split: "special",
    rarity: 2,
    type: "psychic",
    power: 65,
    info: function() {return `10% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
}

move.futureSight = {
    moveset: [`psychic`],
    split: "special",
    rarity: 2,
    type: "psychic",
    power: 120,
    timer: defaultPlayerMoveTimer*2,
    info: function() {return `Attacks x2 slower than usual`} ,
}

move.psychoCut = {
    moveset: [`psychic`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "psychic",
    power: 70
}

move.zenHeadbut = {
    moveset: [`psychic`, `fighting`],
    split: "physical",
    rarity: 3,
    type: "psychic",
    power: 80
}

move.psychic = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 90,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.extrasensory = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 90
}

move.amnesia = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return `Increases Special Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'sdefup2',"self")},
}

move.barrier = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return `Increases Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'defup2',"self")},
}

move.agility = {
    moveset: [`psychic`, `normal`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return `Increases Speed by 100%`},
    hitEffect: function(target) { moveBuff(target,'speup2',"self")},
}

move.calmMind = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return `Increases Special Defense and Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'sdefup1',"self"); moveBuff(target,'satkup1',"self") },
}



//rock
move.rockThrow = {
    moveset: [`rock`],
    split: "physical",
    rarity: 1,
    type: "rock",
    power: 50
}

move.accelerock = {
    moveset: [`rock`],
    split: "physical",
    rarity: 1,
    type: "rock",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x0.8 faster than usual`} ,
}

move.ancientPower = {
    moveset: [`rock`, "psychic"],
    split: "special",
    rarity: 2,
    type: "rock",
    power: 60,
    info: function() {return `5% chance to increase All Stats by 50%`},
    hitEffect: function(target) { if (rng(0.05)) {moveBuff(target,'satkup1',"self");moveBuff(target,'atkup1',"self");moveBuff(target,'defup1',"self");moveBuff(target,'sdefup1',"self");moveBuff(target,'speup1',"self");} },
}

move.smackDown = {
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 50
}

move.rollout = {
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 60
}

move.rockTomb = {
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 60,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.rockSlide = {
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 75
}

move.powerGem = {
    moveset: [`rock`, `fairy`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: 80
}

move.stoneEdge = {
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 100
}

move.rockPolish = {
    moveset: [`rock`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: 0,
    info: function() {return `Increases Speed by 100%`},
    hitEffect: function(target) { moveBuff(target,'speup2',"self")},
}


//ghost
move.lick = {
    moveset: [`ghost`, `normal`],
    split: "physical",
    rarity: 1,
    type: "ghost",
    power: 30,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.shadowSneak = {
    moveset: [`ghost`],
    split: "physical",
    rarity: 1,
    type: "ghost",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x0.8 faster than usual`} ,
}

move.confuseRay = {
    moveset: [`ghost`, `psychic`, `all`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 0,
    info: function() {return `Inflicts ${tagConfused}`},
    hitEffect: function(target) { moveBuff(target,'confused') },
}

move.shadowPunch = {
    moveset: [`ghost`],
    split: "physical",
    rarity: 2,
    type: "ghost",
    power: 60
}

move.ominousWind = {
    moveset: [`ghost`, "flying"],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 60,
    info: function() {return `5% chance to increase All Stats by 50%`},
    hitEffect: function(target) { if (rng(0.05)) {moveBuff(target,'satkup1',"self");moveBuff(target,'atkup1',"self");moveBuff(target,'defup1',"self");moveBuff(target,'sdefup1',"self");moveBuff(target,'speup1',"self");} },
}

move.hex = {
    moveset: [`ghost`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 65
}

move.shadowClaw = {
    moveset: [`ghost`],
    split: "physical",
    rarity: 3,
    type: "ghost",
    power: 90
}

move.shadowBall = {
    moveset: [`ghost`, `psychic`],
    split: "special",
    rarity: 3,
    type: "ghost",
    power: 80,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

//dragon
move.twister = {
    moveset: [`dragon`, `flying`],
    split: "special",
    rarity: 1,
    type: "dragon",
    power: 40
}

move.dragonTail = {
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 60
}

move.dragonBreath = {
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 60,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.dragonPulse = {
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: 85
}

move.dragonClaw = {
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "dragon",
    power: 80
}

move.dragonRush = {
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "dragon",
    power: 100,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.dragonDance = {
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: 0,
    info: function() {return `Increases Attack and Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'speup1',"self") },
}


//dark
move.pursuit = {
    moveset: [`dark`],
    split: "physical",
    rarity: 1,
    type: "dark",
    power: 40
}

move.snarl = {
    moveset: [`dark`],
    split: "special",
    rarity: 2,
    type: "dark",
    power: 40,
    info: function() {return `Decreases enemy Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'satkdown1') },
}

move.bite = {
    moveset: [`dark`, `bug`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 60
}

move.feintAttack = {
    moveset: [`dark`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 60
}

move.knockOff = {
    moveset: [`dark`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 65
}

move.honeClaws = {
    moveset: [`dark`, `steel`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power : 0,
    info: function() {return `Increases Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self") },
}

move.crunch = {
    moveset: [`dark`],
    split: "physical",
    rarity: 3,
    type: "dark",
    power: 80,
    info: function() {return `10% chance to decrease enemy Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'defdown1') },
}

move.darkPulse = {
    moveset: [`dark`, `psychic`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 80
}

move.nightSlash = {
    moveset: [`dark`],
    split: "physical",
    rarity: 3,
    type: "dark",
    power: 85
}

move.fakeTears = {
    moveset: [`dark`, `fairy`],
    split: "physical",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return `Decreases enemy Special Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'sdefdown2') },
}

move.nastyPlot = {
    moveset: [`dark`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return `Increases Special Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self");},
}

//fairy

move.disarmingVoice = {
    moveset: [`fairy`, `normal`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 40
}

move.fairyWind = {
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 50
}

move.alluringVoice = {
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 60
}

move.dazzlingGleam = {
    moveset: [`fairy`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 80
}

move.playRough = {
    moveset: [`fairy`, `dark`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: 90
}

move.moonblast = {
    moveset: [`fairy`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 95,
    info: function() {return `10% chance to decrease enemy Special Attack by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'satkdown1') },
}

move.aromaticMist = {
    moveset: [`fairy`, `grass`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 0,
    info: function() {return `Increases Special Defense by 50% to the entire team`},
    hitEffect: function(target) { moveBuff(target,'sdefup1',"team")},
}

move.babydollEyes = {
    moveset: [`fairy`, `normal`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 0,
    info: function() {return `Decreases enemy Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.charm = {
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 0,
    info: function() {return `Decreases enemy Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'atkdown2') },
}

move.sweetKiss = {
    moveset: [`fairy`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 0,
    info: function() {return `Inflicts ${tagConfused}`},
    hitEffect: function(target) { moveBuff(target,'confused') },
}




for (const i in move){
    move[i].id = i
    if (move[i].timer == undefined) move[i].timer = defaultPlayerMoveTimer
}