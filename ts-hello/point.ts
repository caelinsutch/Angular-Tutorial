class Like {

    totalLikes: number;
    clickState: boolean = true;

    constructor(private _like?: number) {

    }

    get like() {
        return this.totalLikes;
    };

    set like(addLike) {
        this.totalLikes += addLike;

    };

    click() {

        if (this.clickState) {
            this.clickState = false;
            return "Click state is false";
            this.returnLikes();
        } else {
            this.clickState = true;
            return "Click state is set to true";
            this.returnLikes();
        }

    }

    returnLikes() {
        return this.totalLikes;
    }

}