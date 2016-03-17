#!/usr/bin/env node
var livereload = require('livereload')
var resolve = require('path').resolve

var conf = {
  port: 35729,
  exts: ['html', 'css', 'js', 'png', 'gif', 'jpg', 'jpeg', 'php', 'php5', 'py', 'rb', 'erb', 'coffee', 'htm'],
  extsAddon: undefined, // ['ts', 'coffee', 'jade', 'jsx', 'es6', 'less', 'sass', 'scss'], // these are usually watched and converted to js or css anyways
  applyJSLive: false,
  applyCSSLive: true,
  applyImgLive: true,
  exclusions: ['.git/', '.svn/', '.hd/', 'node_modules/'],
  exclusionsAddon: undefined,
  originalPath: undefined,
  overrideURL: undefined,
  usePolling: undefined,
  debug: false,
  watch: '.'
}
var appCfg = require('rc')('livereload', conf)

appCfg.debug && console.dir(appCfg)
 
var server = livereload.createServer({
  port: appCfg.port,
  exts: appCfg.exts.concat(appCfg.extsAddon || []),
  applyJSLive: appCfg.applyJSLive,
  applyCSSLive: appCfg.applyCSSLive,
  applyImgLive: appCfg.applyImgLive,
  exclusions: appCfg.exclusions.concat(appCfg.exclusionsAddon || []),
  originalPath: appCfg.originalPath,
  overrideURL: appCfg.overrideURL,
  usePolling: appCfg.usePolling,
  debug: appCfg.debug
})

appCfg.debug || console.log('LiveReload server started.')
console.log('Use this snippet in your website:')
appCfg.wp && console.log(`wp_enqueue_script( 'livereload', '//localhost:${appCfg.port}/livereload.js?snipver=1', array(), false, false );`)
appCfg.wp || console.log(`<script>document.write('<script src="http://'+(location.host||'localhost').split(':')[0]+':${appCfg.port}/livereload.js?snipver=1"></'+'script>')</script>`)

var paths = appCfg.watch
if (paths === '.') {
  paths = resolve('.')
}

server.watch(paths)
