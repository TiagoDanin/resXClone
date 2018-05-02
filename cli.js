#!/usr/bin/env node

var prog = require('caporal')
var app  = require('resxclone')
var path = require('path')

prog
	.version('1.0.0')
	.description('A utility to clone and update xml resources file')
	.argument('<file>', 'Path/file of the original file', prog.REPEATABLE)
	.argument('<clone>', 'Path/file of the clone file', prog.REPEATABLE)
	.argument('<prefix>', 'Prefix for new translations', prog.REPEATABLE)
	.action(function(args, options, logger) {
		console.log(args)
		try {
			logger.info('[+] Start')
			var prefix = args['prefix']
			var dir = process.cwd() +  '\\'
			var file = app.readXml(path.resolve(dir + args['file']))
			var clone = app.readXml(path.resolve(dir + args['clone']))
			var xml = ''
			if (!file) {
				return logger.error('')
			}
			if (clone) {
				xml = app.createXml(app.updateXml(file.string, clone.string, prefix))
			} else {
				xml = app.createXml(file.string)
			}
			app.writeXml(args['clone'], xml)
			logger.info('[+] Finish')
		} catch (e) {
			logger.error('[-] Error', e)
		}
	});
prog.parse(process.argv)
