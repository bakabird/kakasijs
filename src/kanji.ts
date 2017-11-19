import kakasiCore from "./kakasi-core"
import {  TransformResult , MarkResult } from "./result"

import Input from './input';

export async function toRoma(sentence :Input){
    let ori = sentence
    let rlt:string;
    await kakasiCore("-Ja",sentence).then((out:string)=>{
        rlt = out
    })
    return new TransformResult(rlt,"kanji","roma")
};
export async function toHira(sentence :Input){
    let ori = sentence;
    let rlt:string;
    await kakasiCore("-JH",sentence).then((out:string)=>{
        rlt = out
    })
    return new TransformResult(rlt,"kanji","hira")
};
export async function toKata(sentence :Input){
    let ori = sentence;
    let rlt:string;
    await kakasiCore("-JH",sentence).then((out:string)=>{
        rlt = out
    })
    return new TransformResult(rlt,"kanji","kata")
};
export async function markKana(sentence :Input, leftEdge:string = '(', rightEdge:string = ')',seperateFlg :boolean = false){
    let ori = sentence;
    let rlt:string;
    if(!seperateFlg){
        await kakasiCore(`-JH -i utf8 -o utf8 -f -Fl'${leftEdge}' -Fr'${rightEdge}'`,sentence).then((out:string)=>{
            rlt = out
        })
    }else{
        await kakasiCore(`-JH -i utf8 -o utf8 -f -Fl'${leftEdge}' -Fr'${rightEdge}' -s`,sentence).then((out:string)=>{
            rlt = out
        })
    }
    return new MarkResult(rlt,"kanji","kana",leftEdge,rightEdge,seperateFlg ? " " : "")
};
export async function markKata(sentence :Input, leftEdge:string = '(', rightEdge:string = ')',seperateFlg :boolean = false){
    let ori = sentence;
    let rlt:string;
    if(!seperateFlg){
        await kakasiCore(`-JK -i utf8 -o utf8 -f -Fl'${leftEdge}' -Fr'${rightEdge}'`,sentence).then((out:string)=>{
            rlt = out
        })
    }else{
        await kakasiCore(`-JK -i utf8 -o utf8 -f -Fl'${leftEdge}' -Fr'${rightEdge}' -s`,sentence).then((out:string)=>{
            rlt = out
        })
    }
    return new MarkResult(rlt,"kanji","kata",leftEdge,rightEdge,seperateFlg ? " " : "")
};