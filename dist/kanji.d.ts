import { TransformResult, MarkResult } from "./result";
import Input from './input';
export declare function toRoma(sentence: Input): Promise<TransformResult>;
export declare function toHira(sentence: Input): Promise<TransformResult>;
export declare function toKata(sentence: Input): Promise<TransformResult>;
export declare function markKana(sentence: Input, leftEdge?: string, rightEdge?: string, seperateFlg?: boolean): Promise<MarkResult>;
export declare function markKata(sentence: Input, leftEdge?: string, rightEdge?: string, seperateFlg?: boolean): Promise<MarkResult>;
