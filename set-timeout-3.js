let count=1;
const timerId = setInterval(function(){
 console.log('hello after'+ count +'second');
 count++;
 if (count==6){
     console.log('Done');
     clearInterval(timerId);
 }
},1000);
