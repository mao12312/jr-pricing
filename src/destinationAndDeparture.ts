export * from "./people";
export class destinationAndDeparture {
    public departure: string
    public destination: string
    public basicFare: number
    public superExpressSurcharge: number
    public discount: number
    public shinkansen: string
    public season: string

    constructor(departure: string, destination: string, basicFare: number, superExpressSurcharge: number, discount: number, shinkansen: string, season: string) {
        this.departure = departure;
        this.destination = destination;
        this.basicFare = basicFare;
        this.superExpressSurcharge = superExpressSurcharge;
        this.discount = discount;
        this.shinkansen = shinkansen;
        this.season = season;
    }

    clacFare(destination: string, shinkansen: string) {
        const isNozomi = this.isNozomi(this.shinkansen)
        if (destination === "新大阪") {
            this.superExpressSurcharge = 5490;
            this.basicFare = 8910;
            if (isNozomi) {
                this.superExpressSurcharge += 320;
            }
            const isFreeSeatAndHikari = this.isFreeSeatAndHikari(this.season, this.shinkansen);
            if (isFreeSeatAndHikari) {
                this.superExpressSurcharge -= this.discount;
            }
        } else {
            this.superExpressSurcharge = 5920;
            this.basicFare = 10010;
            if (isNozomi) {
                this.superExpressSurcharge += 530;
            }
            const isFreeSeatAndHikari = this.isFreeSeatAndHikari(this.season, this.shinkansen);
            if (isFreeSeatAndHikari) {
                this.superExpressSurcharge -= this.discount;
            }
        }

    }
    isNozomi(shinkansen: string) {
        if (shinkansen === "のぞみ") {
            return true
        }
        return false
    }

    isFreeSeatAndHikari(season: string, shinkansen: string) {
        if (season === "regular" && shinkansen === "ひかり") {
            this.discount = 530
            return true
        }
        return false
    }
}
