function objectToFlatArray(array, key) {
	if (!Array.isArray(array) || array.length === 0) {
		return array;
	}
	let out = [];
	for (let item of array) {
		if (typeof item[key] !== 'undefined') {
			out.push(item[key]);
		}
	}
	return out;
}