var prog = require('caporal')
var app  = require('./index.js')

prog
	.version('1.0.0')
	.description('A utility to clone and update xml resources file')
	.argument('<file>', 'path/file of the original file', prog.REPEATABLE)
	.argument('<clone>', 'path/file of the clone file', prog.REPEATABLE)
	.argument('<prefix>', 'path/file of the clone file', prog.REPEATABLE)
	.action(function(args, options, logger) {
		console.log(args)
		try {
			logger.info('[+] Start')
			var prefix = args['prefix']
			var file = app.readXml(args['file'])
			var clone = app.readXml(args['clone'])
			var xml = ''
			if (!file) {
				return logger.error('')
			}
			if (clone) {
				if (prefix) {
					xml = app.createXml(app.updateXml(file.string, clone.string, prefix))
				} else {
					xml = app.createXml(app.updateXml(file.string, clone.string))
				}
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