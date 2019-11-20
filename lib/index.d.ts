#!/usr/bin/env node
declare const fs: any;
declare const path: any;
declare const chalk: any;
declare const WordTable: any;
declare const yParser: any;
declare const templateJsonPath: any;
declare const script: string;
declare const args: IArgs;
/**
 * generate template
 * @param name name of template
 */
declare function generate({ name }: IArgs): void;
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
interface IArgs {
    name?: string;
    path?: string;
}
