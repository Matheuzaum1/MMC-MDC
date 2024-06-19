let num1;
let num2;
console.log("Digite o primeiro número")
process.stdin.on("data", function (data){
let entrada= data.toString().trim()

if (!num1) {
    if (!isNaN(entrada)) {
        num1 = Number(entrada);
        console.log("Digite o segundo número:");
    } else {
        console.log("Digite apenas número(s)");
    }
}else if (!num2) {
    if (!isNaN(entrada)) {
        num2 = Number(entrada);
        let a = num1;
        let b = num2;
        let originalA = a;
        let originalB = b;

        while (b) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        let mdc = a;

 
        let mmc = (originalA * originalB) / mdc;

        console.log("O mínimo múltiplo comum de " + num1 + " e " + num2 + " é " + mmc);
        process.exit();  
    } else {
        console.log("Digite apenas número(s)");
    }
}

})