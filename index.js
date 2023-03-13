const callback = () => console.log("callback");

const receivesAFunction = (callback) => {
   callback();
};

const namedFunction = () => {
   console.log("named function");
};

const returnsANamedFunction = () => namedFunction;

const returnsAnAnonymousFunction = () => () => console.log("unnamed functions");
