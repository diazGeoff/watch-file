var fs = require("fs");

var createFileWatcher = function createFileWatcher( filePath , callBack) {

    this.directory;

    this.path = filePath;

    var self = this;

    this.watcher = function watcher(filePath, changeHandler) {
        fs.watchFile(filePath, {interval: 600},function( ){
            var parameters = Array.prototype.slice.call(arguments);
            changeHandler.apply(self, parameters);
        });
    };

    this.watchFile = function watchFile() {
        this.directory = filePath.split("/");
        this.directory = this.directory.splice(0, this.directory.length - 1).join("/") + "/";
        this.watcher(filePath, callBack);
        callBack.apply( self , arguments );
    };

};

( module || {} ).exports = createFileWatcher;