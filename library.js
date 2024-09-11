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
function generateUserID(length) {
	const chars = "abc123XYZ789";
	let userID = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * chars.length);
		userID += chars[randomIndex];
	}
	return userID;
}

const userID = generateUserID(10);
console.log(userID);

// Calculating Time Difference in Hours and Minutes
function timeDifference(startTime, endTime) {
	const diffInMs = endTime - startTime;
	const hours = Math.floor(diffInMs / (1000 * 60 * 60));
	const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
	return `${hours} hours and ${minutes} minutes`;
}

const start = new Date("2024-09-09T08:30:00");
const end = new Date("2024-09-09T14:45:00");
console.log(timeDifference(start, end));
