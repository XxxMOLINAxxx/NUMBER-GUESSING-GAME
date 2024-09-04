// Complex Date Comparison
function compareDates(date1, date2) {
	if (date1 < date2) {
		return "date1 is before date2";
	} else if (date1 > date2) {
		return "date1 is after date2";
	} else {
		return "date1 is the same as date2";
	}
}

const date1 = new Date("2024-09-01");
const date2 = new Date("2024-09-04");
const date3 = new Date("2024-09-01");

console.log(compareDates(date1, date2));
console.log(compareDates(date2, date1));
console.log(compareDates(date1, date3));

// Currency Formatting
