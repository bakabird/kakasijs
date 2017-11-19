declare class Result {
    result: string;
    from: string;
    to: string;
    event: string;
    constructor(result: string, from: string, to: string, event: string);
    toString(): void;
}
declare class TransformResult extends Result {
    event: string;
    constructor(result: string, from: string, to: string);
}
declare class SeparateResult extends Result {
    event: string;
    constructor(result: string, from: string, to: string, separate: string);
}
declare class MarkResult extends Result {
    event: string;
    constructor(result: string, from: string, to: string, leftEdge: string, rightEdge: string, separate: string);
}
export default Result;
export { Result, TransformResult, SeparateResult, MarkResult };
