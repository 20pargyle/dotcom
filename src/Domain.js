import { Random } from "boardgame.io/dist/types/src/plugins/random/random";

class Domain {
    constructor(name, sector, tier){
        this.owner = null;
        this.name = name;
        this.sector = sector;
        
        rand = Random.D10();
        this.valuation = 10000; // random between 90 and 110

        // three tiers of domains with the following starting revenue/value percentages:
        // low tier: 50 % 
        // mid tier: 70 %
        // high tier: 90 %
        if (tier == "high"){
            tierMod = 90;
        }
        else if (tier == "mid"){
            tierMod = 70;
        }
        else {
            // if tier == "low"
            tierMod = 50;
        }
        this.revenue = Math.floor((valuation*100) / tierMod);

    }

    timeStep(){

    }
}