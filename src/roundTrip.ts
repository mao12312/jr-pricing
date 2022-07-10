class roundTrip {
    public going: string;
    public returning: string;
    public isRoundTrip: boolean;

    isOver601(going: string, returning: string) {
        this.going = going;
        this.returning = returning;
        let flag: boolean;
        if (going === "新大阪") {
            flag = false;
        } else {
            flag = true;
        }
        return flag;
    }
}