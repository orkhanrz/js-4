// // Task 1
// const date1 = new Date("2/8/2024");
// const date2 = new Date("1/8/2024");

// var yearDiff = date1.getFullYear() - date2.getFullYear();
// var monthDiff = date1.getMonth() - date2.getMonth();
// var dayDiff = date1.getDate() - date2.getDate();

// if (monthDiff < 0) {
// 	yearDiff--;
// 	monthDiff += 12;
// }

// if (dayDiff < 0) {
// 	monthDiff--;
// 	var tempDate = new Date(end.getFullYear(), end.getMonth(), 0);
// 	dayDiff += tempDate.getDate();
// }

// console.log(`İllər: ${yearDiff}, aylar: ${monthDiff}, günlər: ${dayDiff}`);



// // Task 2
// const date3 = new Date("2/8/2024");
// const date4 = new Date("1/8/2024");

// const differenceInDays =
// 	(date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
// console.log(differenceInDays + " gün.");



// // Task 3
// const examPassMark = 40;

// const students = [
// 	{
// 		id: 1,
// 		name: "Student 1",
// 		examMark: 45,
// 	},
// 	{
// 		id: 2,
// 		name: "Student 2",
// 		examMark: 35,
// 	},
// 	{
// 		id: 3,
// 		name: "Student 3",
// 		examMark: 40,
// 	},
// 	{
// 		id: 4,
// 		name: "Student 4",
// 		examMark: 28,
// 	},
// 	{
// 		id: 5,
// 		name: "Student 5",
// 		examMark: 85,
// 	},
// ];

// const passedStudents = students.filter((s) => s.examMark >= examPassMark);
// const failedStudents = students.filter((s) => s.examMark < examPassMark);
// console.log("Keçənlər: ", passedStudents);
// console.log("Kəsilənlər: ", failedStudents);