#!/usr/bin/env node
declare const fs: any;
declare const path: any;
declare const chalk: any;
declare const WordTable: any;
declare const yParser: any;
declare const inquirer: any;
declare const templateJsonPath: any;
declare const log: (message?: any, ...optionalParams: any[]) => void;
declare const script: string;
declare const args: IArgs;
declare const commands: {
    name: string;
    description: string;
}[];
/**
 * generate template
 * @param name name of template
 */
declare function generate({ name, target, f }: IArgs): Promise<void>;
/**
 * clear template path.
 * @param name name of template
 */
declare function clearPath({ name }: IArgs): void;
/**
 * list template-path config on Terminal.
 */
declare function listConfig(): void;
/**
 * set path of one template files.
 * @param name name of template
 */
declare function setPath({ name, path }: IArgs): void;
declare function getTemplateJson(): any;
/**
 * copy template
 * @param source source file/dir
 * @param target target file/dir
 */
declare function copyTemplate(source: string, target: string): void;
declare function copyDir(source: string, target: string): void;
declare function listHelp(): void;
declare function padEnd(s: string, l: number): string;
interface IArgs {
    name?: string;
    path?: string;
    target?: string;
    f?: boolean;
}
