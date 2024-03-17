namespace Functions
{

    // Function (global)
    function sum(n1:number, n2:number) {
        return n1 + n2;
    }
    console.log("Function sum: " + sum(5,5));


    // Arrow function (local)
    const sumArrow = (n1:number, n2:number) => {
        return n1 + n2;
    }
    console.log("Arrow sum: " + sumArrow(5,5));

    // Another function
    const concat = (text1:string, text2?:string, separador:string = " ") => {
        if (text2) return text1 + separador + text2;
        return text1;
    }
    console.log("Concat with one name: " + concat("Marcos"));
    console.log("Concat with two names: " + concat("Marcos", "Landi"));

    // another function
    const hello = (text?:string) => {
        if (text) return "Hello, " + text;
        return "Hello";
    }
    console.log(hello("Marcos"));

    // function + callback
    function division(n1:number, callback:(result:number) => void) {
        const result:number = n1 % 2;
        callback(result);
    }

    division(10, function (result) {
        console.log(result === 0 ? "Even" : "Odd");
    })

    



}