function getErrors(body, statusCode) {
	if (!body) {
		return 'Error ' + statusCode
	}
	if (body.message) {
		return `${statusCode}: ${body.message}`
	}
	return `${statusCode}: ${body.error} (${body.error_info})`
}