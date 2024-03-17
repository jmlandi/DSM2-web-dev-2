namespace EX001
{
    // Crie um array com 4 objetos, cada um representa um livro com as propriedades TITULO, AUTOR e ANO. Em seguida, use o método .map() para criar um novo array(string) contendo apenas títulos.

    console.log("\n******************** EX001 ********************\n")

    type Livro = {
        titulo: string,
        autor: string,
        ano: number
    }

    let livros: Livro[] = [{
        titulo: "Guia Do Mochileiro Das Galáxias",
        autor: "Douglas Adams",
        ano: 1986
    },
    {
        titulo: "Design Do Dia A Dia",
        autor: "Donald A. Norman",
        ano: 1988
    },
    {
        titulo: "O Hobbit",
        autor: "Tolkien",
        ano: 1968
    },
    {
        titulo: "Harry Potter",
        autor: "J. K. Rolling",
        ano: 1993
    }]

    const titles = livros.map((key) => {
        return ` ${key.titulo}`
    })

    console.log(`The titles are:${titles}`)

}

namespace EX002
{

    console.log("\n******************** EX002 ********************\n")

    // Faça uma função que substitua as vogais de um array por *

    const nameChange = (text:string[]) => {
        return text.map((key:string) => {
            if (("AEIOU").indexOf(key.toUpperCase()) != -1) {
                key = "*"
            }
        })
    }

    let name:string[] = ["A", "B", "C"]
    console.log(name)
    console.log(nameChange(name))
}