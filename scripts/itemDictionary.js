const item = {}

item.blackBelt = {
    type: "held",
    info: function() {return `When held: Increase the power of Fighting-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.blackGlasses = {
    type: "held",
    info: function() {return `When held: Increase the power of Dark-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.charcoal = {
    type: "held",
    info: function() {return `When held: Increase the power of Fire-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.dragonFang = {
    type: "held",
    info: function() {return `When held: Increase the power of Dragon-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.fairyFeather = {
    type: "held",
    info: function() {return `When held: Increase the power of Fairy-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.hardStone = {
    type: "held",
    info: function() {return `When held: Increase the power of Rock-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.magnet = {
    type: "held",
    info: function() {return `When held: Increase the power of Electric-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.metalCoat = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increase the power of Metal-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.miracleSeed = {
    type: "held",
    info: function() {return `When held: Increase the power of Grass-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.mysticWater = {
    type: "held",
    info: function() {return `When held: Increase the power of Water-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.neverMeltIce = {
    type: "held",
    info: function() {return `When held: Increase the power of Ice-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.poisonBarb = {
    type: "held",
    info: function() {return `When held: Increase the power of Poison-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.sharpBeak = {
    type: "held",
    info: function() {return `When held: Increase the power of Flying-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.silkScarf = {
    type: "held",
    info: function() {return `When held: Increase the power of Normal-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.silverPowder = {
    type: "held",
    info: function() {return `When held: Increase the power of Bug-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.softSand = {
    type: "held",
    info: function() {return `When held: Increase the power of Ground-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.spellTag = {
    type: "held",
    info: function() {return `When held: Increase the power of Ghost-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.twistedSpoon = {
    type: "held",
    info: function() {return `When held: Increase the power of Psychic-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}





item.occaBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Fire-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.passhoBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Water-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.wacanBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Electric-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.rindoBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Grass-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.yacheBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Ice-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chopleBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Fighting-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kebiaBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Poison-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.shucaBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Ground-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.cobaBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Flying-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.payapaBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Psychic-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.tangaBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Bug-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chartiBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Rock-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kasibBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Ghost-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.habanBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Dragon-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.colburBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Dark-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.babiriBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Steel-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}


item.waterStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.thunderStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.sunStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}

item.linkStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel4}+)`},
}

item.ovalStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.moonStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.leafStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.iceStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}

item.fireStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.duskStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.dawnStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}

item.shinyStone = {
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}


item.hpUp = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the HP IV of a Pokemon by 1`},
}

item.protein = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the Attack IV of a Pokemon by 1`},
}

item.iron = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the Defense IV of a Pokemon by 1`},
}

item.calcium = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the Special Attack IV of a Pokemon by 1`},
}

item.zinc = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the Special Defense IV of a Pokemon by 1`},
}

item.carbos = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the Speed IV of a Pokemon by 1`},
}


item.eviolite = {
    type: "held",
    info: function() {return `When held: If a Pokemon has not fully evolved, increase overall defense by x${this.power()}`},
    power : function() { return 1+(returnItemLevel(this.id)/5)}
}

item.lightClay = {
    type: "held",
    info: function() {return `When held: Increases the duration of positive buffs used by 1 turn and increases damage dealt by ${this.power()}%`},
    power : function() { return 5+(5*returnItemLevel(this.id))}
}

item.mentalHerb = {
    type: "held",
    info: function() {return `When held: Decreases the duration of negative buffs received by 1 turn and decreases damage taken by ${this.power()}%`},
    power : function() { return 5+(5*returnItemLevel(this.id))}
}




item.thunderousRock = {
    type: "key",
    rotation: 1,
    info: function() {return `Can be used to catch Zapdos once. Expires after event finishes`},
}

item.fieryRock = {
    type: "key",
    rotation: 1,
    info: function() {return `Can be used to catch Moltres once. Expires after event finishes`},
}

item.articRock = {
    type: "key",
    rotation: 1,
    info: function() {return `Can be used to catch Articuno once. Expires after event finishes`},
}

item.ancientOrchid = {
    type: "key",
    rotation: 2,
    info: function() {return `Can be used to catch a privimite Paradox Pokemon once. Expires after event finishes`},
}

item.ancientKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return `Can be used to catch Regirock once. Expires after event finishes`},
}

item.steelKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return `Can be used to catch Registeel once. Expires after event finishes`},
}

item.frozenKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return `Can be used to catch Regice once. Expires after event finishes`},
}



item.mysteryEgg = {
    info: function() {return `An unhatched egg. Leave combat to discover the contents!`},
}

item.tmDummy = {
}

item.nothing = {
}
















//normal
item.quickAttackTm  = {}
item.swiftTm  = {}
item.strengthTm  = {}
//fire
item.emberTm  = {}
item.incinerateTm = {}
item.flamethrowerTm = {}
//electric    
item.nuzzleTm = {}
item.thunderPunchTm = {}
item.thunderboltTm = {}
//ground
item.mudSlapTm = {}
item.bulldozeTm = {}
item.earthquakeTm = {}
//steel
item.bulletPunchTm = {}
item.metalClawTm = {}
item.flashCannonTm = {}
//flying
item.peckTm = {}
item.acrobaticsTm = {}
item.flyTm = {}
//poison
item.acidTm = {}
item.crossPoisonTm = {}
item.sludgeBombTm = {}
//ice
item.iceShardTm = {}
item.avalancheTm = {}
item.iceBeamTm = {}
//bug
item.twineedleTm = {}
item.bugBiteTm = {}
item.bugBuzzTm = {}
//water
item.waterGunTm = {}
item.waterPulseTm = {}
item.aquaTailTm = {}
//grass
item.leafageTm = {}
item.magicalLeafTm = {}
item.leafBladeTm = {}
//fighting
item.rockSmashTm = {}
item.forcePalmTm = {}
item.auraSphereTm = {}
//psychic
item.confusionTm = {}
item.psychoCutTm = {}
item.psychicTm = {}
//rock
item.rockThrowTm = {}
item.rockSlideTm = {}
item.powerGemTm = {}
//ghost
item.lickTm = {}
item.hexTm = {}
item.shadowBallTm = {}
//dragon
item.twisterTm = {}
item.dragonTailTm = {}
item.dragonRushTm = {}
//fighting
item.pursuitTm = {}
item.biteTm = {}
item.darkPulseTm = {}
//fairy
item.disarmingVoiceTm = {}
item.dazzlingGleamTm = {}
item.playRoughTm = {}


for (const i in item){
    item[i].id = i
    item[i].newItem = 0
    item[i].got = 0
}

//tms
for (const i in item){
    if (i.endsWith("Tm")) {
        item[i].move = i.slice(0, -2); 
        item[i].type = "tm";

        
        item[i].info = function () { return `Teach the move <span data-move="${move[item[i].move].id}" ><span  style="cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor(move[item[i].move].type)}">${format(move[item[i].move].id)}</span></span> to a ${joinWithOr(move[item[i].move].moveset)} Pokemon`}        

    }
}

function joinWithOr(list) {
    if (list.includes("all")) return "all";

    const formatted = list.map(w => w[0].toUpperCase() + w.slice(1));
    const len = formatted.length;

    if (len === 0) return "";
    if (len === 1) return formatted[0];
    if (len === 2) return `${formatted[0]} or ${formatted[1]}`;

    return `${formatted.slice(0, -1).join(", ")}, or ${formatted[len - 1]}`;
}

function joinWithAnd(list) {
    if (list.includes("all")) return "all";

    const splitCamel = w =>
        typeof w === "string"
            ? w.replace(/([a-z])([A-Z])/g, "$1 $2")
            : "";

    const cap = w =>
        typeof w === "string" && w.length > 0
            ? w.charAt(0).toUpperCase() + w.slice(1)
            : "";

    const formatted = list.map(w => cap(splitCamel(w)));
    const len = formatted.length;

    if (len === 0) return "";
    if (len === 1) return formatted[0];
    if (len === 2) return `${formatted[0]} and ${formatted[1]}`;

    return `${formatted.slice(0, -1).join(", ")}, and ${formatted[len - 1]}`;
}

