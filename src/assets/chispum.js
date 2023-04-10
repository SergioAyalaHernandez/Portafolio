function chispum(any){
  if(any % 3 == 0 && any % 5 == 0){
    return "chispum";
  }else if(any % 3 == 0){
    return "chis";
  }else if(any % 5 == 0){
    return "pum";
  }
  return any;
}

console.log("Hola mundo");

for (i=0;i<100;i++){
  console.log("Envió un "+ i +"  => "+ chispum(i));
}

