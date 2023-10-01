const readlineSync=require('readline-sync');
const userAge=Number(readlineSync.question('Enter the Age !!! '));

if (userAge > 18)
{
    console.log("You are eligible to vote !!! ");
}
else
{
    console.log("You are not eligible to vote !!! ");
}