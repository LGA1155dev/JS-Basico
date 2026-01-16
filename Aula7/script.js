//escreve no console "foo string"
(function(){ var undefined = 'foo'; console.log(undefined, typeof undefined);})()

//escrreve no console "foo string"
(function(undefined){ console.log(undefined, typeof undefined);})();
