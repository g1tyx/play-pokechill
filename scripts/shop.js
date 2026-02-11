



const shop = {}

//1 unit == 10-50 gold caps a day

shop.exchange1 = {
    icon: item.bottleCap.id,
    name: `Bottle Cap x2`,
    price: 1,
    currency: item.goldenBottleCap.id,
    category: `all`,
    effect: function() {item.bottleCap.got+=2}
}


shop.shoprareCandy = {
    icon: item.rareCandy.id,
    price: 1,
    category: `goods`,
}

shop.shopabilityPatch = {
    icon: item.abilityPatch.id,
    price: 5,
    category: `goods`,
}

shop.shopabilityCapsule = {
    icon: item.abilityCapsule.id,
    price: 50,
    category: `goods`,
}

shop.shopheartScale = {
    icon: item.heartScale.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `goods`,
}

shop.shoptimeCandyXL = {
    icon: item.timeCandyXL.id,
    price: 3,
    currency: item.timeCandy.id,
    category: `goods`,
}

shop.shoptimeCandy = {
    icon: item.timeCandy.id,
    name: `Time Candy x3`,
    price: 1,
    currency: item.timeCandyXL.id,
    category: `goods`,
    effect: function() {item.timeCandy.got+=3}
}

shop.shopepochFeather = {
    icon: item.epochFeather.id,
    name: `Epoch Feather x25`,
    price: 10,
    currency: item.pokeflute.id,
    category: `goods`,
    condition: function() {if (rotationEventCurrent==1) return true},
    effect: function() {item.epochFeather.got+=25}
}

shop.shopancientOrchid = {
    icon: item.ancientOrchid.id,
    name: `Ancient Orchid x25`,
    price: 10,
    currency: item.primalEarth.id,
    category: `goods`,
    condition: function() {if (rotationEventCurrent==2) return true},
    effect: function() {item.ancientOrchid.got+=25}
}

shop.shopancientKeystone = {
    icon: item.ancientKeystone.id,
    name: `Ancient Keystone x25`,
    price: 10,
    currency: item.steelKeystone.id,
    category: `goods`,
    condition: function() {if (rotationEventCurrent==3) return true},
    effect: function() {item.ancientKeystone.got+=25}
}

shop.shopaetherKeycard = {
    icon: item.aetherKeycard.id,
    name: `Aether Keycard x25`,
    price: 10,
    currency: item.wormholeResidue.id,
    category: `goods`,
    condition: function() {if (rotationEventCurrent==4) return true},
    effect: function() {item.aetherKeycard.got+=25}
}

shop.shopfutureDisk = {
    icon: item.futureDisk.id,
    name: `Future Disk x25`,
    price: 10,
    currency: item.futureContraption.id,
    category: `goods`,
    condition: function() {if (rotationEventCurrent==5) return true},
    effect: function() {item.futureDisk.got+=25}
}

shop.shopwisdomPetal = {
    icon: item.wisdomPetal.id,
    name: `Wisdom Petal x25`,
    price: 10,
    currency: item.redChain.id,
    category: `goods`,
    condition: function() {if (rotationEventCurrent==6) return true},
    effect: function() {item.wisdomPetal.got+=25}
}




shop.shopblackBelt = {
    icon: item.blackBelt.id,
    price: 5,
    category: `held`,
}

shop.shopblackGlasses = {
    icon: item.blackGlasses.id,
    price: 5,
    category: `held`,
}
shop.shopcharcoal = {
    icon: item.charcoal.id,
    price: 5,
    category: `held`,
}
shop.shopdragonFang = {
    icon: item.dragonFang.id,
    price: 5,
    category: `held`,
}
shop.shopfairyFeather = {
    icon: item.fairyFeather.id,
    price: 5,
    category: `held`,
}
shop.shophardStone = {
    icon: item.hardStone.id,
    price: 5,
    category: `held`,
}
shop.shopmagnet = {
    icon: item.magnet.id,
    price: 5,
    category: `held`,
}
shop.shopmetalCoat = {
    icon: item.metalCoat.id,
    price: 5,
    category: `held`,
}
shop.shopmiracleSeed = {
    icon: item.miracleSeed.id,
    price: 5,
    category: `held`,
}
shop.shopmysticWater = {
    icon: item.mysticWater.id,
    price: 5,
    category: `held`,
}

shop.shoptwistedSpoon = {
    icon: item.twistedSpoon.id,
    price: 5,
    category: `held`,
}
shop.shopneverMeltIce = {
    icon: item.neverMeltIce.id,
    price: 5,
    category: `held`,
}
shop.shoppoisonBarb = {
    icon: item.poisonBarb.id,
    price: 5,
    category: `held`,
}
shop.shopsharpBeak = {
    icon: item.sharpBeak.id,
    price: 5,
    category: `held`,
}
shop.shopsilkScarf = {
    icon: item.silkScarf.id,
    price: 5,
    category: `held`,
}
shop.shopsilverPowder = {
    icon: item.silverPowder.id,
    price: 5,
    category: `held`,
}
shop.shopsoftSand = {
    icon: item.softSand.id,
    price: 5,
    category: `held`,
}
shop.shopspellTag = {
    icon: item.spellTag.id,
    price: 5,
    category: `held`,
}

shop.shopluckyEgg = {
    icon: item.luckyEgg.id,
    price: 20,
    category: `held`,
}
shop.shopflameOrb = {
    icon: item.flameOrb.id,
    price: 20,
    category: `held`,
}
shop.shoptoxicOrb = {
    icon: item.toxicOrb.id,
    price: 20,
    category: `held`,
}
shop.shopluckIncense = {
    icon: item.luckIncense.id,
    price: 30,
    category: `held`,
}
shop.shoppureIncense = {
    icon: item.pureIncense.id,
    price: 30,
    category: `held`,
}
shop.shopchoiceBand = {
    icon: item.choiceBand.id,
    price: 50,
    category: `held`,
}
shop.shopchoiceSpecs = {
    icon: item.choiceSpecs.id,
    price: 50,
    category: `held`,
}
shop.shoplifeOrb = {
    icon: item.lifeOrb.id,
    price: 50,
    category: `held`,
}

shop.shopshinyCharm = {
    icon: item.shinyCharm.id,
    price: 200,
    category: `held`,
}

shop.shopterrainExtender = {
    icon: item.terrainExtender.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopelectricSeed = {
    icon: item.electricSeed.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopgrassySeed = {
    icon: item.grassySeed.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopmistySeed = {
    icon: item.mistySeed.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopfoggySeed = {
    icon: item.foggySeed.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopclearAmulet = {
    icon: item.clearAmulet.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopejectPack = {
    icon: item.ejectPack.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopejectButton = {
    icon: item.ejectButton.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shoploadedDice = {
    icon: item.loadedDice.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopmetronome = {
    icon: item.metronome.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shoplaggingTail = {
    icon: item.laggingTail.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopquickClaw = {
    icon: item.quickClaw.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopweaknessPolicy = {
    icon: item.weaknessPolicy.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopluckyPunch = {
    icon: item.luckyPunch.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shoppowerHerb = {
    icon: item.powerHerb.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopassaultVest = {
    icon: item.assaultVest.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `held`,
}

shop.shopleftovers = {
    icon: item.leftovers.id,
    price: 20,
    currency: item.goldenBottleCap.id,
    category: `held`,
}


shop.shopwaterStone = {
    icon: item.waterStone.id,
    price: 10,
    category: `evolution`,
}
shop.shopthunderStone = {
    icon: item.thunderStone.id,
    price: 10,
    category: `evolution`,
}
shop.shopsunStone = {
    icon: item.sunStone.id,
    price: 10,
    category: `evolution`,
}
shop.shopovalStone = {
    icon: item.ovalStone.id,
    price: 10,
    category: `evolution`,
}
shop.shopmoonStone = {
    icon: item.moonStone.id,
    price: 10,
    category: `evolution`,
}
shop.shopleafStone = {
    icon: item.leafStone.id,
    price: 10,
    category: `evolution`,
}
shop.shopiceStone = {
    icon: item.iceStone.id,
    price: 10,
    category: `evolution`,
}
shop.shopfireStone = {
    icon: item.fireStone.id,
    price: 10,
    category: `evolution`,
}
shop.shopduskStone = {
    icon: item.duskStone.id,
    price: 10,
    category: `evolution`,
}
shop.shopdawnStone = {
    icon: item.dawnStone.id,
    price: 10,
    category: `evolution`,
}

shop.shopshinyStone = {
    icon: item.shinyStone.id,
    price: 10,
    category: `evolution`,
}

shop.shopoddRock = {
    icon: item.oddRock.id,
    price: 20,
    category: `evolution`,
}

shop.shoplinkStone = {
    icon: item.linkStone.id,
    price: 20,
    category: `evolution`,
}


shop.shopbarbaracite = {
    icon: item.barbaracite.id,
    price: 50,
    currency: item.goldenBottleCap.id,
    category: `evolution`,
}

shop.shophawluchanite = {
    icon: item.hawluchanite.id,
    price: 50,
    currency: item.goldenBottleCap.id,
    category: `evolution`,
}

shop.shoppyroarite = {
    icon: item.pyroarite.id,
    price: 50,
    currency: item.goldenBottleCap.id,
    category: `evolution`,
}

shop.shopfalinksite = {
    icon: item.falinksite.id,
    price: 50,
    currency: item.goldenBottleCap.id,
    category: `evolution`,
}



shop.shoppowerAnklet = {
    icon: item.powerAnklet.id,
    price: 10,
    category: `genetics`,
}

shop.shoppowerBand = {
    icon: item.powerBand.id,
    price: 10,
    category: `genetics`,
}

shop.shoppowerBelt = {
    icon: item.powerBelt.id,
    price: 10,
    category: `genetics`,
}

shop.shoppowerBracer = {
    icon: item.powerBracer.id,
    price: 10,
    category: `genetics`,
}

shop.shoppowerLens = {
    icon: item.powerLens.id,
    price: 10,
    category: `genetics`,
}

shop.shoppowerWeight = {
    icon: item.powerWeight.id,
    price: 10,
    category: `genetics`,
}

shop.shopmachoBrace = {
    icon: item.machoBrace.id,
    price: 10,
    category: `genetics`,
}

shop.shopeverstone = {
    icon: item.everstone.id,
    price: 20,
    category: `genetics`,
}

shop.shopenergyRoot = {
    icon: item.energyRoot.id,
    price: 20,
    category: `genetics`,
}

shop.shoplockCapsule = {
    icon: item.lockCapsule.id,
    price: 30,
    category: `genetics`,
}

shop.shopdestinyKnot = {
    icon: item.destinyKnot.id,
    price: 50,
    category: `genetics`,
}














shop.shoptrickRoomTm = {
    icon: item.trickRoomTm.id,
    price: 5,
    category: `tm`,
}

shop.shopweirdRoomTm = {
    icon: item.weirdRoomTm.id,
    price: 5,
    category: `tm`,
}

shop.shopcrossRoomTm = {
    icon: item.crossRoomTm.id,
    price: 5,
    category: `tm`,
}

shop.shoplightScreenTm = {
    icon: item.lightScreenTm.id,
    price: 5,
    category: `tm`,
}

shop.shopsafeguardTm = {
    icon: item.safeguardTm.id,
    price: 5,
    category: `tm`,
}
























shop.shoptackleTm = {
    icon: item.tackleTm.id,
    price: 1,
    category: `tm`,
}

shop.shopleerTm = {
    icon: item.leerTm.id,
    price: 1,
    category: `tm`,
}

shop.shopquickAttackTm = {
    icon: item.quickAttackTm.id,
    price: 1,
    category: `tm`,
}

shop.shopbulkUpTm = {
    icon: item.bulkUpTm.id,
    price: 5,
    category: `tm`,
}

shop.shopthunderWaveTm = {
    icon: item.thunderWaveTm.id,
    price: 5,
    category: `tm`,
}

shop.shoptoxicTm = {
    icon: item.toxicTm.id,
    price: 5,
    category: `tm`,
}

shop.shopwillOWispTm = {
    icon: item.willOWispTm.id,
    price: 5,
    category: `tm`,
}

shop.shopcalmMindTm = {
    icon: item.calmMindTm.id,
    price: 10,
    category: `tm`,
}

shop.shopsunnyDayTm = {
    icon: item.sunnyDayTm.id,
    price: 10,
    //currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shoprainDanceTm = {
    icon: item.rainDanceTm.id,
    price: 10,
    //currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shopcrunchTm = {
    icon: item.crunchTm.id,
    price: 20,
    category: `tm`,
}

shop.shopxScissorTm = {
    icon: item.xScissorTm.id,
    price: 20,
    category: `tm`,
}

shop.shopmoonblastTm = {
    icon: item.moonblastTm.id,
    price: 20,
    category: `tm`,
}




shop.shopfireBlastTm = {
    icon: item.fireBlastTm.id,
    price: 50,
    category: `tm`,
}

shop.shophydroPumpTm = {
    icon: item.hydroPumpTm.id,
    price: 50,
    category: `tm`,
}

shop.shopthunderTm = {
    icon: item.thunderTm.id,
    price: 50,
    category: `tm`,
}

shop.shophyperBeamTm = {
    icon: item.hyperBeamTm.id,
    price: 50,
    category: `tm`,
}

shop.shopswaggerTm = {
    icon: item.swaggerTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shopironDefenseTm = {
    icon: item.ironDefenseTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shopfeintAttackTm = {
    icon: item.feintAttackTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopchillingWaterTm = {
    icon: item.chillingWaterTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopsilverWindTm = {
    icon: item.silverWindTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopavalancheTm = {
    icon: item.avalancheTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopknockOffTm = {
    icon: item.knockOffTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopominousWindTm = {
    icon: item.ominousWindTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopflameChargeTm = {
    icon: item.flameChargeTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shopacidSprayTm = {
    icon: item.acidSprayTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shopnastyPlotTm = {
    icon: item.nastyPlotTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shopswordsDanceTm = {
    icon: item.swordsDanceTm.id,
    price: 5,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shophailTm = {
    icon: item.hailTm.id,
    price: 10,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shopfogTm = {
    icon: item.fogTm.id,
    price: 10,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shopsandstormTm = {
    icon: item.sandstormTm.id,
    price: 10,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shopelectricTerrainTm = {
    icon: item.electricTerrainTm.id,
    price: 10,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shopmistyTerrainTm = {
    icon: item.mistyTerrainTm.id,
    price: 10,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}

shop.shopgrassyTerrainTm = {
    icon: item.grassyTerrainTm.id,
    price: 10,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}


shop.shopvoltSwitchTm = {
    icon: item.voltSwitchTm.id,
    price: 10,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopuTurnTm = {
    icon: item.uTurnTm.id,
    price: 10,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopchargeBeamTm = {
    icon: item.chargeBeamTm.id,
    price: 15,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopdischargeTm = {
    icon: item.dischargeTm.id,
    price: 15,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopscorchingSandsTm = {
    icon: item.scorchingSandsTm.id,
    price: 15,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopairShlashTm = {
    icon: item.airShlashTm.id,
    price: 15,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shoppoisonJabTm = {
    icon: item.poisonJabTm.id,
    price: 15,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopliquidationTm = {
    icon: item.liquidationTm.id,
    price: 15,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopenergyBallTm = {
    icon: item.energyBallTm.id,
    price: 15,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopskyUppercutTm = {
    icon: item.skyUppercutTm.id,
    price: 15,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopdracoMeteorTm = {
    icon: item.dracoMeteorTm.id,
    price: 15,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}
shop.shopspiritBreakTm = {
    icon: item.spiritBreakTm.id,
    price: 15,
    currency: item.goldenBottleCap.id,
    category: `tm`,
}



shop.shopalolanDiglett = {
    pkmn: pkmn.alolanDiglett.id,
    price: 30,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.alolanDiglett,1)}
}

shop.shopgalarianZigzagoon = {
    pkmn: pkmn.galarianZigzagoon.id,
    price: 30,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.galarianZigzagoon,1)}
}

shop.shopgalarianPonyta = {
    pkmn: pkmn.galarianPonyta.id,
    price: 30,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.galarianPonyta,1)}
}

shop.shopalolanSandshrew = {
    pkmn: pkmn.alolanSandshrew.id,
    price: 50,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.alolanSandshrew,1)}
}

shop.shophisuianVoltorb = {
    pkmn: pkmn.hisuianVoltorb.id,
    price: 50,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.hisuianVoltorb,1)}
}

shop.shoppaldeanWooper = {
    pkmn: pkmn.paldeanWooper.id,
    price: 50,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.paldeanWooper,1)}
}

shop.shophisuianQwilfish = {
    pkmn: pkmn.hisuianQwilfish.id,
    price: 50,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.hisuianQwilfish,1)}
}

shop.shopalolanRaichu = {
    pkmn: pkmn.alolanRaichu.id,
    price: 100,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.alolanRaichu,1)}
}

shop.shophisuianBraviary = {
    pkmn: pkmn.hisuianBraviary.id,
    price: 100,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.hisuianBraviary,1)}
}

shop.shophisuianSamurott = {
    pkmn: pkmn.hisuianSamurott.id,
    price: 100,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.hisuianSamurott,1)}
}

shop.shophisuianLilligant = {
    pkmn: pkmn.hisuianLilligant.id,
    price: 100,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.hisuianLilligant,1)}
}

shop.shopvivillonElegant = {
    pkmn: pkmn.vivillonElegant.id,
    price: 200,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.vivillonElegant,1)}
}

shop.shopgimmighoul = {
    pkmn: pkmn.gimmighoul.id,
    price: 999,
    currency: item.goldenBottleCap.id,
    category: `pokemon`,
    effect: function() {givePkmn(pkmn.gimmighoul,1)}
}


shop.shophydratationMemory = {
    icon: item.hydratationMemory.id,
    price: 20,
    category: `memory`
}

shop.shopsandVeilMemory = {
    icon: item.sandVeilMemory.id,
    price: 20,
    category: `memory`
}
shop.shopsnowCloakMemory = {
    icon: item.snowCloakMemory.id,
    price: 20,
    category: `memory`
}
shop.shopmarvelScaleMemory = {
    icon: item.marvelScaleMemory.id,
    price: 20,
    category: `memory`
}
shop.shoplivingShieldMemory = {
    icon: item.livingShieldMemory.id,
    price: 20,
    category: `memory`
}
shop.shopbigPecksMemory = {
    icon: item.bigPecksMemory.id,
    price: 20,
    category: `memory`
}
shop.shophyperCutterMemory = {
    icon: item.hyperCutterMemory.id,
    price: 20,
    category: `memory`
}
shop.shopsynchronizeMemory = {
    icon: item.synchronizeMemory.id,
    price: 20,
    category: `memory`
}
shop.shopiceBodyMemory = {
    icon: item.iceBodyMemory.id,
    price: 20,
    category: `memory`
}

shop.shoprainDishMemory = {
    icon: item.rainDishMemory.id,
    price: 30,
    category: `memory`
}
shop.shopsolarPowerMemory = {
    icon: item.solarPowerMemory.id,
    price: 30,
    category: `memory`
}
shop.shopsandForceMemory = {
    icon: item.sandForceMemory.id,
    price: 30,
    category: `memory`
}
shop.shopscrappyMemory = {
    icon: item.scrappyMemory.id,
    price: 30,
    category: `memory`
}

shop.shopstrongJawMemory = {
    icon: item.strongJawMemory.id,
    price: 50,
    category: `memory`
}
shop.shoptoughClawsMemory = {
    icon: item.toughClawsMemory.id,
    price: 50,
    category: `memory`
}
shop.shopironFistMemory = {
    icon: item.ironFistMemory.id,
    price: 50,
    category: `memory`
}
shop.shopmagicGuardMemory = {
    icon: item.magicGuardMemory.id,
    price: 50,
    category: `memory`
}

shop.shoppickPocketMemory = {
    icon: item.pickPocketMemory.id,
    price: 35,
    currency: item.goldenBottleCap.id,
    category: `memory`
}






//event

//assume 25 currency per battle



saved.halloweenThemeUnlocked = false
shop.eventhalloweenTheme = {
    icon: item.oldGateau.id,
    name: `Permanent Seasonal Theme`,
    price: 50,
    stock: 1,
    currency: item.oldGateau.id,
    category: `limited`,
    effect: function() {saved.halloweenThemeUnlocked = true},
    condition: function() {if (saved.currentSeason == season.halloween.id) return true},
}

shop.eventhalloweenDecor = {
    icon: item.witchyHat.id,
    price: 30,
    currency: item.oldGateau.id,
    category: `limited`,
    condition: function() {if (saved.currentSeason == season.halloween.id) return true},
}

shop.event5 = {
    icon: item.timeCandyXL.id,
    price: 10,
    stock: 10,
    currency: item.oldGateau.id,
    category: `limited`
}

shop.event4 = {
    icon: item.timeCandy.id,
    price: 5,
    stock: 20,
    currency: item.oldGateau.id,
    category: `limited`
}

shop.event1 = {
    icon: item.autoRefightTicket.id,
    price: 5,
    stock: 20,
    currency: item.oldGateau.id,
    category: `limited`
}

shop.event2 = {
    icon: item.energyRoot.id,
    price: 5,
    stock: 20,
    currency: item.oldGateau.id,
    category: `limited`
}

shop.event6 = {
    icon: item.abilityPatch.id,
    price: 2,
    stock: 50,
    currency: item.oldGateau.id,
    category: `limited`
}

shop.event3 = {
    icon: item.goldenBottleCap.id,
    price: 1,
    stock: 100,
    currency: item.oldGateau.id,
    category: `limited`
}

shop.eventhalloweenCaps = {
    icon: item.bottleCap.id,
    name: `Bottle Cap x5`,
    effect: function() {item.bottleCap.got+=5},
    price: 50,
    currency: item.oldGateau.id,
    category: `limited`,
    condition: function() {if (saved.currentSeason == season.halloween.id) return true},
}



//decor

shop.shopDecor1 = {
    icon: item.googlySpecs.id,
    price: 10,
    category: `decor`
}

shop.shopDecor2 = {
    icon: item.googlySpecs.id,
    price: 10,
    category: `decor`
}

shop.shopDecor3 = {
    icon: item.googlySpecs.id,
    price: 10,
    category: `decor`
}

shop.shopDecor4 = {
    icon: item.googlySpecs.id,
    price: 10,
    category: `decor`
}

shop.shopDecor5 = {
    icon: item.googlySpecs.id,
    price: 10,
    category: `decor`
}

shop.shopDecor6 = {
    icon: item.googlySpecs.id,
    price: 50,
    currency: item.goldenBottleCap.id,
    category: `decor`
}

shop.shopwealthyCoins = {
    icon: item.wealthyCoins.id,
    price: 999,
    currency: item.goldenBottleCap.id,
    category: `decor`
}




saved.lastShopDecorReset = undefined
saved.shopDecorRotation = undefined
function assignShopDecor(){

    if (saved.lastShopDecorReset!=rotationEventCurrent){
    saved.lastShopDecorReset =rotationEventCurrent


    const commonDecor = []
    const rareDecor = []

    for (const i in item){
        if (item[i].type !== "decor") continue
        if (item[i].rarity == undefined) continue
        if (item[i].rarity == "rare") rareDecor.push(i)
        if (item[i].rarity == "common") commonDecor.push(i)
    }


    saved.shopDecorRotation = [...arrayPick(commonDecor,5), arrayPick(rareDecor,1)]

    }


    shop.shopDecor1.icon = saved.shopDecorRotation[0]
    shop.shopDecor2.icon = saved.shopDecorRotation[1]
    shop.shopDecor3.icon = saved.shopDecorRotation[2]
    shop.shopDecor4.icon = saved.shopDecorRotation[3]
    shop.shopDecor5.icon = saved.shopDecorRotation[4]
    shop.shopDecor6.icon = saved.shopDecorRotation[5]


}



let shopCategory = undefined

function updateItemShop(){

    document.getElementById("shop-currency").innerHTML = `<img src="img/items/bottleCap.png"> x${item.bottleCap.got}`
    document.getElementById("shop-currency-gold").innerHTML = `<img src="img/items/goldenBottleCap.png"> x${item.goldenBottleCap.got}`


    if (shopCategory == undefined){

    document.getElementById("shop-categories").style.display = "flex"
    document.getElementById("shop-listing").style.display = "none"

        


        return
    }

    document.getElementById("shop-listing").innerHTML = ""

    const goBack = document.createElement("div")
    goBack.id = "shop-back"
    goBack.innerHTML =`
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity="0.2"/><path d="M184 104v32a8 8 0 0 1-8 8H99.31l10.35 10.34a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L99.31 128H168v-24a8 8 0 0 1 16 0m48-48v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144z"/></g></svg>
    Go Back`
    document.getElementById("shop-listing").appendChild(goBack);
    goBack.addEventListener("click", () => {
    shopCategory = undefined
    updateItemShop()
    })


    if (shopCategory == "decor") {
    const decorTimer = document.createElement("div")
    decorTimer.id = "shop-back"
    decorTimer.style.outline = "none"
    decorTimer.style.border = "none"
    decorTimer.innerHTML =`
    <svg style="scale:0.7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/><rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="450s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect><rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="37.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect></svg>
    Available decor will rotate in <font style="margin-left:0.3rem" class="time-counter-event">...</font>`
    document.getElementById("shop-listing").appendChild(decorTimer);

    }


    document.getElementById("shop-categories").style.display = "none"
    document.getElementById("shop-listing").style.display = "flex"




    for (let i in shop){

    if (shop[i].category !== shopCategory && shop[i].category !== "all") continue

    if (shop[i].condition && shop[i].condition() != true) continue
    if (shop[i].stock<=0) continue


    //if (item[shop[i].icon].type == "held" && item[shop[i].icon].got>= 20) continue

    let name = ``


    const div = document.createElement("div");


    let currency = item.bottleCap.id
    if (shop[i].currency) currency = shop[i].currency




    if (shop[i].icon){ //for shop items

    if ((item[shop[i].icon].type=="held" && item[shop[i].icon].got>= 20 && item[shop[i].icon].heldBonusPkmn==undefined)
        || (item[shop[i].icon].heldBonusPkmn && pkmn[item[shop[i].icon].heldBonusPkmn()].caught==0 && item[shop[i].icon].got>= 21)
        || (item[shop[i].icon].heldBonusPkmn && pkmn[item[shop[i].icon].heldBonusPkmn()].caught>0 && item[shop[i].icon].got>= 20)
    ) continue




    name = format(shop[i].icon)
    if (shop[i].name) name = shop[i].name

    let stockTag = ""
    if (shop[i].stock) stockTag = ` (Stock: ${shop[i].stock})`


    div.dataset.item = shop[i].icon

    const shopItem = shop[i].icon

    if (item[shopItem] && item[shopItem].type=="tm"){ div.innerHTML = `
    <img src="img/items/tm${format(move[item[shopItem].move].type)}.png">
        <span>${name}${stockTag}</span>
    <strong id="shop-currency-${i}">
        <img src="img/items/${currency}.png">
        x${shop[i].price}
    </strong>
    `;} else if (item[shopItem] && item[shopItem].type=="memory"){ div.innerHTML = `
    <img src="img/items/${ability[item[shopItem].ability].type[0]}Memory.png">
        <span>${name}${stockTag}</span>
    <strong id="shop-currency-${i}">
        <img src="img/items/${currency}.png">
        x${shop[i].price}
    </strong>
    `;} else if (item[shopItem] && item[shopItem].type=="decor"){ div.innerHTML = `
    <img src="img/decor/${shop[i].icon}.png" style="scale:1; margin: 0 -2rem;">
        <span style="padding-left:0.5rem">${name}${stockTag}</span>
    <strong id="shop-currency-${i}">
        <img src="img/items/${currency}.png">
        x${shop[i].price}
    </strong>
    `;} else {div.innerHTML = `
    <img src="img/items/${shop[i].icon}.png">
        <span>${name}${stockTag}</span>
    <strong id="shop-currency-${i}">
        <img src="img/items/${currency}.png">
        x${shop[i].price}
    </strong>
    `}


















    }

    if (shop[i].pkmn) {


    name = format(shop[i].pkmn)
    div.dataset.pkmn = shop[i].pkmn


    div.innerHTML = `
        <img src="img/items/pokeball.png">
        <span>${name}</span>
    <strong  id="shop-currency-${i}">
        <img src="img/items/${currency}.png">
        x${shop[i].price}
    </strong>
    `







    }

    




div.addEventListener("click", () => {

    document.getElementById("tooltipTop").style.display = "none"
    document.getElementById("tooltipTitle").innerHTML = "How many will you buy?"
    document.getElementById("tooltipMid").style.display = "none"

    document.getElementById("tooltipBottom").innerHTML = `
        <span style="display:flex; justify-content:center; width:100%">
            <div data-amount="1"  style="cursor:pointer; font-size:2rem; width:40%" id="prevent-tooltip-exit">x1</div>
            <div data-amount="5"  style="cursor:pointer; font-size:2rem; width:40%">x5</div>
            <div data-amount="10" style="cursor:pointer; font-size:2rem; width:40%">x10</div>
        </span>
    `

    document
        .querySelectorAll("#tooltipBottom div")
        .forEach(el => {
            el.addEventListener("click", () => {
                buyItem(+el.dataset.amount)
            })
        })

    openTooltip()
})

    function buyItem(amount) {
        
        if ( ( item[currency].got>=(shop[i].price*amount) && shop[i].stock == undefined ) || ( item[currency].got>=(shop[i].price*amount) && shop[i].stock >= amount ) ){

            item[currency].got-=shop[i].price*amount
            if (shop[i].stock) shop[i].stock-=amount

            if (shop[i].effect) {
            for (let l = 0; l < amount; l++) {
            shop[i].effect()
            }
            }
            else {item[shop[i].icon].got+=amount}

            updateItemShop()
            closeTooltip()
        } else{
            document.getElementById("tooltipTitle").innerHTML = "Cant afford";
            document.getElementById("tooltipTop").style.display = "none"    
            document.getElementById("tooltipTop").style.display = "none"    
            document.getElementById("tooltipMid").style.display = "none"
            document.getElementById("tooltipBottom").innerHTML = `You cant afford to purchase this<span id="prevent-tooltip-exit"></span>`
        }
    }




    document.getElementById("shop-listing").appendChild(div);

    
    document.getElementById(`shop-currency-${i}`).dataset.item = currency


    }







}