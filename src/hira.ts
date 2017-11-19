import kakasiCore from './kakasi-core';
import { TransformResult , MarkResult } from "./result"
import Input from "./input"

let hira = {
    async toRoma(sentence :Input){
        let ori = sentence;
        let rlt:string;
        await kakasiCore("-Ha",sentence).then((out:string)=>{
            rlt = out
        })
        return new TransformResult(rlt,"kanji","roma")
    },
    async toKata(sentence :Input){
        let ori = sentence;
        let rlt:string;
        await kakasiCore("-HK",sentence).then((out:string)=>{
            rlt = out
        })
        return new TransformResult(rlt,"kanji","roma")
    }
}

export default hira;