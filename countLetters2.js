cmdlineArgs = process.argv.slice(2);

if(cmdlineArgs.length === 0 ){
 console.log("Error: no input string" );
}
else{
  console.log( countLetters( cmdlineArgs[0].toLowerCase() ) );
}

// function countLetters( curString ){
//   curString = curString.split("");
//   var myObj = {};
//   for( char in curString ){
//     if( curString[char] !== " " ){
//       if( myObj.hasOwnProperty(curString[char]) ){
//         myObj[curString[char]]++;
//       }
//       else {
//         myObj[curString[char]] = 1;
//       }
//     }
//   }
//   return myObj;
// }

function countLetters( curString ){
  curString = curString.split("");
  var myObj = {};
  for( var char = 0; char < curString.length; char++ ){
    if( curString[char] !== " " ){
      if( myObj.hasOwnProperty( curString[char] ) ){
        myObj[curString[char]].count++;
        myObj[curString[char]].indicies.push(char);
      }
      else {
        myObj[curString[char]]  = { count: 1, indicies: [char] };
      }
    }
  }
  return myObj;
}
