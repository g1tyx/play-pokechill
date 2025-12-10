const areas = {}



//area 1 rs = rare pkmn
//area 2 rs = single target high base stats pkmn
//area 3 rs = starter
//area 4 rs = pseudo-legendary


const rotationWildMax = 8;

const wildAreaLevel1 = 10
const wildAreaLevel2 = 30
const wildAreaLevel3 = 50
const wildAreaLevel4 = 70
const wildAreaLevel5 = 90

const wildRareItemsFire = [item.charcoal, item.occaBerry]
const wildRareItemsWater = [item.mysticWater, item.passhoBerry]
const wildRareItemsElectric = [item.magnet, item.wacanBerry]
const wildRareItemsGrass = [item.miracleSeed, item.rindoBerry]
const wildRareItemsIce = [item.neverMeltIce, item.yacheBerry]
const wildRareItemsFighting = [item.blackBelt, item.chopleBerry]
const wildRareItemsPoison = [item.poisonBarb, item.kebiaBerry]
const wildRareItemsGround = [item.softSand, item.shucaBerry]
const wildRareItemsFlying = [item.sharpBeak, item.cobaBerry]
const wildRareItemsPsychic = [item.twistedSpoon, item.payapaBerry]
const wildRareItemsBug = [item.silverPowder, item.tangaBerry]
const wildRareItemsRock = [item.hardStone, item.chartiBerry]
const wildRareItemsGhost = [item.spellTag, item.kasibBerry]
const wildRareItemsDragon = [item.dragonFang, item.habanBerry]
const wildRareItemsDark = [item.blackGlasses, item.colburBerry]
const wildRareItemsSteel = [item.metalCoat, item.babiriBerry]
const wildRareItemsNormal = [item.silkScarf]
const wildRareItemsFairy = [item.fairyFeather]
//rotation 1
areas.verdantForest = {
    rotation : 1,
    level : wildAreaLevel1,
    type: `wild`,
    background : `forest`,
    icon: pkmn.caterpie,
    spawns: {
        common : [pkmn.caterpie,pkmn.exeggcute, pkmn.scatterbug],
        uncommon : [pkmn.sudowoodo],
        rare : [pkmn.scyther]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsBug
    }
}

areas.foggyGraveyard = {
    unlock : function() {return false},
    rotation : 1,
    level : wildAreaLevel2,
    type: `wild`,
    background : `night`,
    icon: pkmn.gastly,
    spawns: {
        common : [pkmn.gastly,pkmn.pumpkaboo, pkmn.phantump],
        uncommon : [pkmn.yamask],
        rare : [pkmn.spiritomb]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGhost
    }
}

areas.woodlandConcert = {
    rotation : 1,
    level : wildAreaLevel3,
    type: `wild`,
    background : `forest`,
    icon: pkmn.chatot,
    spawns: {
        common : [pkmn.kricketot,pkmn.whismur, pkmn.chingling],
        uncommon : [pkmn.chatot],
        rare : [pkmn.grookey]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGrass
    }
}

areas.mantleCore = {
    rotation : 1,
    level : wildAreaLevel4,
    type: `wild`,
    background : `cave`,
    icon: pkmn.larvitar,
    spawns: {
        common : [pkmn.onix,pkmn.roggenrola, pkmn.geodude],
        uncommon : [pkmn.tyrunt],
        rare : [pkmn.larvitar]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsRock
    }
}

//rotation 2
areas.fidoPark = {
    rotation : 2,
    level : wildAreaLevel1,
    type: `wild`,
    background : `town`,
    icon: pkmn.rockruff,
    spawns: {
        common : [pkmn.rockruff,pkmn.snubbull, pkmn.electrike],
        uncommon : [pkmn.furfrou],
        rare : [pkmn.hisuianGrowlithe]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsNormal
    }
}

areas.citySewers = {
    rotation : 2,
    level : wildAreaLevel2,
    type: `wild`,
    background : `plant`,
    icon: pkmn.trubbish,
    spawns: {
        common : [pkmn.rattata,pkmn.ekans, pkmn.trubbish],
        uncommon : [pkmn.alolanGrimer],
        rare : [pkmn.sandile]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsPoison
    }
}

areas.activeVolcano = {
    rotation : 2,
    level : wildAreaLevel3,
    type: `wild`,
    background : `volcano`,
    icon: pkmn.slugma,
    spawns: {
        common : [pkmn.slugma,pkmn.salandit, pkmn.rolycoly],
        uncommon : [pkmn.torkoal],
        rare : [pkmn.charmander]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFire
    }
} 

areas.powerPlant = {
    rotation : 2,
    level : wildAreaLevel4,
    type: `wild`,
    background : `lab`,
    icon: pkmn.magnemite,
    spawns: {
        common : [pkmn.magnemite,pkmn.voltorb, pkmn.klink],
        uncommon : [pkmn.elekid],
        rare : [pkmn.rotom]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsElectric
    }
}

//rotation 3
areas.quietMeadow = {
    rotation : 3,
    level : wildAreaLevel1,
    type: `wild`,
    background : `night`,
    icon: pkmn.seedot,
    spawns: {
        common : [pkmn.seedot,pkmn.oddish, pkmn.joltik],
        uncommon : [pkmn.misdreavus],
        rare : [pkmn.espurr]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsDark
    }
}


areas.urbanWalkway = {
    rotation : 3,
    level : wildAreaLevel2,
    type: `wild`,
    background : `town`,
    icon: pkmn.pichu,
    spawns: {
        common : [pkmn.lillipup,pkmn.drifloon, pkmn.pidove],
        uncommon : [pkmn.pichu],
        rare : [pkmn.eevee]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFairy
    }
}


areas.sandyDunes = {
    rotation : 3,
    level : wildAreaLevel3,
    type: `wild`,
    background : `desert`,
    icon: pkmn.cacnea,
    spawns: {
        common : [pkmn.cacnea,pkmn.sandshrew, pkmn.silicobra],
        uncommon : [pkmn.trapinch],
        rare : [pkmn.fennekin]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGround
    }
}


areas.sunkenShip = {
    rotation : 3,
    level : wildAreaLevel4,
    type: `wild`,
    background : `sea`,
    icon: pkmn.dhelmise,
    spawns: {
        common : [pkmn.tentacool,pkmn.magikarp, pkmn.mantyke],
        uncommon : [pkmn.dhelmise],
        rare : [pkmn.bagon]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsSteel
    }
}

//rotation 4
areas.offshoreRigger = {
    rotation : 4,
    level : wildAreaLevel1,
    type: `wild`,
    background : `sea`,
    icon: pkmn.wingull,
    spawns: {
        common : [pkmn.wingull,pkmn.chinchou, pkmn.arrokuda],
        uncommon : [pkmn.carvanha],
        rare : [pkmn.cramorant]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFlying
    }
}

areas.safariZone = {
    rotation : 4,
    level : wildAreaLevel2,
    type: `wild`,
    background : `mountain`,
    icon: pkmn.wooper,
    spawns: {
        common : [pkmn.wooper,pkmn.doduo, pkmn.oddish],
        uncommon : [pkmn.tauros],
        rare : [pkmn.kangaskhan]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsNormal
    }
}

areas.coolBeach = {
    rotation : 4,
    level : wildAreaLevel3,
    type: `wild`,
    background : `beach`,
    icon: pkmn.pyukumuku,
    spawns: {
        common : [pkmn.starly,pkmn.pyukumuku, pkmn.binacle],
        uncommon : [pkmn.slowpoke],
        rare : [pkmn.squirtle]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsWater
    }
}

areas.computeringLab = {
    rotation : 4,
    level : wildAreaLevel4,
    type: `wild`,
    background : `lab`,
    icon: pkmn.porygon,
    spawns: {
        common : [pkmn.abra,pkmn.dedenne, pkmn.helioptile],
        uncommon : [pkmn.porygon],
        rare : [pkmn.beldum]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsPsychic
    }
}


//rotation 5
areas.gemstoneCavern = {
    rotation : 5,
    level : wildAreaLevel1,
    type: `wild`,
    background : `cave`,
    icon: pkmn.carbink,
    spawns: {
        common : [pkmn.machop,pkmn.minior, pkmn.arrokuda],
        uncommon : [pkmn.carbink],
        rare : [pkmn.sableye]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsRock
    }
}

areas.frozenLake = {
    rotation : 5,
    level : wildAreaLevel2,
    type: `wild`,
    background : `snow`,
    icon: pkmn.vanillite,
    spawns: {
        common : [pkmn.vanillite,pkmn.cubchoo, pkmn.swinub],
        uncommon : [pkmn.cryogonal],
        rare : [pkmn.alolanVulpix]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsIce
    }
}

areas.abandonedManor = {
    rotation : 5,
    level : wildAreaLevel3,
    type: `wild`,
    background : `night`,
    icon: pkmn.litwick,
    spawns: {
        common : [pkmn.litwick,pkmn.rattata, pkmn.gothita],
        uncommon : [pkmn.banette],
        rare : [pkmn.litten]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGhost
    }
}

areas.dracoLair = {
    rotation : 5,
    level : wildAreaLevel4,
    type: `wild`,
    background : `cave`,
    icon: pkmn.gible,
    spawns: {
        common : [pkmn.shellos,pkmn.bronzor, pkmn.croagunk],
        uncommon : [pkmn.noibat],
        rare : [pkmn.gible]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsDragon
    }
}

//rotation 6
areas.mountainTrail = {
    rotation : 6,
    level : wildAreaLevel1,
    type: `wild`,
    background : `mountain`,
    icon: pkmn.mudbray,
    spawns: {
        common : [pkmn.patrat,pkmn.deerling, pkmn.mudbray],
        uncommon : [pkmn.mawile],
        rare : [pkmn.rockruff]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsRock
    }
}


areas.teaParlor = {
    rotation : 6,
    level : wildAreaLevel2,
    type: `wild`,
    background : `town`,
    icon: pkmn.sinistea,
    spawns: {
        common : [pkmn.swirlix,pkmn.sinistea, pkmn.milcery],
        uncommon : [pkmn.combee],
        rare : [pkmn.applin]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFairy
    }
}

areas.pokemonDojo = {
    rotation : 6,
    level : wildAreaLevel3,
    type: `wild`,
    background : `gym`,
    icon: pkmn.makuhita,
    spawns: {
        common : [pkmn.makuhita,pkmn.tyrogue, pkmn.mienfoo],
        uncommon : [pkmn.riolu],
        rare : [pkmn.scorbunny]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFighting
    }
}

areas.skyHigh = {
    rotation : 6,
    level : wildAreaLevel4,
    type: `wild`,
    background : `sea`,
    icon: pkmn.swablu,
    spawns: {
        common : [pkmn.castform,pkmn.fletchling, pkmn.rookidee],
        uncommon : [pkmn.swablu],
        rare : [pkmn.dratini]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFlying
    }
}

//rotation 7
areas.dankCave = {
    rotation : 7,
    level : wildAreaLevel1,
    type: `wild`,
    background : `cave`,
    icon: pkmn.seviper,
    spawns: {
        common : [pkmn.zubat,pkmn.alolanRattata, pkmn.alolanMeowth],
        uncommon : [pkmn.seviper],
        rare : [pkmn.sneasel]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsDark
    }
}


areas.forestShrine = {
    rotation : 7,
    level : wildAreaLevel2,
    type: `wild`,
    background : `forest`,
    icon: pkmn.chingling,
    spawns: {
        common : [pkmn.chingling,pkmn.solrock, pkmn.lunatone],
        uncommon : [pkmn.girafarig],
        rare : [pkmn.ralts]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsPsychic
    }
}

areas.streetCircus = {
    rotation : 7,
    level : wildAreaLevel3,
    type: `wild`,
    background : `town`,
    icon: pkmn.popplio,
    spawns: {
        common : [pkmn.mimejr,pkmn.wynaut, pkmn.igglybuff],
        uncommon : [pkmn.togepi],
        rare : [pkmn.popplio]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFairy
    }
}

areas.weaponsFacility = {
    rotation : 7,
    level : wildAreaLevel4,
    type: `wild`,
    background : `lab`,
    icon: pkmn.honedge,
    spawns: {
        common : [pkmn.kabuto,pkmn.koffing, pkmn.honedge],
        uncommon : [pkmn.ditto],
        rare : [pkmn.dreepy]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsSteel
    }
}

//rotation 8
areas.scorchingBadlands = {
    rotation : 8,
    level : wildAreaLevel1,
    type: `wild`,
    background : `desert`,
    icon: pkmn.hippopotas,
    spawns: {
        common : [pkmn.hippopotas,pkmn.sandile, pkmn.scraggy],
        uncommon : [pkmn.archen],
        rare : [pkmn.larvesta]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGround
    }
}


areas.lavaLake = {
    rotation : 8,
    level : wildAreaLevel2,
    type: `wild`,
    background : `volcano`,
    icon: pkmn.sizzlipede,
    spawns: {
        common : [pkmn.slugma,pkmn.sizzlipede, pkmn.houndour],
        uncommon : [pkmn.magby],
        rare : [pkmn.camerupt]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFire
    }
}

areas.crashingSeaside = {
    rotation : 8,
    level : wildAreaLevel3,
    type: `wild`,
    background : `beach`,
    icon: pkmn.frillish,
    spawns: {
        common : [pkmn.bruxish,pkmn.mareanie, pkmn.frillish],
        uncommon : [pkmn.skrelp],
        rare : [pkmn.mudkip]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsWater
    }
}

areas.strangeSpace = {
    rotation : 8,
    level : wildAreaLevel4,
    type: `wild`,
    background : `space`,
    icon: pkmn.hatenna,
    spawns: {
        common : [pkmn.elgyem,pkmn.cleffa, pkmn.lileep],
        uncommon : [pkmn.hatenna],
        rare : [pkmn.goomy]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsDragon
    }
}


/*






























areas.frozenPlains = {
    type: `wild`,
    background : `snow`,
    tier : 2,
    icon: pkmn.swinub,
    spawns: {
        common : [pkmn.swinub,pkmn.snorunt, pkmn.cubchoo],
        uncommon : [pkmn.sneasel],
        rare : [pkmn.alolanVulpix]
    },
    drops: {
        common : [item.mysteryEgg],
    }
}








*/









const rotationDungeonMax = 3;


//rotation 1
areas.sinnohUndergroundI = {
    rotation : 1,
    type: `dungeon`,
    background : `cave`,
    level : wildAreaLevel2,
    unlockDescription : `🔒 Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    icon: item.waterStone,
    spawns: {
        common : [pkmn.carbink,pkmn.boldore, pkmn.shieldon, pkmn.roggenrola],
    },
    drops: {
        common : [item.nothing],
        rare : [item.waterStone, item.thunderStone, item.sunStone, item.linkStone]
    },
}

areas.beginnerTrainingI = {
    rotation : 1,
    type: `dungeon`,
    background : `gym`,
    level : wildAreaLevel2,
    unlockDescription : `🔒 Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.makuhita,pkmn.tyrogue, pkmn.meditite, pkmn.riolu],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.quickAttackTm, item.emberTm, item.nuzzleTm, item.mudSlapTm, item.bulletPunchTm, item.peckTm]
    },
}

areas.advancedTrainingI = {
    rotation : 1,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Misty in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderMisty.defeated },
    level : wildAreaLevel3,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.hariyama,pkmn.hitmonchan, pkmn.medicham, pkmn.throh],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.swiftTm, item.incinerateTm, item.thunderPunchTm, item.bulldozeTm, item.metalClawTm, item.acrobaticsTm]
    },
}

areas.expertTrainingI = {
    rotation : 1,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Phoebe in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderPhoebe.defeated },
    level : wildAreaLevel4,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.lucario,pkmn.machamp, pkmn.hawlucha, pkmn.mienshao],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.strengthTm, item.flamethrowerTm, item.thunderboltTm, item.earthquakeTm, item.flashCannonTm, item.flyTm],
    },
}

areas.victoryRoadI = {
    rotation : 1,
    type: `dungeon`,
    background : `town`,
    level : wildAreaLevel5,
    unlockDescription : `🔒 Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    icon: item.lightClay,
    spawns: {
        common : [pkmn.nidoking,pkmn.steelix, pkmn.crobat, pkmn.rhyperior],
    },
    drops: {
        common : [item.nothing],
        rare : [item.lightClay]
    },
}


//rotation 2

areas.sinnohUndergroundII = {
    rotation : 2,
    type: `dungeon`,
    background : `cave`,
    level : wildAreaLevel2,
    unlockDescription : `🔒 Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    icon: item.leafStone,
    spawns: {
        common : [pkmn.carbink,pkmn.boldore, pkmn.shieldon, pkmn.roggenrola],
    },
    drops: {
        common : [item.nothing],
        rare : [item.ovalStone, item.moonStone, item.leafStone, item.iceStone]
    },
}

areas.beginnerTrainingII = {
    rotation : 2,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    level : wildAreaLevel2,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.makuhita,pkmn.tyrogue, pkmn.meditite, pkmn.riolu],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.acidTm, item.iceShardTm, item.twineedleTm, item.waterGunTm, item.leafageTm, item.rockSmashTm]
    },
}

areas.advancedTrainingII = {
    rotation : 2,
    type: `dungeon`,
    background : `gym`,
    level : wildAreaLevel3,
    unlockDescription : `🔒 Defeat Gym Leader Misty in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderMisty.defeated },
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.hariyama,pkmn.hitmonchan, pkmn.medicham, pkmn.throh],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.crossPoisonTm, item.avalancheTm, item.bugBiteTm, item.waterPulseTm, item.magicalLeafTm, item.forcePalmTm]
    },
}

areas.expertTrainingII = {
    rotation : 2,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Phoebe in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderPhoebe.defeated },
    level : wildAreaLevel4,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.lucario,pkmn.machamp, pkmn.hawlucha, pkmn.mienshao],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.sludgeBombTm, item.iceBeamTm, item.bugBuzzTm, item.aquaTailTm, item.leafBladeTm, item.auraSphereTm]
    },
}

areas.victoryRoadII = {
    rotation : 2,
    type: `dungeon`,
    background : `town`,
    level : wildAreaLevel5,
    unlockDescription : `🔒 Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    icon: item.mentalHerb,
    spawns: {
        common : [pkmn.golem,pkmn.whiscash, pkmn.aggron, pkmn.exploud],
    },
    drops: {
        common : [item.nothing],
        rare : [item.mentalHerb]
    },
}

//rotation 3

areas.sinnohUndergroundIII = {
    rotation : 3,
    type: `dungeon`,
    background : `cave`,
    level : wildAreaLevel2,
    unlockDescription : `🔒 Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    icon: item.fireStone,
    spawns: {
        common : [pkmn.carbink,pkmn.boldore, pkmn.shieldon, pkmn.roggenrola],
    },
    drops: {
        common : [item.nothing],
        rare : [item.fireStone, item.duskStone, item.dawnStone, item.shinyStone]
    },
}

areas.beginnerTrainingIII = {
    rotation : 3,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    level : wildAreaLevel2,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.makuhita,pkmn.tyrogue, pkmn.meditite, pkmn.riolu],
    },
    drops: {
        common : [item.nothing],
        uncommon : [ item.confusionTm, item.rockThrowTm, item.lickTm, item.twisterTm, item.pursuitTm, item.disarmingVoiceTm]
    },
}

areas.advancedTrainingIII = {
    rotation : 3,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Misty in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderMisty.defeated },
    level : wildAreaLevel3,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.hariyama,pkmn.hitmonchan, pkmn.medicham, pkmn.throh],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.psychoCutTm, item.rockSlideTm, item.hexTm, item.dragonTailTm, item.biteTm, item.dazzlingGleamTm]
    },
}

areas.expertTrainingIII = {
    rotation : 3,
    type: `dungeon`,
    background : `gym`,
    level : wildAreaLevel4,
    unlockDescription : `🔒 Defeat Gym Leader Phoebe in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderPhoebe.defeated },
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.lucario,pkmn.machamp, pkmn.hawlucha, pkmn.mienshao],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.psychicTm, item.powerGemTm, item.shadowBallTm, item.dragonRushTm, item.darkPulseTm, item.playRoughTm]
    },
}


areas.victoryRoadIII = {
    rotation : 3,
    type: `dungeon`,
    background : `town`,
    level : wildAreaLevel5,
    unlockDescription : `🔒 Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    icon: item.eviolite,
    spawns: {
        common : [pkmn.magnezone,pkmn.gyarados, pkmn.azumarill, pkmn.machamp],
    },
    drops: {
        common : [item.nothing],
        rare : [item.eviolite]
    },
}

//        common : [item.strengthTm, item.flamethrowerTm, item.thunderboltTm, item.earthquakeTm, item.flashCannonTm, item.flyTm, item.sludgeBombTm, item.iceBeamTm, item.bugBuzzTm, item.aquaTailTm, item.leafBladeTm, item.auraSphereTm, item.psychicTm, item.powerGemTm, item.phantomForceTm, item.dragonRushTm, item.darkPulseTm, item.playRoughTm]














const rotationEventMax = 3;

areas.alphaRuins = {
    rotation: 1,
    type: `event`,
    background : `cave`,
    level : wildAreaLevel1,
    icon: pkmn.unownA,
    spawns: {
        common : [pkmn.unownA,pkmn.unownB, pkmn.unownC, pkmn.unownD, pkmn.unownE, pkmn.unownF, pkmn.unownG, pkmn.unownH, pkmn.unownI, pkmn.unownJ, pkmn.unownK, pkmn.unownL, pkmn.unownM, pkmn.unownN, pkmn.unownO, pkmn.unownP, pkmn.unownQ, pkmn.unownR, pkmn.unownS, pkmn.unownT, pkmn.unownU, pkmn.unownV, pkmn.unownW, pkmn.unownX, pkmn.unownY, pkmn.unownZ],
        rare : [pkmn.unownQuestion, pkmn.unownExclamation]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.twistedSpoon],
    },
}

areas.thunderSummit = {
    rotation: 1,
    type: `event`,
    background : `mountain`,
    level : 90,
    icon: pkmn.luxray,
    uncatchable: true,
    unlockDescription : `🔒 Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.luxray,pkmn.alolanGolem,pkmn.electivire,pkmn.boltund],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.thunderousRock]
    },
}

areas.eventZapdos = {
    rotation: 1,
    type: `event`,
    name: `Zapdos Lair`,
    background : `cave`,
    icon: pkmn.zapdos,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.thunderousRock.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/thunderousRock.png"> Thunderous Rock to enter`,
    unlockRequirement : function() { return item.thunderousRock.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.zapdos,
        slot1Moves : [move.thunderbolt.id,move.discharge.id, move.hurricane.id, move.fly.id],
    },
    reward : [pkmn.zapdos]
}

areas.articSummit = {
    rotation: 1,
    type: `event`,
    background : `snow`,
    uncatchable: true,
    unlockDescription : `🔒 Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    level : 90,
    icon: pkmn.beartic,
    spawns: {
        common : [pkmn.beartic,pkmn.avalugg,pkmn.walrein,pkmn.vanilluxe],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.articRock]
    },
}

areas.eventArticuno = {
    rotation: 1,
    type: `event`,
    name: `Articuno Den`,
    background : `cave`,
    icon: pkmn.articuno,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.articRock.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/articRock.png"> Artic Rock to enter`,
    unlockRequirement : function() { return item.articRock.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.articuno,
        slot1Moves : [move.blizzard.id,move.iceBeam.id, move.hurricane.id, move.fly.id],
    },
    reward : [pkmn.articuno]
}

areas.fierySummit = {
    rotation: 1,
    type: `event`,
    background : `volcano`,
    level : 90,
    uncatchable: true,
    unlockDescription : `🔒 Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    icon: pkmn.houndoom,
    spawns: {
        common : [pkmn.houndoom,pkmn.darmanitan,pkmn.magmortar,pkmn.alolanMarowak],
    },
    drops: {
        common : [item.nothing],
        rare : [item.fieryRock]
    },
}

areas.eventMoltres = {
    rotation: 1,
    type: `event`,
    name: `Moltres Roost`,
    background : `cave`,
    icon: pkmn.moltres,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.fieryRock.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/fieryRock.png"> Fiery Rock to enter`,
    unlockRequirement : function() { return item.fieryRock.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.moltres,
        slot1Moves : [move.fireBlast.id,move.heatWave.id, move.hurricane.id, move.fly.id],
    },
    reward : [pkmn.moltres]
}




//rotation 2

areas.cosplayConvention = {
    rotation: 2,
    type: `event`,
    background : `plant`,
    level : wildAreaLevel1,
    icon: pkmn.pikachuBelle,
    spawns: {
        common : [pkmn.pichu],
        rare : [pkmn.pikachuBelle, pkmn.pikachuLibre, pkmn.pikachuPhd, pkmn.pikachuPopstar, pkmn.pikachuRockstar]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.thunderStone],
    },
}

areas.primitiveGrove = {
    rotation: 2,
    type: `event`,
    background : `forest`,
    level : 90,
    icon: pkmn.yanmega,
    uncatchable: true,
    unlockDescription : `🔒 Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.kabutops,pkmn.aerodactyl,pkmn.rampardos,pkmn.yanmega],
    },
    drops: {
        common : [item.nothing],
        rare : [item.ancientOrchid]
    },
}

areas.eventGreatTusk = {
    rotation: 2,
    type: `event`,
    name: `Great Tusk Revival`,
    background : `cave`,
    icon: pkmn.greatTusk,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.greatTusk,
        slot1Moves : [move.earthquake.id,move.bulkUp.id, move.focusBlast.id, move.earthPower.id],
    },
    reward : [pkmn.greatTusk]
}

areas.eventScreamTail = {
    rotation: 2,
    type: `event`,
    name: `Screaming Tail Revival`,
    background : `cave`,
    icon: pkmn.screamTail,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.screamTail,
        slot1Moves : [move.moonblast.id,move.psychic.id, move.hyperVoice.id, move.disarmingVoice.id],
    },
    reward : [pkmn.screamTail]
}

areas.eventBruteBonnet = {
    rotation: 2,
    type: `event`,
    name: `Brute Bonnet Revival`,
    background : `cave`,
    icon: pkmn.bruteBonnet,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.bruteBonnet,
        slot1Moves : [move.spore.id,move.seedBomb.id, move.solarBeam.id, move.darkPulse.id],
    },
    reward : [pkmn.bruteBonnet]
}

areas.eventFlutterMane = {
    rotation: 2,
    type: `event`,
    name: `Flutter Mane Revival`,
    background : `cave`,
    icon: pkmn.flutterMane,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.flutterMane,
        slot1Moves : [move.nastyPlot.id,move.shadowBall.id, move.moonblast.id, move.babydollEyes.id],
    },
    reward : [pkmn.flutterMane]
}

areas.eventSlitherWing = {
    rotation: 2,
    type: `event`,
    name: `Slither Wing Revival`,
    background : `cave`,
    icon: pkmn.slitherWing,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.slitherWing,
        slot1Moves : [move.stringShot.id,move.bugBuzz.id, move.signalBeam.id, move.fly.id],
    },
    reward : [pkmn.slitherWing]
}

areas.eventSandyShocks = {
    rotation: 2,
    type: `event`,
    name: `Sandy Shocks Revival`,
    background : `cave`,
    icon: pkmn.sandyShocks,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.sandyShocks,
        slot1Moves : [move.earthquake.id,move.thunderbolt.id, move.discharge.id, move.electroWeb.id],
    },
    reward : [pkmn.sandyShocks]
}

areas.eventRoaringMoon = {
    rotation: 2,
    type: `event`,
    name: `Roaring Moon Revival`,
    background : `cave`,
    icon: pkmn.roaringMoon,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.ancientOrchid.got-=2},
    unlockDescription : `🔒 Requires two <img src="img/items/ancientOrchid.png"> Ancient Orchids to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>1 },
    level : 90,
    team : {
        slot1 : pkmn.roaringMoon,
        slot1Moves : [move.dragonDance.id,move.fly.id, move.dragonRush.id, move.crunch.id],
    },
    reward : [pkmn.roaringMoon]
}



//rotation 3

areas.exoticPond = {
    rotation: 3,
    type: `event`,
    background : `sea`,
    level : wildAreaLevel1,
    icon: pkmn.magikarp,
    spawns: {
        common : [pkmn.magikarp],
        rare : [pkmn.magikarpKoi, pkmn.magikarpRegal, pkmn.magikarpSakura, pkmn.magikarpSkelly, pkmn.magikarpSoar, pkmn.magikarpTiger]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.mysticWater],
    },
}

areas.ancientTomb = {
    rotation: 3,
    type: `event`,
    background : `desert`,
    level : 90,
    icon: pkmn.rhyperior,
    uncatchable: true,
    unlockDescription : `🔒 Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.tyranitar,pkmn.rhyperior,pkmn.golem,pkmn.probopass],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.ancientKeystone]
    },
}

areas.eventRegirock = {
    rotation: 3,
    type: `event`,
    name: `Regirock Tomb`,
    background : `cave`,
    icon: pkmn.regirock,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.ancientKeystone.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/ancientKeystone.png"> Ancient Keystone to enter`,
    unlockRequirement : function() { return item.ancientKeystone.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.regirock,
        slot1Moves : [move.zapCannon.id,move.ancientPower.id, move.earthquake.id, move.stoneEdge.id],
    },
    reward : [pkmn.regirock]
}

areas.steelTomb = {
    rotation: 3,
    type: `event`,
    background : `mountain`,
    level : 90,
    icon: pkmn.metagross,
    uncatchable: true,
    unlockDescription : `🔒 Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.metagross,pkmn.bastiodon,pkmn.excadrill,pkmn.durant],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.steelKeystone]
    },
}

areas.eventRegisteel = {
    rotation: 3,
    type: `event`,
    name: `Registeel Tomb`,
    background : `cave`,
    icon: pkmn.registeel,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.steelKeystone.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/steelKeystone.png"> Steel Keystone to enter`,
    unlockRequirement : function() { return item.steelKeystone.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.registeel,
        slot1Moves : [move.zapCannon.id,move.ancientPower.id, move.ironHead.id, move.rockPolish.id],
    },
    reward : [pkmn.registeel]
}


areas.frozenTomb = {
    rotation: 3,
    type: `event`,
    background : `snow`,
    level : 90,
    icon: pkmn.mamoswine,
    uncatchable: true,
    unlockDescription : `🔒 Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.mamoswine,pkmn.abomasnow,pkmn.avalugg,pkmn.cryogonal],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.frozenKeystone]
    },
}

areas.eventRegice = {
    rotation: 3,
    type: `event`,
    name: `Regice Tomb`,
    background : `cave`,
    icon: pkmn.regice,
    trainer: true,
    encounter: true,
    difficulty: 25,
    encounterEffect : function() {item.frozenKeystone.got--},
    unlockDescription : `🔒 Requires a <img src="img/items/frozenKeystone.png"> Frozen Keystone to enter`,
    unlockRequirement : function() { return item.frozenKeystone.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.regice,
        slot1Moves : [move.zapCannon.id,move.ancientPower.id, move.iceBeam.id, move.blizzard.id],
    },
    reward : [pkmn.regice]
}















//vs set----------------------------------------------------
areas.vsYounsterBilly = {
    name: `Youngster Billy`,
    background : `gym`,
    sprite : `youngster`,
    trainer: true,
    type: `vs`,
    level : 5,
    team : {
        slot1 : pkmn.rattata,
        slot1Moves : [move.quickAttack.id,move.leer.id],
        slot2 : pkmn.shinx,
        slot2Moves : [move.nuzzle.id, move.quickAttack.id],
        slot3 : pkmn.starly,
        slot3Moves : [move.peck.id],
    },
    reward : [pkmn.chewtle]
}

areas.vsAromaLadyCatherine = {
    name: `Aroma Lady Jana`,
    background : `gym`,
    sprite : `aromaLady`,
    trainer: true,
    type: `vs`,
    level : 10,
    team : {
        slot1 : pkmn.budew,
        slot1Moves : [move.vineWhip.id,move.babydollEyes.id],
        slot2 : pkmn.oddish,
        slot2Moves : [move.leafage.id, move.acid.id],
        slot3 : pkmn.combee,
        slot3Moves : [move.struggleBug.id, move.leer.id],
        slot4 : pkmn.happiny,
        slot4Moves : [move.fakeTears.id, move.disarmingVoice.id],
    },
    reward : [pkmn.riolu]
}

areas.vsBugCatcherMilo = {
    name: `Bug Catcher Milo`,
    background : `gym`,
    sprite : `bugCatcher`,
    trainer: true,
    type: `vs`,
    level : 15,
    team : {
        slot1 : pkmn.volbeat,
        slot1Moves : [move.pounce.id,move.tackle.id],
        slot2 : pkmn.paras,
        slot2Moves : [move.leafage.id, move.poisonPowder.id],
        slot3 : pkmn.beautifly,
        slot3Moves : [move.gust.id, move.playNice.id],
        slot4 : pkmn.nincada,
        slot4Moves : [move.furyCutter.id, move.screech.id],
        slot5 : pkmn.pinsir,
        slot5Moves : [move.twineedle.id, move.bugBuzz.id],
    },
    reward : [item.chartiBerry]
}

areas.vsGymLeaderBrock = {
    name: `Gym Leader Brock`,
    background : `gym`,
    sprite : `brock`,
    trainer: true,
    type: `vs`,
    level : 20,
    team : {
        slot1 : pkmn.onix,
        slot1Moves : [move.rockThrow.id,move.mudShot.id],
        slot2 : pkmn.geodude,
        slot2Moves : [move.rollout.id, move.quickAttack.id],
        slot3 : pkmn.kabuto,
        slot3Moves : [move.ancientPower.id, move.aquaJet.id],
        slot4 : pkmn.omanyte,
        slot4Moves : [move.smackDown.id, move.waterGun.id],
        slot5 : pkmn.rhyhorn,
        slot5Moves : [move.mudSlap.id, move.rockThrow.id],
        slot6 : pkmn.aerodactyl,
        slot6Moves : [move.smackDown.id, move.gust.id],
    },
    reward : [item.hardStone]
}

areas.vsBlackBeltRyan = {
    name: `Black Belt Ryan`,
    background : `gym`,
    sprite : `blackBelt`,
    trainer: true,
    type: `vs`,
    level : 25,
    team : {
        slot1 : pkmn.hitmonchan,
        slot1Moves : [move.machPunk.id,move.bulkUp.id, move.rockSmash.id],
        slot2 : pkmn.poliwrath,
        slot2Moves : [move.aquaJet.id, move.vacuumWave.id, move.machPunk.id],
        slot3 : pkmn.primeape,
        slot3Moves : [move.dizzyPunch.id, move.powerupPunch.id, move.swagger.id],
        slot4 : pkmn.breloom,
        slot4Moves : [move.machPunk.id, move.vacuumWave.id, move.thunderPunch.id],
        slot5 : pkmn.sawk,
        slot5Moves : [move.machPunk.id, move.bulkUp.id, move.firePunch.id],
        slot6 : pkmn.machoke,
        slot6Moves : [move.rockSmash.id, move.brickBreak.id, move.machPunk.id],
    },
    reward : [pkmn.makuhita]
}

areas.vsSchoolKidAaron = {
    name: `School Kid Aaron`,
    background : `gym`,
    sprite : `schoolKid`,
    trainer: true,
    type: `vs`,
    level : 30,
    team : {
        slot1 : pkmn.mrmime,
        slot1Moves : [move.confusion.id,move.futureSight.id, move.psybeam.id],
        slot2 : pkmn.porygon2,
        slot2Moves : [move.tackle.id, move.swagger.id, move.triAttack.id],
        slot3 : pkmn.ledian,
        slot3Moves : [move.quickAttack.id, move.powerupPunch.id, move.swagger.id],
        slot4 : pkmn.herdier,
        slot4Moves : [move.leer.id, move.strength.id, move.stomp.id],
        slot5 : pkmn.kirlia,
        slot5Moves : [move.psybeam.id, move.alluringVoice.id, move.fairyWind.id],
        slot6 : pkmn.kadabra,
        slot6Moves : [move.calmMind.id, move.psybeam.id, move.confusion.id],
    },
    reward : [pkmn.abra]
}

areas.vsRocketGrunt1 = {
    name: `Rocket Grunt`,
    background : `gym`,
    sprite : `rocketGruntM`,
    trainer: true,
    type: `vs`,
    level : 35,
    team : {
        slot1 : pkmn.muk,
        slot1Moves : [move.sludge.id,move.acid.id, move.toxic.id],
        slot2 : pkmn.fearow,
        slot2Moves : [move.featherDance.id, move.swagger.id, move.skyDrop.id],
        slot3 : pkmn.raticate,
        slot3Moves : [move.hyperVoice.id, move.stomp.id, move.swagger.id],
        slot4 : pkmn.hypno,
        slot4Moves : [move.extrasensory.id, move.futureSight.id, move.amnesia.id],
        slot5 : pkmn.golbat,
        slot5Moves : [move.toxic.id, move.poisonFang.id, move.acrobatics.id],
        slot6 : pkmn.haunter,
        slot6Moves : [move.hex.id, move.ominousWind.id, move.psychic.id],
    },
    reward : [pkmn.gastly]
}

areas.vsGymLeaderMisty = {
    name: `Gym Leader Misty`,
    background : `gym`,
    sprite : `misty`,
    trainer: true,
    type: `vs`,
    level : 40,
    team : {
        slot1 : pkmn.golduck,
        slot1Moves : [move.aquaJet.id,move.psybeam.id, move.thunderWave.id],
        slot2 : pkmn.quagsire,
        slot2Moves : [move.waterGun.id, move.dig.id, move.mudShot.id],
        slot3 : pkmn.lanturn,
        slot3Moves : [move.thunderbolt.id, move.chargeBeam.id, move.waterGun.id],
        slot4 : pkmn.floatzel,
        slot4Moves : [move.aquaJet.id, move.futureSight.id, move.chillingWater.id],
        slot5 : pkmn.lapras,
        slot5Moves : [move.waterfall.id, move.waterPulse.id, move.psybeam.id],
        slot6 : pkmn.starmie,
        slot6Moves : [move.psychic.id, move.auroraBeam.id, move.waterPulse.id],
    },
    reward : [item.mysticWater]
}

areas.vsSwimmerDan = {
    name: `Swimmer Dan`,
    background : `gym`,
    sprite : `swimmer`,
    trainer: true,
    type: `vs`,
    level : 45,
    team : {
        slot1 : pkmn.wishiwashi,
        slot1Moves : [move.aquaJet.id,move.zenHeadbut.id, move.waterGun.id],
        slot2 : pkmn.toxapex,
        slot2Moves : [move.waterfall.id, move.toxic.id, move.crossPoison.id],
        slot3 : pkmn.dewgong,
        slot3Moves : [move.iceBeam.id, move.auroraBeam.id, move.waterfall.id],
        slot4 : pkmn.marowak,
        slot4Moves : [move.bulldoze.id, move.mudShot.id, move.rototiller.id],
        slot5 : pkmn.cloyster,
        slot5Moves : [move.iceShard.id, move.surf.id, move.waterGun.id],
        slot6 : pkmn.alolanRaichu,
        slot6Moves : [move.psychic.id, move.zenHeadbut.id, move.surf.id],
    },
    reward : [pkmn.magikarp]
}

areas.vsVeteranToshiro = {
    name: `Veteran Toshiro`,
    background : `gym`,
    sprite : `veteran`,
    trainer: true,
    type: `vs`,
    level : 50,
    team : {
        slot1 : pkmn.lickitung,
        slot1Moves : [move.strength.id,move.bodyPress.id, move.thunderWave.id],
        slot2 : pkmn.pyroar,
        slot2Moves : [move.hyperVoice.id, move.flameCharge.id, move.nobleRoar.id],
        slot3 : pkmn.kangaskhan,
        slot3Moves : [move.dizzyPunch.id, move.powerupPunch.id, move.metalClaw.id],
        slot4 : pkmn.bewear,
        slot4Moves : [move.strength.id, move.machPunk.id, move.bodyPress.id],
        slot5 : pkmn.beheeyem,
        slot5Moves : [move.futureSight.id, move.psychic.id, move.zenHeadbut.id],
        slot6 : pkmn.shiftry,
        slot6Moves : [move.leafage.id, move.leafBlade.id, move.pursuit.id],
    },
    reward : [item.shucaBerry]
}

areas.vsClownDuck = {
    name: `Clown Duck`,
    background : `gym`,
    sprite : `clown`,
    trainer: true,
    type: `vs`,
    level : 55,
    team : {
        slot1 : pkmn.absol,
        slot1Moves : [move.snarl.id,move.feintAttack.id, move.honeClaws.id],
        slot2 : pkmn.chandelure,
        slot2Moves : [move.shadowSneak.id, move.confuseRay.id, move.shadowBall.id],
        slot3 : pkmn.ludicolo,
        slot3Moves : [move.thunderbolt.id, move.magicalLeaf.id, move.waterfall.id],
        slot4 : pkmn.gliscor,
        slot4Moves : [move.honeClaws.id, move.earthquake.id, move.smog.id],
        slot5 : pkmn.leafeon,
        slot5Moves : [move.leafBlade.id, move.cottonSpore.id, move.energyBall.id],
        slot6 : pkmn.sirfetchd,
        slot6Moves : [move.dizzyPunch.id, move.powerupPunch.id, move.metalClaw.id],
    },
    reward : [pkmn.ducklett]
}

areas.vsGymLeaderPhoebe = {
    name: `Gym Leader Phoebe`,
    background : `gym`,
    sprite : `phoebe`,
    trainer: true,
    type: `vs`,
    level : 60,
    team : {
        slot1 : pkmn.drifblim,
        slot1Moves : [move.icyWind.id, move.hex.id, move.confuseRay.id, move.shadowSneak.id],
        slot2 : pkmn.mismagius,
        slot2Moves : [move.ominousWind.id, move.psychic.id, move.shadowBall.id, move.thunderWave.id],
        slot3 : pkmn.gengar,
        slot3Moves : [move.lick.id, move.hex.id, move.shadowBall.id, move.shadowSneak.id],
        slot4 : pkmn.cofagrigus,
        slot4Moves : [move.ominousWind.id, move.hex.id, move.shadowBall.id, move.shadowSneak.id],
        slot5 : pkmn.dusknoir,
        slot5Moves : [move.firePunch.id, move.hex.id, move.confuseRay.id, move.thunderWave.id],
        slot6 : pkmn.dragapult,
        slot6Moves : [move.dragonClaw.id, move.hex.id, move.shadowBall.id, move.dragonDance.id],
    },
    reward : [item.spellTag]
}

areas.vsTwinTrainersBellisse = {
    name: `Twin Trainers Bellise`,
    background : `gym`,
    sprite : `twins`,
    trainer: true,
    type: `vs`,
    level : 65,
    team : {
        slot1 : pkmn.lickilicky,
        slot1Moves : [move.strength.id,move.bodyPress.id, move.hyperBeam.id],
        slot2 : pkmn.raichu,
        slot2Moves : [move.magneticFlux.id, move.discharge.id, move.thunderbolt.id],
        slot3 : pkmn.rapidash,
        slot3Moves : [move.fireFang.id, move.flameCharge.id, move.bodyPress.id],
        slot4 : pkmn.nidoking,
        slot4Moves : [move.honeClaws.id, move.earthquake.id, move.smog.id],
        slot5 : pkmn.nidoqueen,
        slot5Moves : [move.earthPower.id, move.rototiller.id, move.dig.id],
        slot6 : pkmn.wigglytuff,
        slot6Moves : [move.hyperVoice.id, move.moonblast.id, move.hyperBeam.id],
    },
    reward : [pkmn.plusle]
}

areas.vsAceTrainerRicardo = {
    name: `Ace Trainer Ricardo`,
    background : `gym`,
    sprite : `aceTrainerSnowM`,
    trainer: true,
    type: `vs`,
    level : 70,
    team : {
        slot1 : pkmn.charizard,
        slot1Moves : [move.flamethrower.id,move.fly.id, move.honeClaws.id],
        slot2 : pkmn.rotomWash,
        slot2Moves : [move.discharge.id, move.confuseRay.id, move.scald.id],
        slot3 : pkmn.lopunny,
        slot3Moves : [move.dizzyPunch.id, move.bulkUp.id, move.crossChop.id],
        slot4 : pkmn.steelix,
        slot4Moves : [move.ironDefense.id, move.earthquake.id, move.ironTail.id],
        slot5 : pkmn.drapion,
        slot5Moves : [move.crossPoison.id, move.bugBuzz.id, move.smog.id],
        slot6 : pkmn.salamence,
        slot6Moves : [move.fireFang.id, move.dragonDance.id, move.dragonClaw.id],
    },
    reward : [pkmn.charmander]
}

areas.vsAceTrainerLily = {
    name: `Ace Trainer Lily`,
    background : `gym`,
    sprite : `aceTrainerSnowF`,
    trainer: true,
    type: `vs`,
    level : 75,
    team : {
        slot1 : pkmn.primarina,
        slot1Moves : [move.hyperVoice.id,move.scald.id, move.moonblast.id],
        slot2 : pkmn.aegislash,
        slot2Moves : [move.shadowSneak.id, move.confuseRay.id, move.shadowBall.id],
        slot3 : pkmn.lucario,
        slot3Moves : [move.bulletPunch.id, move.ironDefense.id, move.auraSphere.id],
        slot4 : pkmn.meganium,
        slot4Moves : [move.stunSpore.id, move.energyBall.id, move.solarBeam.id],
        slot5 : pkmn.swampert,
        slot5Moves : [move.earthquake.id, move.waterfall.id, move.bulkUp.id],
        slot6 : pkmn.tyranitar,
        slot6Moves : [move.crunch.id, move.hyperBeam.id, move.earthPower.id],
    },
    reward : [pkmn.mudkip]
}

areas.vsEliteTrainerCynthia = {
    name: `Elite Trainer Cynthia`,
    background : `gym`,
    sprite : `cynthia`,
    trainer: true,
    type: `vs`,
    level : 80,
    team : {
        slot1 : pkmn.eelektross,
        slot1Moves : [move.thunderbolt.id, move.magneticFlux.id, move.discharge.id, move.nastyPlot.id],
        slot2 : pkmn.porygonZ,
        slot2Moves : [move.triAttack.id, move.psychic.id, move.hyperBeam.id, move.nastyPlot.id],
        slot3 : pkmn.milotic,
        slot3Moves : [move.scald.id, move.waterfall.id, move.liquidation.id, move.psychic.id],
        slot4 : pkmn.spiritomb,
        slot4Moves : [move.confuseRay.id, move.hex.id, move.shadowBall.id, move.shadowSneak.id],
        slot5 : pkmn.togekiss,
        slot5Moves : [move.airShlash.id, move.thunderWave.id, move.dazzlingGleam.id, move.moonblast.id],
        slot6 : pkmn.megaGarchomp,
        slot6Moves : [move.swordsDance.id, move.dragonTail.id, move.dragonRush.id, move.earthquake.id],
    },
    reward : [item.dragonFang]
}



for (const i in areas){
    areas[i].id = i

    if (areas[i].trainer) areas[i].defeated = false

    if (areas[i].type == "wild" && areas[i].level == wildAreaLevel2) {
        areas[i].unlockDescription = `🔒 Defeat Gym Leader Brock in VS to unlock`
        areas[i].unlockRequirement = function() { return areas.vsGymLeaderBrock.defeated }
    }

    if (areas[i].type == "wild" && areas[i].level == wildAreaLevel3) {
        areas[i].unlockDescription = `🔒 Defeat Gym Leader Misty in VS to unlock`
        areas[i].unlockRequirement = function() { return areas.vsGymLeaderMisty.defeated }
    }

    if (areas[i].type == "wild" && areas[i].level == wildAreaLevel4) {
        areas[i].unlockDescription = `🔒 Defeat Gym Leader Phoebe in VS to unlock`
        areas[i].unlockRequirement = function() { return areas.vsGymLeaderPhoebe.defeated }
    }

}