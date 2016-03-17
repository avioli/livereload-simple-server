# livereload-simple-server

This is a very simple wrapper around [node-livereload](https://github.com/napcs/node-livereload) that uses [rc](https://www.npmjs.com/package/rc) to load its configuration.

Refer to the above two projects for configuration, but in essence:

### Defaults

```
{
  "port": 35729,
  "exts": ["html", "css", "js", "png", "gif", "jpg", "jpeg", "php", "php5", "py", "rb", "erb", "coffee", "htm"],
  "extsAddon": undefined,
  "applyJSLive": false,
  "applyCSSLive": true,
  "applyImgLive": true,
  "exclusions": [".git/", ".svn/", ".hd/", "node_modules/"],
  "exclusionsAddon": undefined,
  "originalPath": undefined,
  "overrideURL": undefined,
  "usePolling": undefined,
  "debug": false,
  "watch": "."
}
```

`extsAddons` is to append to the `exts` array. Keep in mind that `["ts", "coffee", "jade", "jsx", "es6", "less", "sass", "scss"]` are usually watched and converted to js or css anyways.

`exclusionsAddon` is to append to the `exclusions` array.

### Sample .livereloadrc

```
{
  "watch": ["my-dir/to-watch/", "and/another/dir/to/watch/"],
  "extAddon": ["ts"]
}
```

This file could even be an `.ini` file (refer to `rc`'s documentation).

### Arguments

Thanks to `rc` one can alter any of these via inline arguments:

```
~ $ cd /path/to-watch
/path/to-watch $ livereload-simple-server --debug
```

or

```
~ $ cd /path/to-watch
/path/to-watch $ livereload-simple-server --watch=./subdir/to-watch --watch=./another/dir/to-watch --extAddon=ts --extAddons=XYZ
```
