/**
 * Created by Jan on 20.08.2015.
 */

/* FOR-OF LOOP  */
//-----------------------------------------------------------------------
//SUMMARY:
/*  1) forEach(function(entry){...}); Problems: no break statement, no return statement possible
*   2) for-in loop; Problems: loops over object properties
*   3) => ES6: for-of loop; no weird stuff
* */
//-----------------------------------------------------------------------
arr = ["banana", "orange", "apple"];
// usually: (old syntax)
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
//output: banana orange apple
// what is the problem with this loop version?
//-----------------------------------------------------------------------

//since ES5 forEach()
arr.forEach(function(entry){
    console.log(entry);
});
//output: banana orange apple

/*
Drawbacks of forEach()
1) you can't use break (gives you "Illegal break statement")
e.g.  */
for (var i = 0; i < arr.length; i++) {
 if (i === 2) { break; }
     console.log(arr[i]);
 }
//output: banana orange

/*
2) you can't return from the forEach function() (only from "function (entry)")
e.g.
 */
arr = ["banana", "orange", "apple", "pie", "cheese"];
arr.forEach(function(entry){
    if(entry =="apple"){
        return;
    }
    console.log(entry);

});
//output: banana orange pie cheese
//-----------------------------------------------------------------------

//for-in loop
arr = ["banana", "orange", "apple"];
arr.name = "FRUITS";
for(var x in arr){
    console.log(arr[x]);
}

/*
loops over object properties (not array indices)
    - output: banana orange apple FRUITS (arr.name is not part of the array actually, but a property)
    - x in this case gets assigned string values "0", "1" and not 0, 1
    - in some cases this code can loop in an arbitrary order
 */

//-----------------------------------------------------------------------

//ES6 for-of loop
for(var x of arr){
    console.log(x);
}

/*
- most concise, direct syntax
- works with break, continue and return
- loops over data (values in an array), NOT over object properties like for-in
- works on NodeList, String, Map, Set (works with iterators)
    -maybe examples? it starts to get very technical
*/







