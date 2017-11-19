import { TransformResult } from "./result";
declare let hira: {
    toRoma(sentence: string | string[]): Promise<TransformResult>;
    toKata(sentence: string | string[]): Promise<TransformResult>;
};
export default hira;
