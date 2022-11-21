//UC1
// let max=999;
// let min=100;
//  let number1=Math.floor(Math.random() * (max - min + 1) + min);
//  let number2=Math.floor(Math.random() * (max - min + 1) + min);
//  let number3=Math.floor(Math.random() * (max - min + 1) + min);

//   console.log(number1,number2,number3);
//   if (number1 > number2)
//   {
//       if(number1 > number3)
//       {
//           console.log("First number is largest among all");
//       }
//       else
//       {
//           console.log("Third number is largest among all");
//       }
//   }
//   else if (number2 > number3)
//   {
//       console.log("the Second numbers is largest among all");
//   }
//   else
//   {
//       console.log("the Third number is greatest among all");
//   }

// //UC2
// let year=1980;
// if (year % 400 == 0)
// {
//   console.log("year is leap year");
// }
// else if (year % 4 == 0)
// {
//   console.log("year is leap year");
// }
// else
// {
//   console.log("year is not leap year");
// }
  
let max=7;
let min=1;
 let checknum=Math.floor(Math.random() * (max - min + 1) + min);
 console.log(checknum);
switch(checknum)
{
  case 1:
    console.log("TODAY is-MONDAY");
    break;
  case 2:
    console.log("TODAY is-TUESDAY");
    break;
  case 3:
    console.log("TODAY is-WEDNESDAY");
    break;
  case 4:
    console.log("TODAY is-THURSDAY");
    break;
  case 5:
    console.log("TODAY isFRIDAY");
    break;
  case 6:
    console.log("TODAY is-SATURDAY");
    break;
  case 7:
    console.log("TODAY is-SUNDAY");
    break;
}