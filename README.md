# grunt-peigong-filter

> 执行查找替换指定占位符的GRUNT任务。

## 新手上路

本插件依赖于 Grunt `~0.4.1`

如果你以前从来没有使用过 [Grunt](http://gruntjs.com/) , 那你一定要先阅读文档《[Grunt新手上路](http://www.gruntjs.org/article/getting_started.html)》, 文档上说明了新建 [Gruntfile](http://gruntjs.com/sample-gruntfile) 文件，以及如何有效的安装和使用Grunt插件。 一旦你熟悉了这个过程，就可以使用命令行安装本插件了：

```命令行
npm install grunt-clientlab-filter --save-dev
```
一旦安装过这个插件，你就可以在Gruntfile文件中，使用如下的javascript代码启用了：

```javascript代码
grunt.loadNpmTasks('grunt-clientlab-filter');
```

## "filter" 任务

### 概况

在你的项目Gruntfile文件中，添加一个名为`filter`的配置节点，传递给`grunt.initConfig()`。


```javascript代码
grunt.initConfig({
  filter: {
    options: {
      //"name": [ { "token": "@NAME@", "value": "周培公" } ]
	  //"email": [ { "token": "@EMAIL@", "value": "peigong@foxmail.com" } ]
    },
    your_target: {
      // Target-specific file lists and/or options go here.
	/*
		files: [
		  {
		    src: ['test/fixtures/testing'],
		    dest: 'tmp/default_options',
		    filters: ["name"]
		  }
		]
*/
    },
  },
})
```

## 版本的更新记录

### 0.2.0 ###

- 版本库迁至：https://github.com/clientlab/grunt-clientlab-filter。
- 使用标准的文件格式描述src-dest结构。

### 0.1.0 ###
完成了最初的版本。
