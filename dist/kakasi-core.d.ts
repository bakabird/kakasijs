declare let kakasiCore: (command: string, input: string | string[]) => Promise<string>;
export declare let kakasiExec: (command: string, input: string) => Promise<string>;
export default kakasiCore;
