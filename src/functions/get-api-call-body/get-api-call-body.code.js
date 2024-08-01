function getApiCallBody(body) {
	if (!body) {
		return body
	}
	if (typeof body !== 'string') {
		return body
	}
	try {
		return JSON.parse(body)
	} catch (e) {
		return body
	}
}