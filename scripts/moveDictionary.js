const move = {}

const defaultPlayerMoveTimer = 2000


//tier 1 - 20-40 uncompromised dmg
//tier 2 - 50-70 uncompromised dmg
//tier 3 - 80-100 uncompromised dmg

//signatures need to be learnt through cloning inheriting!



//unique skills

//tier 4 - learnt by normal pokemon = 120-140 uncompromised dmg
//tier 5 - learnt by legendary pokemon = 160-180 uncompromised dmg

const t4Base = 140
const t5Base = 170

move.blazeKick = {
    split: "physical",
    type: "fire",
    power: t4Base,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.braveBird = {
    split: "physical",
    type: "flying",
    power: t4Base,
}

move.voltTackle = {
    split: "physical",
    rarity: 4,
    type: "electric",
    power: t4Base,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.howl = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Increases Attack by 50% to the entire team`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"team")},
}

move.boneRush = {
    split: "physical",
    type: "ground",
    power: t4Base/4,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.mysticalPower = {
    split: "special",
    type: "psychic",
    power: t4Base-20,
    info: function() {return `Increases Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self") },
}

move.quiverDance = {
    split: "special",
    type: "bug",
    power: 0,
    info: function() {return `Increases Speed, Special Defense and Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'speup1',"self"); moveBuff(target,'sdefup1',"self"); moveBuff(target,'satkup1',"self") },
}

move.prismaticLaser = {
    split: "physical",
    type: "psychic",
    power: t5Base+10*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.dynamicPunch = {
    split: "physical",
    type: "fighting",
    power: t4Base-20,
    info: function() {return `Inflicts ${tagConfused}`},
    hitEffect: function(target) { moveBuff(target,'confused') },
}

move.thunderousKick = {
    split: "physical",
    type: "fighting",
    power: t5Base-10,
    info: function() {return `Decreases enemy Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
}

move.meteorAssault = {
    split: "physical",
    type: "fighting",
    power: t5Base+20*1.2,
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
    power: t4Base-20,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.tropKick = {
    split: "physical",
    type: "grass",
    power: t4Base-10,
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
    power: t5Base-10,
    info: function() {return `30% chance to inflict ${tagSleep}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'sleep') },
}

move.zapCannon = {
    split: "special",
    type: "electric",
    power: t5Base-20,
    info: function() {return `Inflicts ${tagParalysis}`},
    hitEffect: function(target) { moveBuff(target,'paralysis') },
}

move.triAttack = {
    split: "special",
    type: "normal",
    power: t4Base,
    info: function() {return `10% chance to inflict ${tagBurn},${tagParalysis} or ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)){ if (rng(0.33)) {moveBuff(target,'burn')} else if (rng(0.33)) { moveBuff(target,'paralysis')} else moveBuff(target,'freeze') }},
}

move.judgment = { 
    split: "special",
    type: "normal",
    power: t5Base+30
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
    power: t4Base+10
}

move.fieryDance = {
    split: "special",
    type: "fire",
    power: t4Base-10,
    info: function() {return `30% chance to increase Special Attack by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'satkup1',"self") },
}

move.torchSong = {
    split: "special",
    type: "fire",
    power: t4Base-40,
    info: function() {return `Increases Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self") },
}

move.sacredFire = {
    split: "physical",
    type: "fire",
    power: t5Base,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.vCreate = {
    split: "physical",
    type: "fire",
    power: t5Base+30,
    info: function() {return `Decreases Defense, Special Defense and Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`); moveBuff(target,'sdefdown1',`self`); moveBuff(target,'spedown1',`self`); },
}

move.headlongRush = {
    split: "physical",
    type: "ground",
    power: t4Base+20,
    info: function() {return `Decreases Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`) },
}

move.sandsearStorm = {
    split: "special",
    type: "ground",
    power: t4Base,
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
    power: t4Base,
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
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.tackle = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 40
}

move.doubleSlap = { //new
    moveset: [`normal`, `fighting`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 15,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
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
    unavoidable: true,
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
}

move.growl = {//new
    moveset: [`normal`, `all`, `dark`],
    split: "special",
    rarity: 1,
    unavoidable: true,
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.swagger = {
    moveset: [`all`],
    split: "special",
    rarity: 2,
    unavoidable: true,
    type: "normal",
    power: 0,
    info: function() {return `Inflicts ${tagConfused}, but increases Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'confused'); moveBuff(target,'atkup2') },
}

move.doubleHit = { //new
    moveset: [`normal`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 35,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.playNice = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 2,
    unavoidable: true,
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
    info: function() {return `Attacks x1.2 faster than usual`} ,
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


move.screech = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    unavoidable: true,
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'defdown2') },
}

move.smellingSalts = { //new
    moveset: [`normal`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 70,
    info: function() {return `Power doubles if the target is Paralyzed`},
    powerMod : function() { if (wildBuffs.paralysis>0) { return 2} else return 1 },
}

move.facade = { //new
    moveset: [`normal`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 70,
    info: function() {return `Power doubles if the user is Paralyzed, Burned or Poisoned`},
    powerMod : function() { if (team[exploreActiveMember].buffs?.burn > 0 || team[exploreActiveMember].buffs?.burn > 0 || team[exploreActiveMember].buffs?.paralysis > 0) { return 2} else return 1 },
}



move.extremeSpeed = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 75,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`} ,
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

move.gigaImpact = { //new
    moveset: [`normal`, `all`],
    split: "physical",
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
    unavoidable: true,
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

move.fireSpin = { //new
    moveset: [`fire`],
    split: "special",
    rarity: 1,
    type: "fire",
    power: 15,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
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

move.willOWisp = { //new
    moveset: [`fire`, `ghost`],
    split: "special",
    rarity: 2,
    type: "fire",
    power: 0,
    info: function() {return `Inflicts ${tagBurn}`},
    hitEffect: function(target) { moveBuff(target,'burn') },
}

move.sunnyDay = {//new
    moveset: [`fire`,`ground`],
    split: "special",
    rarity: 2,
    type: "fire",
    power: 0,
    info: function() {return `Changes the weather to ${tagSunny}`} ,
    hitEffect: function(target) { changeWeather("sunny") },
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
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.flareBlitz = {
    moveset: [`fire`],
    split: "physical",
    rarity: 3,
    type: "fire",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}


move.overheat = { //new
    moveset: [`fire`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 130,
    info: function() {return `Decreases Special Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'satkdown2','self') },
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
    unavoidable: true,
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

move.electricTerrain = {//new
    moveset: [`electric`,`steel`],
    split: "special",
    unavoidable: true,
    rarity: 3,
    type: "electric",
    power: 0,
    info: function() {return `Changes the weather to ${tagElectricTerrain}`} ,
    hitEffect: function(target) { changeWeather("electricTerrain") },
}

move.thunder = {
    moveset: [`electric`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}




//ground
move.mudSlap = {
    moveset: [`ground`, `water`, `poison`],
    split: "special",
    rarity: 1,
    type: "ground",
    power: 20
}

move.magnitude = { //new
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 1,
    type: "ground",
    power: 10,
    info: function() {return `Power randomly varies from x1 to x8`},
    powerMod : function() { return random(1,8) },
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

move.sandstorm = {//new
    moveset: [`rock`,`ground`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 0,
    info: function() {return `Changes the weather to ${tagSandstorm}`} ,
    hitEffect: function(target) { changeWeather("sandstorm") },
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
    info: function() {return `Attacks x1.2 faster than usual`},
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
    hitEffect: function(target) { moveBuff(target,'defup2',"self");},
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

move.dualWingbeat = { //new
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 30,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.acrobatics = { //new
    moveset: [`flying`, `bug`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 55,
    info: function() {return `Power doubles if the user is not holding any item`},
    powerMod : function() { if (team[exploreActiveMember].item === undefined ) { return 2} else return 1 },
}

move.airShlash = {
    rename: `airSlash`,
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
    power: 100,
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
    info: function() {return `Attacks x1.2 faster than usual`} ,
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

move.icicleSpear = { //new
    moveset: [`ice`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 25,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.hail = {//new
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 0,
    info: function() {return `Changes the weather to ${tagHail}`} ,
    hitEffect: function(target) { changeWeather("hail") },
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
    power: 100,
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

move.infestation = { //new
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "bug",
    power: 10,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.pinMissile = { //new
    moveset: [`bug`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 25,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
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
    hitEffect: function(target) { moveBuff(target,'spedown2') },
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
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.whirlpool = { //new
    moveset: [`water`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 25,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
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
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.rainDance = {//new
    moveset: [`water`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 0,
    info: function() {return `Changes the weather to ${tagRainy}`} ,
    hitEffect: function(target) { changeWeather("rainy") },
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

move.hydroPump = {
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
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

move.bulletSeed = { //new
    moveset: [`grass`],
    split: "physical",
    rarity: 2,
    type: "grass",
    power: 25,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
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

move.solarBlade = { //special
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 125,
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

move.grassyTerrain = {//new
    moveset: [`grass`,`bug`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return `Changes the weather to ${tagGrassyTerrain}`} ,
    hitEffect: function(target) { changeWeather("grassyTerrain") },
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
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.machPunk = {
    rename: `machPunch`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 1,
    type: "fighting",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.armThrust = { //new
    moveset: [`fighting`],
    split: "physical",
    rarity: 1,
    type: "fighting",
    power: 15,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
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
    info: function() {return `Decreases Speed by 50%`},
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

move.closeCombat = { //new
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 120,
    info: function() {return `Decreases Defense and Special Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1','self'); moveBuff(target,'sdefdown1','self') },
}

move.superpower = { //new
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 120,
    info: function() {return `Decreases Defense and Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1','self'); moveBuff(target,'atkdown1','self') },
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
    rename: `zenHeadbutt`,
    moveset: [`psychic`, `fighting`],
    split: "physical",
    rarity: 3,
    type: "psychic",
    power: 80
}

move.twinBeam = { //new
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 40,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
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
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.rockBlast = { //new
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 25,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
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
    info: function() {return `Attacks x1.2 faster than usual`} ,
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

move.fog = {//new
    moveset: [`dark`,`ghost`],
    split: "special",
    rarity: 2,
    unavoidable: true,
    type: "ghost",
    power: 0,
    info: function() {return `Changes the weather to ${tagFoggy}`} ,
    hitEffect: function(target) { changeWeather("foggy") },
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

move.hex = { //new
    moveset: [`ghost`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 65,
    info: function() {return `Power doubles if the target has a status condition`},
    powerMod : function() { if (wildBuffs.paralysis>0 || wildBuffs.burn>0 || wildBuffs.freeze>0  || wildBuffs.confused>0  || wildBuffs.poisoned>0  ) { return 2} else return 1 },
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

move.dualChop = { //new
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 30,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.dragonBreath = {
    moveset: [`dragon`],
    split: "special",
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

move.outrage = { //new
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "dragon",
    power: 120,
    info: function() {return `Inflicts ${tagConfused} on the user`},
    hitEffect: function(target) { moveBuff(target,'confused',"self") },
}

move.dracoMeteor = { //new
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: 130,
    info: function() {return `Decreases Special Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'satkdown2','self') },
}

move.dragonDance = {
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    unavoidable: true,
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

move.mistyTerrain = {//new
    moveset: [`fairy`,`psychic`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 0,
    info: function() {return `Changes the weather to ${tagMistyTerrain}`} ,
    hitEffect: function(target) { changeWeather("mistyTerrain") },
}

for (const i in move){
    move[i].id = i
    if (move[i].timer == undefined) move[i].timer = defaultPlayerMoveTimer
}


const ability = {}


//tier 1

ability.hydratation = { //new
    type: [`water`,`grass`],
    rarity: 1,
    info: function() {return `Prevents negative status effects while on ${tagRainy} weather`},
}

ability.sandVeil = { //new
    type: [`ground`],
    rarity: 1,
    info: function() {return `Prevents negative status effects while on ${tagSandstorm} weather`},
}

ability.snowCloak = { //new
    type: [`ice`],
    rarity: 1,
    info: function() {return `Prevents negative status effects while on ${tagHail} weather`},
}



ability.grabGuard = {
    type: [`fighting`],
    rarity: 1,
    info: function() {return `Halves the damage received of Fighting-type moves`},
}

ability.waterGuard = {
    type: [`water`],
    rarity: 1,
    info: function() {return `Halves the damage received of Water-type moves`},
}

ability.flameGuard = {
    type: [`fire`],
    rarity: 1,
    info: function() {return `Halves the damage received of Flame-type moves`},
}

ability.curseGuard = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return `Halves the damage received of Ghost-type moves`},
}

ability.poisonGuard = {
    type: [`poison`],
    rarity: 1,
    info: function() {return `Halves the damage received of Poison-type moves`},
}

ability.iceGuard = {
    type: [`ice`],
    rarity: 1,
    info: function() {return `Halves the damage received of Ice-type moves`},
}

ability.psychicGuard = {
    type: [`psychic`],
    rarity: 1,
    info: function() {return `Halves the damage received of Psychic-type moves`},
}

ability.fairyGuard = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return `Halves the damage received of Fairy-type moves`},
}

ability.leafGuard = {
    type: [`grass`],
    rarity: 1,
    info: function() {return `Halves the damage received of Grass-type moves`},
}

ability.plainGuard = {
    type: [`normal`],
    rarity: 1,
    info: function() {return `Halves the damage received of Normal-type moves`},
}

ability.sinisterGuard = {
    type: [`dark`],
    rarity: 1,
    info: function() {return `Halves the damage received of Dark-type moves`},
}

ability.steelGuard = {
    type: [`steel`],
    rarity: 1,
    info: function() {return `Halves the damage received of Steel-type moves`},
}

ability.dragonGuard = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return `Halves the damage received of Dragon-type moves`},
}

ability.bugGuard = {
    type: [`bug`],
    rarity: 1,
    info: function() {return `Halves the damage received of Bug-type moves`},
}

ability.rockGuard = {
    type: [`rock`],
    rarity: 1,
    info: function() {return `Halves the damage received of Rock-type moves`},
}

ability.groundGuard = {
    type: [`ground`],
    rarity: 1,
    info: function() {return `Halves the damage received of Ground-type moves`},
}

ability.flyingGuard = {
    type: [`flying`],
    rarity: 1,
    info: function() {return `Halves the damage received of Flying-type moves`},
}

ability.insomnia = {
    type: [`all`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagSleep}`},
}

ability.immunity = {
    type: [`all`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagPoisoned}`},
}

ability.limber = {
    type: [`all`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagParalysis}`},
}

ability.ownTempo = {
    type: [`all`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagConfused}`},
}

ability.magmaArmor = {
    type: [`fire`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagFreeze}`},
}

ability.waterVeil = {
    type: [`water`, `ice`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagBurn}`},
}

ability.synchronize = {
    type: [`all`],
    rarity: 1,
    info: function() {return `Inflicts active status effects to the attacker aswell`},
}

ability.marvelScale = {
    type: [`water`, `dragon`],
    rarity: 1,
    info: function() {return `Increases Defense by 50% if afflicted with a status effect`},
}

ability.livingShield = {
    type: [`bug`,`grass`],
    rarity: 1,
    info: function() {return `Increases Special Defense by 50% if afflicted with a status effect`},
}


ability.overgrow = {
    type: [`grass`],
    rarity: 1,
    info: function() {return `Increases the power of Grass-type moves by 30% below 50% HP`},
}

ability.blaze = {
    type: [`fire`],
    rarity: 1,
    info: function() {return `Increases the power of Fire-type moves by 30% below 50% HP`},
}

ability.swarm = {
    type: [`bug`],
    rarity: 1,
    info: function() {return `Increases the power of Bug-type moves by 30% below 50% HP`},
}

ability.torrent = {
    type: [`water`],
    rarity: 1,
    info: function() {return `Increases the power of Water-type moves by 30% below 50% HP`},
}

ability.bastion = {
    type: [`steel`],
    rarity: 1,
    info: function() {return `Increases the power of Steel-type moves by 30% below 50% HP`},
}

ability.average = {
    type: [`normal`],
    rarity: 1,
    info: function() {return `Increases the power of Normal-type moves by 30% below 50% HP`},
}

ability.resolve = {
    type: [`fighting`],
    rarity: 1,
    info: function() {return `Increases the power of Fighting-type moves by 30% below 50% HP`},
}

ability.mistify = {
    type: [`psychic`],
    rarity: 1,
    info: function() {return `Increases the power of Psychic-type moves by 30% below 50% HP`},
}

ability.hexerei = {
    type: [`ghost`],
    rarity: 1,
    info: function() {return `Increases the power of Ghost-type moves by 30% below 50% HP`},
}

ability.glimmer = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return `Increases the power of Fairy-type moves by 30% below 50% HP`},
}

ability.skyward = {
    type: [`flying`],
    rarity: 1,
    info: function() {return `Increases the power of Flying-type moves by 30% below 50% HP`},
}

ability.draconic = {
    type: [`dragon`],
    rarity: 1,
    info: function() {return `Increases the power of Dragon-type moves by 30% below 50% HP`},
}

ability.noxious = {
    type: [`poison`],
    rarity: 1,
    info: function() {return `Increases the power of Poison-type moves by 30% below 50% HP`},
}

ability.solid = {
    type: [`rock`],
    rarity: 1,
    info: function() {return `Increases the power of Rock-type moves by 30% below 50% HP`},
}

ability.rime = {
    type: [`ice`],
    rarity: 1,
    info: function() {return `Increases the power of Ice-type moves by 30% below 50% HP`},
}

ability.voltage = {
    type: [`electric`],
    rarity: 1,
    info: function() {return `Increases the power of Electric-type moves by 30% below 50% HP`},
}

ability.hyperCutter = {
    type: [`bug`],
    rarity: 1,
    info: function() {return `Prevents the lowering of the Attack stat`},
}

ability.bigPecks = {
    type: [`flying`],
    rarity: 1,
    info: function() {return `Prevents the lowering of the Defense stat`},
}

ability.wonderSkin = {
    type: [`all`],
    rarity: 1,
    info: function() {return `50% chance for received Status Effects to miss`},
}


//tier 2

ability.solarPower = { //new
    type: [`fire`,`grass`],
    rarity: 2,
    info: function() {return `Increases Special Attack by 50% on ${tagSunny} weather`},
}

ability.iceBody = { //new
    type: [`ice`],
    rarity: 2,
    info: function() {return `Increases Defense by 50% on ${tagHail} weather`},
}

ability.rainDish = { //new
    type: [`water`, `grass`],
    rarity: 2,
    info: function() {return `Increases Special Attack by 50% on ${tagRainy} weather`},
}

ability.sandForce = { //new
    type: [`ground`],
    rarity: 2,
    info: function() {return `Increases Attack by 50% on ${tagSandstorm} weather`},
}

ability.static = {
    type: [`electric`],
    rarity: 2,
    info: function() {return `10% chance to inflict ${tagParalysis} when attacked`},
}

ability.flameBody = {
    type: [`fire`],
    rarity: 2,
    info: function() {return `10% chance to inflict ${tagBurn} when attacked`},
}

ability.poisonPoint = {
    type: [`poison`],
    rarity: 2,
    info: function() {return `10% chance to inflict ${tagPoisoned} when attacked`},
}

ability.strangeCharm = {
    type: [`psychic`, `fairy`],
    rarity: 2,
    info: function() {return `10% chance to inflict ${tagConfused} when attacked`},
}

ability.effectSpore = {
    type: [`grass`],
    rarity: 2,
    info: function() {return `5% chance to inflict ${tagSleep} when attacked`},
}

ability.glacialBody = {
    type: [`ice`],
    rarity: 2,
    info: function() {return `5% chance to inflict ${tagFreeze} when attacked`},
}

ability.naturalCure = {
    type: [`all`],
    rarity: 2,
    info: function() {return `Status effects are cleared when switching Pokemon`},
}

ability.technician = {
    type: [`all`],
    rarity: 2,
    info: function() {return `Multiplies by 1.5x the power of moves with less than 60 power`},
}

ability.skillLink = {
    type: [`bug`,`normal`],
    rarity: 2,
    info: function() {return `Moves that hit multiple times always hit their maximum amount`},
}

ability.scrappy = {
    type: [`normal`, `fighting`],
    rarity: 2,
    info: function() {return `Ghost-type pokemon can be hit with Normal and Fighting-type moves`},
}

ability.unaware = {
    type: [`all`],
    rarity: 2,
    info: function() {return `When attacking, ignores the target's stat changes`},
}

ability.magicGuard = {
    type: [`psychic`, `fairy`],
    rarity: 2,
    info: function() {return `Can only take damage from direct damaging moves`},
}

ability.voltAbsorb = {
    type: [`electric`],
    rarity: 2,
    info: function() {return `Nullifies received Electric-type moves`},
}

ability.waterAbsorb = {
    type: [`water`],
    rarity: 2,
    info: function() {return `Nullifies received Water-type moves`},
}

ability.flareAbsorb = {
    type: [`fire`],
    rarity: 2,
    info: function() {return `Nullifies received Fire-type moves`},
}

ability.curseAbsorb = {
    type: [`dark`],
    rarity: 2,
    info: function() {return `Nullifies received Ghost-type moves`},
}

ability.poisonAbsorb = {
    type: [`poison`],
    rarity: 2,
    info: function() {return `Nullifies received Poison-type moves`},
}

ability.frostAbsorb = {
    type: [`ice`],
    rarity: 2,
    info: function() {return `Nullifies received Ice-type moves`},
}

ability.psychicAbsorb = {
    type: [`psychic`],
    rarity: 2,
    info: function() {return `Nullifies received Psychic-type moves`},
}

ability.lightAbsorb = {
    type: [`fairy`],
    rarity: 2,
    info: function() {return `Nullifies received Fairy-type moves`},
}

ability.growthAbsorb = {
    type: [`grass`],
    rarity: 2,
    info: function() {return `Nullifies received Grass-type moves`},
}

ability.ironFist = {
    type: [`fighting`],
    rarity: 2,
    info: function() {return `"Punch"-related moves have their power multiplied by x1.3`},
}

ability.strongJaw = {
    type: [`dark`],
    rarity: 2,
    info: function() {return `"Fang"-related moves have their power multiplied by x1.3`},
}

ability.toughClaws = {
    type: [`dragon`],
    rarity: 2,
    info: function() {return `"Claw"-related moves have their power multiplied by x1.3`},
}

ability.rivalry = {
    type: [`dragon`, `dark`],
    rarity: 2,
    info: function() {return `Multiplies the power of moves by x1.3 when the opposite Pokemon shares a type`},
}

ability.pickPocket = {
    type: [`dark`, `flying`, `normal`],
    rarity: 2,
    info: function() {return `Increases the weight of rare item drops by 1% (Can stack)`},
}

ability.guts = {
    type: [`fighting`,`normal`],
    rarity: 2,
    info: function() {return `Increases Attack by 50% if afflicted with a status effect, and nullifies the stat redution of the condition`},
}

ability.brittleArmor = {
    type: [`ice`,`rock`],
    rarity: 2,
    info: function() {return `Increases Special Attack by 50% if afflicted with a status effect`},
}

ability.grassyPelt = { //new
    type: [`grass`],
    rarity: 2,
    info: function() {return `Prevents negative stat changes and status effects while on ${tagRainy} weather`},
}

ability.sandyPelt = { //new
    type: [`ground`],
    rarity: 2,
    info: function() {return `Prevents negative stat changes and status effects while on ${tagSunny} weather`},
}

ability.moistPelt = { //new
    type: [`water`],
    rarity: 2,
    info: function() {return `Prevents negative stat changes and status effects while on ${tagSandstorm} weather`},
}

ability.fieryPelt = { //new
    type: [`fire`],
    rarity: 2,
    info: function() {return `Prevents negative stat changes and status effects while on ${tagHail} weather`},
}

ability.pixiePelt = { //new
    type: [`fairy`],
    rarity: 2,
    info: function() {return `Prevents negative stat changes and status effects while on ${tagFoggy} weather`},
}

ability.chlorophyll  = { //new
    type: [`grass`],
    rarity: 2,
    info: function() {return `Increases Speed by 50% on ${tagSunny} weather`},
}


//tier 3

//tier 3 names based on gemini, pisces, o luna, mars, etc
//increase atk further by 50% if increased etc


ability.slushRush  = { 
    type: [`ice`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% on ${tagHail} weather`},
}

ability.swiftSwim  = { 
    type: [`water`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% on ${tagRainy} weather`},
}

ability.sandRush  = { 
    type: [`ground`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% on ${tagSandstorm} weather`},
}



ability.intimidate = {
    type: [`dragon`, `ghost`],
    rarity: 3,
    info: function() {return `Decreases enemy Attack by 50% when the opposing Pokemon enters the battle`},
}

ability.dauntingLook = {
    type: [`bug`, `fire`, `fighting`],
    rarity: 3,
    info: function() {return `Decreases enemy Special Attack by 50% when the opposing Pokemon enters the battle`},
}

ability.unburden = {
    type: [`normal`, `fighting`, `flying`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% if no item is being held`},
}

ability.tintedLens = {
    type: [`bug`],
    rarity: 3,
    info: function() {return `Moves that are resisted by typing do instead normal damage`},
}

ability.multiscale = {
    type: [`water`],
    rarity: 3,
    info: function() {return `Damage received is halved when over 50% HP`},
}

ability.prankster = {
    type: [`dark`],
    rarity: 3,
    info: function() {return `Ghost and Dark-type moves are x1.5 faster than usual`},
}

/*ability.speedBoost = {
    type: [`flying`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% when defeating a Pokemon`},
}*/

ability.moxie = {
    type: [`dark`],
    rarity: 3,
    info: function() {return `Increases Attack by 50% when defeating a Pokemon`},
}

ability.strategist = {
    type: [`psychic`],
    rarity: 3,
    info: function() {return `Increases Special Attack by 50% when defeating a Pokemon`},
}

ability.sheerForce = {
    type: [`ground`, `steel`, `fighting`, `rock`],
    rarity: 3,
    info: function() {return `Secondary effect of harmful moves are removed, and their power is multiplied by x1.2`},
}

ability.levitate = {
    type: [`electric`, `steel`],
    rarity: 3,
    info: function() {return `Grants immunity to Ground-type moves`},
}

ability.thickFat = {
    type: [`normal`, `ice`],
    rarity: 3,
    info: function() {return `Halves damage received from Fire and Ice-type moves`},
}

ability.adaptability = {
    type: [`all`],
    rarity: 3,
    info: function() {return `Multiplies Same-Type-Attack-Bonus by x1.2`},
}

ability.noGuard = {
    type: [`all`],
    rarity: 3,
    info: function() {return `Moves always hit regardless of the type`},
}









//hidden

ability.toxicBoost = {
    info: function() {return `Increases the Damage dealt by x1.2 when afflicted with ${tagPoisoned}, and nullifies the damage overtime caused by it`},
    rarity: 3,
}

ability.flareBoost = {
    info: function() {return `Increases the Damage dealt by x1.2 when afflicted with ${tagBurn}, and nullifies the damage overtime caused by it`},
    rarity: 3,
}

ability.fullMetalBody = {
    info: function() {return `Prevents all stat decreases`},
    rarity: 3,
}

ability.supremeOverlord = {
    info: function() {return `Increases the Damage dealt by x1.1 for every team member defeated`},
    rarity: 3,
}

ability.gorillaTactics = {
    info: function() {return `Increases the Attack by x1.2, but prevents them from switching`},
    rarity: 3,
}

ability.beastBoost = {
    info: function() {return `Increases the highest stat of the user by 50% when defeating a Pokemon`},
    rarity: 3,
}

ability.quarkDrive = {
    info: function() {return `Increases the highest stat of the user by 50% on ${tagElectricTerrain}`},
    rarity: 3,
}

ability.protosynthesis = {
    info: function() {return `Increases the highest stat of the user by 50% on ${tagSunny} weather`},
    rarity: 3,
}

ability.drizzle = {
    info: function() {return `Changes the weather to ${tagRainy} when entering the battle`},
    rarity: 3,
}

ability.drought = {
    info: function() {return `Changes the weather to ${tagSunny} when entering the battle`},
    rarity: 3,
}

ability.sandStream = {
    info: function() {return `Changes the weather to ${tagSandstorm} when entering the battle`},
    rarity: 3,
}

ability.snowWarning = {
    info: function() {return `Changes the weather to ${tagHail} when entering the battle`},
    rarity: 3,
}

ability.somberField = {
    info: function() {return `Changes the weather to ${tagFoggy} when entering the battle`},
    rarity: 3,
}

ability.electricSurge = {
    info: function() {return `Changes the weather to ${tagElectricTerrain} when entering the battle`},
    rarity: 3,
}

ability.grassySurge = {
    info: function() {return `Changes the weather to ${tagGrassyTerrain} when entering the battle`},
    rarity: 3,
}

ability.mistySurge = {
    info: function() {return `Changes the weather to ${tagMistyTerrain} when entering the battle`},
    rarity: 3,
}

ability.sereneGrace = {
    info: function() {return `Secondary effect of moves are executed twice`},
    rarity: 3,
}

ability.hugePower = {
    info: function() {return `Attack stat is multiplied by x2`},
    rarity: 3,
}

ability.contrary = {
    info: function() {return `Inverts stat changes. Positive changes become negative, and negative become positive`},
    rarity: 3,
}

ability.protean = {
    info: function() {return `Changes the type of the user to match the type of the used move`},
    rarity: 3,
}

ability.simple = {
    info: function() {return `Stat changes on the user are boosted by a stage`},
    rarity: 3,
}

ability.parentalBond = {
    info: function() {return `Moves are executed a second time, at half power`},
    rarity: 3,
}

ability.moody = {
    info: function() {return `Every turn, a stat rises by 100% while one lowers by 50%`},
    rarity: 3,
}

ability.darkAura = {
    info: function() {return `Multiplies by x1.1 the power of Dark-type moves of all team members`},
    rarity: 3,
}


ability.normalize = {
    info: function() {return `All moves become Normal-type moves, and their power is multiplied by x1.2`},
    rarity: 3,
}


ability.ferrilate = {
    info: function() {return `Normal-type moves become Steel-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.glaciate = {
    info: function() {return `Normal-type moves become Ice-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.terralate = {
    info: function() {return `Normal-type moves become Ground-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.toxilate = {
    info: function() {return `Normal-type moves become Poison-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.hydrolate = {
    info: function() {return `Normal-type moves become Water-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.pyrolate = {
    info: function() {return `Normal-type moves become Fire-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.chrysilate = {
    info: function() {return `Normal-type moves become Bug-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.galvanize = {
    info: function() {return `Normal-type moves become Electric-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.gloomilate = {
    info: function() {return `Normal-type moves become Dark-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.espilate = {
    info: function() {return `Normal-type moves become Psychic-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.aerilate = {
    info: function() {return `Normal-type moves become Flying-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.pixilate = {
    info: function() {return `Normal-type moves become Fairy-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.verdify = {
    info: function() {return `Normal-type moves become Grass-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}


for (const i in ability){
    ability[i].id = i
}