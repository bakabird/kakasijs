"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Result = /** @class */ (function () {
    function Result(result, from, to, event) {
        this.result = result;
        this.from = from;
        this.to = to;
        this.event = event;
    }
    Result.prototype.toString = function () {
        this.result + " is convert from " + this.from + " to " + this.to;
    };
    return Result;
}());
exports.Result = Result;
var TransformResult = /** @class */ (function (_super) {
    __extends(TransformResult, _super);
    function TransformResult(result, from, to) {
        return _super.call(this, result, from, to, "transform") || this;
    }
    return TransformResult;
}(Result));
exports.TransformResult = TransformResult;
var SeparateResult = /** @class */ (function (_super) {
    __extends(SeparateResult, _super);
    function SeparateResult(result, from, to, separate) {
        return _super.call(this, result, from, to, "separate," + separate) || this;
    }
    return SeparateResult;
}(Result));
exports.SeparateResult = SeparateResult;
var MarkResult = /** @class */ (function (_super) {
    __extends(MarkResult, _super);
    function MarkResult(result, from, to, leftEdge, rightEdge, separate) {
        return _super.call(this, result, from, to, "mark," + leftEdge + "," + rightEdge + "," + separate) || this;
    }
    return MarkResult;
}(Result));
exports.MarkResult = MarkResult;
exports.default = Result;
