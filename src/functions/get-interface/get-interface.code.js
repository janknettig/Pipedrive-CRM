function getInterface(body, type, staticFields) {
	
	if (!staticFields && !body.data || body.data.length === 0) return [];

	const customKeys = {};
	const fields = [];

	(body.data || []).forEach(f => {
		customKeys[f.key] = f.name;
	});


	(body.data || []).filter(value => {
		if (value.key.match(/^[^_]{40}(?:_.*)?/)) {
			return true;
		}
		return false;
	}).forEach(value => {
		const field = {
			name: value.key,
			label: value.name + ' (custom)',
			type: value.text
		};

		if (value.is_subfield) {
			const parentKey = value.key.split('_')[0];
			if (parentKey && customKeys[parentKey]) {
				field.label = customKeys[parentKey] + ' | ' + field.label;
			}
		}
		switch (value.field_type) {
			case 'double':
			case 'int':
			case 'monetary': {
				field.type = 'number';
				break;
			}
			case 'time':
			case 'timerange': {
				field.type = 'time';
				break;
			}
			case 'date': {
				field.type = 'date';
				break;
			}
			case 'varchar':
			case 'text':  {
				field.type = 'text';
				break;
			}
			case 'enum': {
				field.type = 'collection';
				field.spec = [
					{ name: 'id', label: 'Option ID', type: 'integer' },
					{ name: 'label', label: 'Option Label', type: 'text' }
				];
				field.metadata = {
					type: 'enum',
					options: value.options.reduce((result, item) => { result[item.id] = item.label; return result; }, {})
				};
				break;
			}
			case 'set': {
				field.type = 'array';
				field.spec = [
					{ name: 'id', label: 'Option ID', type: 'integer' },
					{ name: 'label', label: 'Option Label', type: 'text' }
				];
				field.metadata = {
					type: 'set',
					options: value.options.reduce((result, item) => { result[item.id] = item.label; return result; }, {})
				};
				break;
			}
			case 'user': {
				field.type = 'collection';
				field.spec = [
					{ label: 'ID', type: 'number', name: 'id' },
					{ label: 'Name', type: 'text', name: 'name' },
					{ label: 'Email', type: 'email', name: 'email' },
					{ label: 'Has pic', type: 'boolean', name: 'has_pic' },
					{ label: 'Pic hash', type: 'text', name: 'pic_hash' },
					{ label: 'Active flag', type: 'boolean', name: 'active_flag' },
					{ label: 'Value', type: 'text', name: 'value' }
				];
				break;
			}
			case 'org': {
				field.type = 'collection';
				field.spec = [
					{ label: 'Name', type: 'text', name: 'name' },
					{ label: 'People count', type: 'number', name: 'people_count' },
					{ label: 'Owner ID', type: 'boolean', name: 'owner_id' },
					{ label: 'Address', type: 'text', name: 'address' },
					{ label: 'Cc email', type: 'email', name: 'cc_email' },
					{ label: 'Value', type: 'text', name: 'value' }
				];
				break;
			}
			case 'people': {
				// New Organization Event webhook has only a single value for person custom field, not an object.
				if (type === 'webhook') break; // use defaults

				field.type = 'collection';
				field.spec = [
					{ label: 'Name', type: 'text', name: 'name' },
					{
						label: 'Email', type: 'array', name: 'email', spec: [
							{ label: 'Value', type: 'email', name: 'value' },
							{ label: 'Primary', type: 'boolean', name: 'primary' }
						]
					},
					{
						label: 'Phone', type: 'array', name: 'phone', spec: [
							{ label: 'Value', type: 'text', name: 'value' },
							{ label: 'Primary', type: 'boolean', name: 'primary' }
						]
					},
					{ label: 'Value', type: 'text', name: 'value' }
				];
				break;
			}
		}

		fields.push(field);
	});

	const raw = {
		name: "customRaw",
		label: "Custom Fields Raw",
		type: "collection",
		spec: JSON.parse(JSON.stringify(fields))
	};

	if (fields.length > 0) {
		fields.push(raw);
	};

	if (type === 'webhook') {

		return [
			{
				"name": "event",
				"type": "text",
				"label": "Event"
			},
			{
				"name": "current",
				"type": "collection",
				"label": "Current",
				"spec": staticFields.concat(fields)
			},
			{
				"name": "previous",
				"type": "collection",
				"label": "Previous",
				"spec": staticFields.concat(fields)
			}
		];
	}

	return fields;
}