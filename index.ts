#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const WordTable = require('word-table')
const yParser = require('yargs-parser')
const templateJsonPath = path.join(__dirname, '../template.json')

const script = process.argv[2] || 'list' // set,clear,list,g
const args: IArgs = yParser(process.argv.slice(3))

switch (script) {
    case 'list':
        listConfig()
        break
    case 'set':
        setPath(args)
        break
    case 'clear':
        clearPath(args)
        break
    case 'g':
        generate(args)
        break
    default:
}

/**
 * generate template
 * @param name name of template
 */
function generate({
    name
}: IArgs) {
    console.log('生成模板', name)
    // 指定目标文件名称 是否存在 是否强制复制
}

/**
 * clear template path.
 * @param name name of template
 */
function clearPath({
    name = ''
}: IArgs) {
    const templateJson = getTemplateJson()
    delete templateJson[ name ]
    fs.writeFileSync(templateJsonPath, JSON.stringify(templateJson))
    console.log(chalk.green('清除成功'))
}

/**
 * list template-path config on Terminal.
 */
function listConfig() {
    const templateJson = getTemplateJson()
    const header = [ '模板名称', '模板路径' ]
    const body = Object.keys(templateJson).map(k => ([ k, templateJson[ k ] ]))
    const wt = new WordTable(header, body)
    console.log(chalk.green(wt.string()))
}

/**
 * set path of one template files.
 * @param name name of template
 */
function setPath({
    name,
    path
}: IArgs) {
    if (!name || !path) {
        console.log(chalk.red('请指定模板名称或模板文件路径！'))
        return
    }
    if (!fs.existsSync(path)) {
        console.log(chalk.red('模板文件路径不存在，请检查！'))
        return
    }
    const templateJson = getTemplateJson()
    templateJson[ name ] = path
    fs.writeFileSync(templateJsonPath, JSON.stringify(templateJson))
    console.log(chalk.green('设置成功！'))
}

function getTemplateJson() {
    const templateJsonBuffer = fs.readFileSync(templateJsonPath, {
        flag: 'a+'
    })
    return templateJsonBuffer.toString() ? JSON.parse(templateJsonBuffer.toString()) : {}
}

interface IArgs {
    name?: string,
    path?: string,
}