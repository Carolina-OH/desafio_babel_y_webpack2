export default function resultTwo(){
    return resultTwoJsonStringify()

}

function resultTwoJsonStringify(){
    let objeto={
        nombre: "Antonia",
        nacionalidad: "Chilena",
        edad: 30,
        previsión: "Isapre"
    }
    console.log(objeto);
    var myJson=JSON.stringify(objeto)
    console.log("myJson=>",myJson)
    return myJson
}