const x = 5;
let result = 0;

for(let i=1;i<=x;i++){
    result+=i;
}
console.log("For:",result)
result=0;
let iterator=0;
while(iterator<=x){
    result+=iterator;
    iterator++;
}
console.log("While:", result);