// immediate invoked function expression (iife)

(function chai(){
    console.log(`DB connected`);     //named iife
})();

((name) => {
    console.log(`DB connected ${name}`);    //un-named iife
}) ("zarif");