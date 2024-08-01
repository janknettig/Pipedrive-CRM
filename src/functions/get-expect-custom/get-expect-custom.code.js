function getExpectCustom(fields) {

	const results = [];
	const customKeys = {};

	(fields || []).forEach(f => {
		customKeys[f.key] = f.name;
	});

	// default keys available with Contact Sync and Campaigns product
	// 'address', 'description' were in the original code. I don't see them in documentation, but let's keep them.
	const defaultKeys = ['im', 'postal_address', 'notes','birthday','job_title','marketing_status', 'address', 'description'];

	fields.filter(f => {
		if (!f.key.match(/^[^_]{40}(?:_.*)?/) && !defaultKeys.includes(f.key) ) {
			return false;
		}
		if (f.is_subfield) {
			return false;
		}
		return true;
	}).forEach(f => {
		const data = {
			name: f.key,
			label: f.name,
			type: 'text'
		};

		if (f.is_subfield) {
			const parentKey = f.key.split('_')[0];
			if (parentKey && customKeys[parentKey]) {
				data.label = customKeys[parentKey] + ' | ' + data.label;
			}
		}
		switch (f.field_type) {
			case 'double': {
				data.type = 'number';
				break;
			}
			case 'stage': {
				data.type = 'select';
				data.dynamic = true;
				data.options = 'rpc://Stages';
				break;
			}
			case 'visible_to':
			case 'status': {
				data.type = 'select';
				data.dynamic = true;
				data.options = f.options.map(item => ({ label: item.label, value: item.id }));
				break;
			}
			case 'enum': {
				data.type = 'select';
				data.dynamic = true;
				data.options = f.options.map(item => ({ label: item.label, value: item.id }));
				break;
			}
			case 'set': {
				data.type = 'select';
				data.dynamic = true;
				data.multiple = true;
				data.options = f.options.map(item => ({ label: item.label, value: item.id }));
				break;
			}
			case 'date':
				data.type = 'date';
				data.time = false;
				break;
			case 'daterange': {
				data.type = 'date';
				//data.time = false;
				results.push({
					name: data.name + '_until',
					label: data.label + ' (until)',
					type: "date"
				});
				break;
			}
			case 'time': {
				data.type = 'time';
				break;
			}
			case 'timerange': {
				data.type = 'time';
				// for ranges add additional field with '_until' ending
				results.push({
					name: data.name + '_until',
					label: data.label + ' (until)',
					type: 'time'
				});
				break;
			}
			case 'stage':
			case 'int': {
				data.type = 'integer';
				break;
			}
			case 'user': {
				data.help = 'Must be an Id.';
				data.type = 'select';
				data.options = 'rpc://Users';
				break;
			}
			case 'org': {
				data.help = 'Must be an Id.';
				data.type = 'number';
				data.rpc = {
					label: 'Search',
					url: 'rpc://SearchOrganizationsByName',
					parameters: [{
						name: 'q',
						label: 'Query',
						help: 'Search Organizations. Cannot be empty',
						type: 'text',
						required: true
					}]
				};
				break;
			}
			case 'people': {
				data.help = 'Must be an Id.';
				data.type = 'number';
				data.rpc = {
					label: 'Search',
					url: 'rpc://SearchPersonsByName',
					parameters: [
						{
							name: 'q',
							label: 'Query',
							help: 'Search Persons. Cannot be empty',
							type: 'text',
							required: true
						}
						/*,
						{
							name: 'search_by_email',
							label: 'Search by email',
							type: 'boolean',
							help: 'If false, persons will be searched by name. If true, persons will be searched by email',
							default: false,
							required: true
						}
						*/
					]
				};
				break;
			}
		}
		results.push(data);

	});

	return results;
}