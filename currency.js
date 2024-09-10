function formatUSCurrency(amount) {
	return Intl.NumberFormat("en-Latn-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
}

console.log(formatUSCurrency(56.9));

// LOOPS

/*

for(let i=0;i<10;i++)
{
   Console.log(i);
}

let i=0;
while (i<10)
{
    Console.log(i);
    i++;
}

let i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
i.forEach(x => Console(x));
*/
