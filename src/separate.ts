import kakasiCore from "./kakasi-core"
import {  SeparateResult   } from "./result"
import Input from "./input"

export default async function separate(sentence :Input, separateChar :string = " "):Promise<SeparateResult>{
    let ori = sentence;
    let rlt:string;
    let from:string = "kanji";
    let to:string;
    if(separateChar !== ''){
        await kakasiCore(`-s -S'${separateChar}' -c`,sentence).then((out:string)=>{
            rlt = out
        })
    }else{
        if(Array.isArray(sentence)){
            rlt = (sentence as Array<string>).join(" ");
        }else{
            rlt = sentence as string;   
        }
    }
    to = from.split('').join(separateChar);
    return new SeparateResult(rlt,from,to,separateChar);
}