function each(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], key);
		}
	}
}


function map(array, func) {
	var acc = [];
	each(array, function(element, i) {
		acc.push(func(element, i));
	});
	return acc;
}

function filter(array, predicate) {
	var acc = [];
	each(array, function(element, i) {
		if (predicate(element, i)) {
			acc.push(element);
		}
	});
	return acc;
}


 function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }
 function sum(numbers) { 
  return reduce(numbers, function(total, number) { 
     return total + number; 
  }, 0); 
} 

function sum(numbers) { 
      return reduce(numbers, function(total, number) { 
            return total + number; 
      }, 0); 
}  
function product(num){
      return reduce(num,function(tot,i){
            return tot * i;
      },1);

}

var people = [ 
      {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
      {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
      {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
      {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
      {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
]; 
function averageAge(people) { 
      // First you'll need to compute the sum of all the ages
       var rr=map(people,function(per){
            var x =per.age;
            var y= people.length;
            z= (x)/y
            return  z;

      });
      return sum(rr);

}






function range(start, end) { 
      var acc = []; 
      for (var i = start; i < end; i++) { 
             acc.push(i); 
      } 
      return acc; 
      } 
function factorial(n) { 
       return product(range(1, n+1)); 
}

function sumBy(numbers, f) { 
      return reduce(numbers, function(sum,number) { 
          return  sum + f(number); 
      },0); 
}

 function max(numbers) { 
 	 return reduce(numbers, function(max, number) { 
 	 	 if (number > max) { 
 	 	max= number; 
 	 	 } 
 	 	 return max; 
 	 }); 
 }


 function everyOdd(numbers) { 
      return reduce(numbers, function (acc, number) { 
             return acc && (number % 2 === 1) 
      }, true) 
} 
function everyEEdd(numbers) { 
      return reduce(numbers, function (acc, number) { 
             return acc && (number % 2 === 0) 
      }, true) 
} 






function reduce(array, f, acc) { 
      if (acc === undefined) { 
            acc = array[0]; 
            array = array.slice(1); 
      } 
      each(array, function(element, i) { 
            acc = f(acc, element, i); 
      }); 
      return acc; 
}


function fac(n){
      return reduce(range(1,n+1),function(acc,el){
            return acc*el;
      })
      
}

function select(object, keys) { 
      // TODO: your code here 
} 


function tt(s){
      var t=0;

      each(s,function(x){
            t= t+x;

      });
      return t;

}
function makeAccount(initial) {
      var balance = initial;
     return function(amount) {
          if (balance - amount >= 0) {
          balance = balance - amount;
          return 'Here is your money: $' + amount;
          }
     return 'Insufficient funds.';
     };
}
 var x= makeAccount();

 function counter(ini) {
      var counte = ini;
      return function count(){
       count++;
       return count;}
 }
 var ss=counter();


function mm() {
      // YOUR CODE HERE
      var count =0;
     return function counter() {
            count = count + 1;
            return count;
       }

}



































function ff(n) {
      return reduce(n,function(t,s){
            return t=t+s;

      });

}



var people = [ 
      {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
      {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
      {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
      {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
      {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
]; 
function ava(people) { 
      // First you'll need to compute the sum of all the ages 
      var z;
                    z=map(people,function(pp,i){
                       return  pp.age ;
});
return sum(z)/people.length;

      // Second, divide the sum by the number of people (people.length) 
      // YOUR CODE HERE 
}


function sss (n){
        return product(range(1,n+1))
      

}

function sss2 (n){
      return product(range(1,n+1),function(elem,val){
            return elem * val;

      });
    

}



function maxx(s){
      return reduce(s,function(max,nu){
            if(nu > max){
                  console.log(max = nu);
                   max = nu;  
            }
            return max;
      },max[0]);


}
function select2(object, keys) {
      var x={}; 
    return map(object,function(y,key){
          if(y === key){
                 x[key] =y;
          } 
          return y;
    
    });
}       

var count=0;
function makecou(){

function counterr() {
       count = count + 1;
      return count;
 }
 return counterr();
}

var saas = makecou();


function pow2(exponent) {
      return function(x) {

           return Math.pow(x,exponent) ;
           }
      } 

      