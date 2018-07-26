
export class LikeComponent {

    constructor (private _totalLikes: number, private _isSelected: boolean) {

    }

    get likesCount() {
        return this._totalLikes;
    }

    get isSelected() {
        return this._isSelected;
    }

    onClick() {
        this._totalLikes += this._isSelected ? -1 : +1;
        this._isSelected = !(this._isSelected);
    }

}