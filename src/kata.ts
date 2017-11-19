import kakasiCore from "./kakasi-core"
import { TransformResult , MarkResult  } from "./result"
import Input from "./input"

let kata = {
    async toHira(sentence :Input){
        let ori = sentence;
        let rlt:string;
        await kakasiCore("-KH",sentence).then((out:string)=>{
            rlt = out
        })
        return new TransformResult(rlt,"kata","roma")
    },
    async toRoma(sentence :Input){
        let ori = sentence;
        let rlt:string;
        await kakasiCore("-Ka",sentence).then((out:string)=>{
            rlt = out
        })
        return new TransformResult(rlt,"kata","roma")
    }
}

export default kata;