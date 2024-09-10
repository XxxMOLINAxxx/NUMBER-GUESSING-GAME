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

const d1 = new Date("2024-09-01");
const d2 = new Date("2024-09-04");
const d3 = new Date("2024-09-01");

console.log(compareDates(d1, d2));
console.log(compareDates(d2, d1));
console.log(compareDates(d1, d3));

// Currency Formatting
function formatUSCurrency(amount) {
	return Intl.NumberFormat("en-Latn-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
}

console.log(formatUSCurrency(56.9));

// Generating Random User IDs
