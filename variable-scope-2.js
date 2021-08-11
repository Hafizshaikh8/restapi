 // glovbal scope



 for (var i=1; i<5; i++){
//block scope
 }
 console.log(i);

  function sum(a,b){
      //function scope
      var result=a+b;
  }
  //console.log(result);
 