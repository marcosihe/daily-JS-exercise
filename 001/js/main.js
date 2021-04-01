const multiply = (a,b) => {
    let result = 0;
    if (a && b) {
        let min, max;
        const positive_a = Math.abs(a) == a;
        const positive_b = Math.abs(b) == b;
        if (Math.abs(a) > Math.abs(b)) {
            min = Math.abs(b);
            max = Math.abs(a);
        }else{
            max = Math.abs(b);
            min = Math.abs(a);
        }
        for(i = 0; i < min; i++){
            result = positive_a == positive_b ? result + max : result - max;
        }
        return result;
    }else{
        return result;
    }
    
}

let prod = multiply(1,500);
console.log(prod);

prod = multiply(0,5);
console.log(prod);

prod = multiply(1000,-4);
console.log(prod);

prod = multiply(1,0);
console.log(prod);

prod = multiply(-4,4);
console.log(prod);

prod = multiply(-1,-6);
console.log(prod);

prod = multiply(0,0);
console.log(prod);
