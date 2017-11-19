import { TransformResult } from "./result";
declare let kata: {
    toHira(sentence: string | string[]): Promise<TransformResult>;
    toRoma(sentence: string | string[]): Promise<TransformResult>;
};
export default kata;
