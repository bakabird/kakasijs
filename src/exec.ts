import { kakasiExec } from "./kakasi-core"

export default async function exec (command :string, input :string){
    return await kakasiExec(command, input);
}