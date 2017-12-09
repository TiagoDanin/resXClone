'use strict'

var fs = require('fs')
var rdotjson = require("rdotjson")
var builder = require('xmlbuilder')

function writeXml(name, xml) {
	fs.writeFileSync(name, xml)
	return true
}

function readXml(name) {
	if (fs.existsSync(name)) {
		var xml = (fs.readFileSync(name)).toString()
		var xmlObj = {}
		rdotjson(xml, function(err, R) {
			if (err) throw err;
			xmlObj = R
		})
		return xmlObj
	} else {
		return false
	}
}

function updateXml(stringsOriginal, stringsClone, prefix) {
	var newStrings = stringsOriginal
	for(var index in stringsOriginal) {
		if (stringsClone[index]) {
			newStrings[index] = stringsClone[index] || ''
		} else if (prefix) {
			newStrings[index] =  prefix + stringsOriginal[index] || prefix + ''
		}
	}
	return newStrings
}

function createXml(strings) {
	var resources = builder.create('resources', {encoding: 'utf-8'})
	for(var index in strings) {
		resources.ele('string', {'name': index}, strings[index])
	}
	var newXml = resources.end({ pretty: true})
	return newXml
}

module.exports = {
	writeXml,
	readXml,
	updateXml,
	createXml
}