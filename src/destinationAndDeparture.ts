class destinationAndDeparture {
    public departure: string
    public destination: string
    public basicFare: number
    public superExpressSurcharge: number
    public discount: number
    public additionalCharge: number
    public shinkansen: string
    public season: string

    clacFare(departure: string, destination: string) {
        let isNozomi = this.isNozomi(this.shinkansen)
        if (destination === "新大阪") {
            this.superExpressSurcharge = 5490
            if (isNozomi) {
                this.additionalCharge = 320
            }
        }else {
            this.superExpressSurcharge = 5920
            if (isNozomi){
                this.additionalCharge = 530
            }
        }

    }
    isNozomi(shinkansen: string) {
        if (shinkansen === "のぞみ") {
            return true
        }
        return false
    }

    clacDiscount(season: string){
        if (season ===  "regular"){
            this.discount = 530
            return this.discount
        }
        this.discount = 0
        return this.discount
    }
}
