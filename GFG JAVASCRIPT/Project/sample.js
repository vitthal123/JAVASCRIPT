// posAverage(nums) {
//     //code here
//     let sum=0;
//     let arr=nums.map((x)=>x>0);
//     console.log(arr);
//     sum=arr.reduce(function(x,y){
//         return x+y},0);
//     console.log(sum);
//     return sum/arr.length;

//  }

// let arr=[1,2,3,4,5,6,7,8,9];
// let arr1=arr.filter(x=>x>3);
// console.log(arr1);

function fnAddDistinction_map(aStudent) {
	return aStudent.map(function (student, index, array) {
		student.bIsDistinction =
			(student.fPercentage >= 75.0) ? true : false;
		return student;
	});
}
aStudent = [
	{ sStudentId: "001", fPercentage: 91.2 },
	{ sStudentId: "002", fPercentage: 78.7 },
	{ sStudentId: "003", fPercentage: 62.9 },
	{ sStudentId: "004", fPercentage: 81.4 }];

console.log(fnAddDistinction_map(aStudent));

