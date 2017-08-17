var val = 25;

console.log('val is ',val.toString().substring(0,val.toString().length - 1));

var oldValue = new String('hello');
var newValue = new Object();
newValue = oldValue;
if(newValue instanceof oldValue)
  console.log('they are equal');