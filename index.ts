#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const templateJsonPath = path.join(__dirname, '../template.json')
const templateJsonBuffer = fs.readFileSync(templateJsonPath, {
    flag: 'a+'
})
const templateJson = templateJsonBuffer.toString() ? JSON.parse(templateJsonBuffer.toString()) : {}
const p = '/sdsd' // 模板文件
const name = 'wxx' // 模板名称
if (p) {
    templateJson[ name ] = p
    fs.writeFileSync(templateJsonPath, JSON.stringify(templateJson))
}
const targetDir = '.' // 复制模板到目标文件夹

