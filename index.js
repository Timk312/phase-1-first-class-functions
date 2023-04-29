

function receivesAFunction(callback){
callback();
}

function callback(){
    return receivesAFunction;
}


function returnsANamedFunction(){
return callback();
}

function why(){
    return 'hello'
}
function returnsAnAnonymousFunction(){
return function(){
    console.log('hello');
}
}
//return why;

returnsAnAnonymousFunction(()=>console.log("hello"));
//returnsAnAnonymousFunction(function(){
//receivesAFunction();
//});
