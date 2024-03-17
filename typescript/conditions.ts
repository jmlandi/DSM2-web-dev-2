namespace Conditions
{
    
    // Console message
    console.log('Hello, world!');

    // Variable
    let number1: number = 10;
    console.log(`The number is: ${number1}`);

    // Conditional
    if (number1 === 11)
    {
        console.log(`The number is ten.`);
    } else {
        console.log(`The number is not ten.`);
    }

    // Switch Case
    let status: string = "nada"
    switch (status)
    {
        case "atack": console.log("attacking...");
            break;
        case  "defense": console.log("defending...");
            break;
        case "walk": console.log("walking...");
        default: console.log("stoped.");
    }

    // && and ||
    let phoneNumber: string = "+5516992772621";
    let userId: number = 1500;
    let city: string = "Franca";

    if (phoneNumber.indexOf("+55") == 0 && userId || city) {
        console.log("Sign Up Completed")
    } else {
        console.log("Sign Up Failed")
    }

    // Ternary Operator

    let ternaryVar: number = 10;

    let response = ternaryVar % 2 == 0 ? 'PAR' : 'IMPAR';
    console.log(response)

}

