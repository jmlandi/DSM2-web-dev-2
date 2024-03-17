namespace Looping
{
    for (let i:number = 2; i <= 53; i++) {
        let cont: number = 0
        for (let j:number = 1; j <= i; j++) {
            if (i % j == 0) {
                cont++
            }
        }
        if (cont == 2) {
            console.log("Número Primo: " + i)
        }
    }

}

