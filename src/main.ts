import * as kanji from "./kanji"
import kata from "./kata"
import hira from './hira';
import { Result , TransformResult } from "./result"
import Input from './input'
const MODULE_NAME = "kakasi";

// convert-start-
// all
export async function toRoma(sentence :Input){
    let ori = sentence;
    let rlt:Result;
    rlt = await kanji.toRoma(ori);
    rlt = await hira.toRoma(rlt.result);
    rlt = await kata.toRoma(rlt.result);
    return new TransformResult(
        rlt.result,
        "all",
        "roma"
    )
};
export async function toHira(sentence :Input){
    let ori = sentence;
    let rlt:Result;
    rlt = await kanji.toHira(ori);
    rlt = await kata.toHira(rlt.result);
    return new TransformResult(
        rlt.result,
        "all",
        "hira"
    )
};
export async function toKata(sentence :Input){
    let ori = sentence;
    let rlt:Result;
    rlt = await kanji.toHira(ori);
    rlt = await hira.toKata(rlt.result);
    return new TransformResult(
        rlt.result,
        "all",
        "kata"
    )
};
// kanji
export let kanjitoRoma = kanji.toHira; 
export let kanjitoKata = kanji.toKata; 
export let kanjitoHira = kanji.toHira;
// kana
export async function kanaToRoma(sentence :Input){
    let ori = sentence;
    let rlt:Result;
    rlt = await hira.toRoma(ori);
    rlt = await kata.toRoma(ori);
    return new TransformResult(
        rlt.result,
        "kana",
        "roma"
    )
};
export let kanaToHira = kata.toHira;
export let kanaToKata = hira.toKata;
// hira
export let hiraToRoma = hira.toRoma;
export let hiraToKata = hira.toKata;
// kata
export let kataToroma = kata.toRoma;
export let kataTohira = kata.toHira;
// convert-end-

// mark-start-
export let markKana = kanji.markKana;
export let markKata = kanji.markKata;
// mark-end-

// separate-start-
import * as _separate_ from "./separate"
export let separate = _separate_;
// separate-end-

// exec-start-
import * as _exec_ from "./exec"
export let exec = _exec_;
// exec-end-

