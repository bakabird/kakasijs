import { kakasiExec } from "./kakasi-core"

export async function exec (command :string, input :string){
    return await kakasiExec(command, input);
}