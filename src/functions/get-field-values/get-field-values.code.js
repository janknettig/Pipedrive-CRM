function getFieldValues(fields) {
	const obj = {}
	fields.forEach(field => {
		obj[field.name] = field.value
	})
	return obj
}