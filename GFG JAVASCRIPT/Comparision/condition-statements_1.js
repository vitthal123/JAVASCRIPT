const readlineSync=require('readline-sync');
const num=Number(readlineSync.question('Enter the number ? '));


const ReminderForDivisibleBy3=num % 3;
const ReminderForDivisibleBy5=num % 5;

if ( ReminderForDivisibleBy3 === 0 && ReminderForDivisibleBy5 === 0 )
{
    console.log('The number divisible by 3 and 5');
}
else if( ReminderForDivisibleBy3 === 0 )
{
    console.log(' The number is divisible by 3');
}
else if( ReminderForDivisibleBy5 === 0 )
{
    console.log(' The number is divisible by 5');
}
else
{
    console.log(' The number is not divisible by 3 and 5');
}