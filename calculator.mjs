


const OPERATORS = {
	"+": (a, b) => a + b,
	"-": (a, b) => a - b,
	"/": (a, b) => a / b,
	"*": (a, b) => a * b
};

export function calculator(ops = ["+", "-", "/", "*"]) {
	const container = document.createElement("div");
	container.className = "calculator";

	const a = document.createElement("input");
	a.type = "number";
	const b = document.createElement("input");
	b.type = "number";
	const operator = document.createElement("select");
	const operators = ops.forEach(op => {
		const opt = document.createElement("option");
		opt.value = op;
		opt.innerText = op;
		operator.appendChild(opt);
	});

	const result = document.createElement("span");
	result.innerText = "= ?";

	const calculate = document.createElement("button");
	calculate.innerText = "Calculate!"
	calculate.addEventListener("click", function (e) {
		if (a.value && b.value) {
			const op = OPERATORS[operator.value];
			if (op) {
				result.innerText = `= ${op(a.value * 1, b.value * 1)}`;
			}

		}
	});

	[
		a,
		operator,
		b,
		result,
		calculate
	].forEach((el) => container.appendChild(el));

	return container;
}

