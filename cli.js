var prog = require('caporal')
var app  = require('./index.js')

prog
	.version('1.0.0')
	.description('dsads')
	.argument('<file>', 'path/file of the original file', prog.REPEATABLE)
	.argument('<clone>', 'path/file of the clone file', prog.REPEATABLE)
	.action(function(args, options, logger) {
		console.log(args)
		try {
			logger.info('[+] Start')
			var file = app.readXml(args['file'])
			var clone = app.readXml(args['clone'])
			var xml = ''
			if (!file) {
				return logger.error('')
			}
			if (clone) {
				xml = app.createXml(app.updateXml(file.string, clone.string))

			} else {
				xml = app.createXml(file.string)
			}
			app.writeXml(args['clone'], xml)
		} catch (e) {
			logger.error('[-] Error', e)
		}
	});
prog.parse(process.argv)