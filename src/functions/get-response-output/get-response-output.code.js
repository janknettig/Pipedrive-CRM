function getResponseOutput(body, timezone, metadata, type) {
	if (!body) {
		return body
	}

	const DATE_PATTERN = /^\d{4}\-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}$/
	const DATE_SHORT_PATTERN = /^\d{4}\-\d{2}\-\d{2}$/

	// u polozek enum a set doplnime ID a label
	const meta = {}
	if (metadata && Array.isArray(metadata)) {
		metadata
			.filter(field => field.metadata)
			.forEach(field => {
				meta[field.name] = field.metadata
			})
	}
	if (type === 'webhook' && metadata && Array.isArray(metadata) && metadata[1] && metadata[1].spec) {
		; (metadata[1].spec || [])
			.filter(field => field.metadata)
			.forEach(field => {
				meta[field.name] = field.metadata
			})
	}

	const data = {}
	const customRaw = {}
	let isCustom = false;
	Object
		.keys(body)
		.forEach(key => {
			const value = body[key]
			// for custom fields add a new collecion with raw data (workaround for the old parsing dates-only problem )
			if (/^[^_]{40}(?:_.*)?/.test(key)) {
				customRaw[key] = value;
				isCustom = true;
			}
			if (typeof value === 'string' && DATE_PATTERN.test(value)) {
				if (value === '0000-00-00 00:00:00') {
					data[key] = null
				} else {
					try {
						const date = iml.parseDate(value, 'YYYY-MM-DD hh:mm:ss', 'utc')
						data[key] = new Date(date)
					}
					catch (err) {
						data[key] = value
					}
				}
			} else if (typeof value === 'string' && DATE_SHORT_PATTERN.test(value)) {
				if (value === '0000-00-00') {
					data[key] = null
				} else {
					// this is incorrect: dates-only should not be parsed, but we can't remove it due to backward compatibility
					try {
						const date = iml.parseDate(value, 'YYYY-MM-DD', timezone)
						data[key] = new Date(date)
						if (!isCustom) {   // if not custom field, create a raw parameter
							let raw = `${key}-raw`
							data[raw] = value
						}
					}
					catch (err) {
						data[key] = value
					}
				}
			} else if (meta[key] && value !== '' && value != null) {
				if (meta[key].type === 'set') {
					data[key] = value.split(',').map(id => {
						return {
							id,
							label: meta[key].options[id]
						}
					})
				} else {
					data[key] = {
						id: value,
						label: meta[key].options[value]
					}
				}
			} else {
				data[key] = value
			}

			isCustom = false;
		})

	if (Object.keys(customRaw).length > 0) {
		return Object.assign(data, { customRaw });
	}

	return data;
}