const marksObtained=75;

message= (marksObtained<40)?'You Need to work Hard!!!':(marksObtained<60)?'B Grade':(marksObtained<75)?'A Grade':(marksObtained<85)?'A+ Grade':'Genious';

console.log(message);