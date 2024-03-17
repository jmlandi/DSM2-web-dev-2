namespace Vector 
{

    // Basic list/vector concept
    const vectorList: number[] = [2, 4, 6, 8];
    console.log(vectorList[3]);

    const students: Array<string> = ["Marcos", "Bruno", "Otávio"];
    console.log(students[1]);

    // Run a list to know how much items does it have
    let cont: number = 0
    let item: string = students[cont]
    while (item != null || item !=undefined) {
        cont++;
        item = students[cont]
    }
    console.log(`The length of "students" is: ${cont}\n`)

    // For loop to print a list
    for(let i:number = 0; i < students.length; i++) {
        console.log(students[i])
    }

    // Create a class
    type Student = {
        ra: number,
        name: string,
        age: number
    }

    // Create an Object
    let studentVictor:Student = {
        ra: 30405060,
        name: "Victor",
        age: 10
    }

    console.log(`
    \nStudent Victor\nName: ${studentVictor.name}\nRA: ${studentVictor.ra}\nAge: ${studentVictor.age}\n`)

    
    let studentsDict: Student[] = [{
        ra: 12345678,
        name: "Marcos",
        age: 12
    },
    {
        ra: 87654321,
        name: "Bruno",
        age: 13
    },
    {
        ra: 90876543,
        name: "Douglas",
        age: 11
    }
    ]

    studentsDict.forEach((key) => {
        console.log(key.name);
    })


    let numbers: number[] = [];
    for (let i:number = 0; i <= 20; i++) {
        numbers.push(i)
    }

    console.log(`\nList of numbers: ${numbers}`)

    let evenNumbers: number[];
    evenNumbers = numbers.filter((key) => {
        return key % 2 == 0
    })

    console.log(`The even numbers: ${evenNumbers}\n`)

    // Using .reduce => from a list, append the values of a list (number) with total
    let total:number = numbers.reduce((listTotal, number) => {
        return listTotal + number
    }) 

    console.log(`The total is: ${total}`)

}