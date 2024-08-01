function getExpectInput(input, timezone, bool) {
	// added 'bool' for endpoints where boolean should be true/false instead of 1/0
	
/* function to convert mapped multiselect to array
	const map1 = array1.filter(par => par.multiple).map(par => par.name);

	function parseBody(body, map) {
	  Object.keys(body).forEach(key => {
		if(map.includes(key) && body[key].length === 1) {
				body[key] = body[key][0].split(',')
			}
	
	});
	
	  return body;
	} */

	const body = Object.assign({}, input);
	Object.keys(body).forEach(key => {

		if (!bool && (key === 'done' || (key.endsWith('_flag') && body[key] != null))) {
			body[key] = body[key] === true ? 1 : 0;
		}
		// Activity due_date and due_time - due_date in custom time zone, time in UTC ...
		if (key === 'due_d_t' && body[key]) {
			const [date, time] = iml.formatDate(body[key], 'YYYY-MM-DD HH:mm:ss', 'utc').split(' ');
			body.due_date = date;
			body.due_time = time;
			delete body[key];
			return;
		}
		// formats all Date objects
		if (body[key] && typeof body[key] === 'object' && body[key].getFullYear) {
			if (['expected_close_date'].includes(key)) {
				body[key] = iml.formatDate(body[key], 'YYYY-MM-DD', timezone);
			} else {
				body[key] = iml.formatDate(body[key], 'YYYY-MM-DD HH:mm:ss', 'utc');
			}
		}
	});
	return body;
}