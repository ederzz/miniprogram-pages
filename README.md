# miniprogram-pages


## Usage

```sh
npm i miniprogram-pages -g
```

## commands

### log usage of all commands

```sh
mpages help
```

### set template path

```sh
mpages set --name=[template-name] --path=xxxx
```

### clear template path

```sh
mpages clear --name=[template-name]
```

### log template-path config

```sh
mpages list
```

### generate template

```sh
mpages --name=[template-name] --target=[target-name] --f
```

- `--target`：目标`文件/文件夹`名称，默认使用模板`文件/文件夹`名称为准
- `--f`：如果当前路径下已存在目标`文件/文件夹`名称，是否强制覆盖