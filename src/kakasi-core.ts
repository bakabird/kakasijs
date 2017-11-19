const child_process = require("child_process")
const fs = require("fs")
const path = require("path")
import Input from './input';

let beArr = (input :Input)=>{
    if(!Array.isArray(input)){
        input = [input as string];
    }
    return input;
}

let kakasiCore = (command :string,input :Input)=>{
    let output:Promise<string>;

    input = beArr(input);

    let outputPromise = new Promise(async (rso,rje)=>{
        const body:Array<string> = [];
        for(let sentence of input){
            const part:string = await kakasiExec(command,sentence);
            body.push(part)
        }
        rso(body.join(" "));
    }).then((output:string) =>{
        return output;
    })
    return outputPromise;
}

export let kakasiExec = async (command :string,input :string)=>{
    let exec:Promise<string> = new Promise((rso,rje)=>{
        let box = fs.createWriteStream(path.join(__dirname,'../kakasi/input.txt')).on('error', function(e :any){
            console.error(e)
        }).on('finish',()=>{
            child_process.exec(`kakasi ${command} <input.txt -i utf8 -o utf8`,{
                cwd: path.join(__dirname,'../kakasi')
            },(err :any,std :string,ser :any)=>{
                rso(std);
            })
        })
        box.end(input.trim());
    }).then((output:string) =>{
        return output;
    })

    return exec;
}

export default kakasiCore
