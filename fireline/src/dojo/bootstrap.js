(function() {
    this.dojoConfig = {
        has: {
            "host-node": 1
        },
	packages: [{name:'app',location:'../../../app'}] 
    };
    global.nodeRequire = require;
    require("../dojo/dojo-release-1.7.2-src/dojo/dojo.js");
})();

