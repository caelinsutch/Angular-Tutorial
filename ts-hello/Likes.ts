export class Like {

    totalLikes: number;
    clickState: boolean = true;

    constructor(private _like: number) {
        this.totalLikes += _like;
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
            return " state is false";
        } else {
            this.clickState = true;
            return "Click state is set to true";
        }

    }


}