import * as destinationAndDeparture from "./destinationAndDeparture";
class people {
    public adultNum: number;
    public childNum: number;
    public numberOfPeople: number;
    public groupDiscount: number;
    public groupDiscountpercent: number;
    private applicationDate: Date;
    private rangeStartDate: Date;
    private rangeEndDate: Date;

    constructor(applicationDate: number) {
        this.numberOfPeople = this.adultNum + this.childNum;
        this.applicationDate = new Date(applicationDate);
        this.rangeStartDate = new Date('2022-12-21');
        this.rangeEndDate = new Date('2023-01-10');
    }

    calc8GroupDiscount(this.applicationDate) {
        if (this.applicationDate < this.rangeEndTime && this.rangeStartTime < this.applicationDate) {
            this.groupDiscount = (destinationAndDeparture.superExpressSurcharge + destinationAndDeparture.basicFare) * 0.1;
            return this.groupDiscount;
        }
        this.groupDiscount = (destinationAndDeparture.superExpressSurcharge + destinationAndDeparture.basicFare) * 0.15;
        return this.groupDiscount;
    }

    calc31GroupDiscount() {
        this.groupDiscount = destinationAndDeparture.superExpressSurcharge + destinationAndDeparture.basicFare;
        return this.groupDiscount;
    }

    calc51GroupDiscount() {
        const discoutnNum = this.numberOfPeople / 50;
        this.groupDiscount = (destinationAndDeparture.superExpressSurcharge + destinationAndDeparture.basicFare) * discoutnNum;
        return this.groupDiscount;
    }

    clacChildDiscount() {
        const dsicount = Math.floor((destinationAndDeparture.superExpressSurcharge + destinationAndDeparture.basicFare) / 2) * this.childNum;
        return dsicount;
    }
}

