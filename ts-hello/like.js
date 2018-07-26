"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_totalLikes, _isSelected) {
        this._totalLikes = _totalLikes;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._totalLikes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent.prototype.onClick = function () {
        this._totalLikes += this._isSelected ? -1 : +1;
        this._isSelected = !(this._isSelected);
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
