/* it('Custom field with multiple options', () => {
    const body = {
        "data": [
            {
                "id": 12485,
                "key": "4b9876d8b71cc1966257c361c12932c850624336",
                "name": "Custom multiple",
                "field_type": "set",
                "options": [
                    {
                        "id": 9,
                        "label": "jedna"
                    },
                    {
                        "id": 10,
                        "label": "dve"
                    }
                ],
                "mandatory_flag": false
            }
        ]
    };

    const output = [
        {
            "label": 'Custom multiple (custom)',
            "metadata": {
                "options": {
                    '10': 'dve',
                    '9': 'jedna'
                },
                "type": 'set'
            },
            "name": '4b9876d8b71cc1966257c361c12932c850624336',
            "spec": [
                {
                    "label": 'Option ID',
                    "name": 'id',
                    "type": 'integer'
                },
                {
                    "label": 'Option Label',
                    "name": 'label',
                    "type": 'text'
                }
            ],
            "type": 'array'
        },
        {
            "label": 'Custom Fields Raw',
            "name": 'customRaw',
            "type": 'collection',
            "spec": [
                {
                    "label": 'Custom multiple (custom)',
                    "name": '4b9876d8b71cc1966257c361c12932c850624336',
                    "type": 'text'
                }
            ]
        }
    ]
    assert.deepStrictEqual(getInterface(body), output)
}); */

it('Correct input from endpoint', () => {
    const body = {
        "data": [
            {
                "id": 12474,
                "key": "id",
                "name": "ID",
                "group_id": null,
                "order_nr": 0,
                "field_type": "int"
            },
            {
                "id": 12493,
                "key": "fade9947f3ffe1bf1c8888ad92d722b3d0333682",
                "name": "Custom date",
                "group_id": null,
                "order_nr": 4,
                "field_type": "date"
            },
            {
                "id": 12507,
                "key": "070372b77a8f43dea734dbeeda94243d7deb75fb",
                "name": "Make test",
                "group_id": null,
                "order_nr": 25,
                "field_type": "varchar"
            }
        ]
    };

    const output = [
{
            "label": 'Custom date (custom)',
            "name": 'fade9947f3ffe1bf1c8888ad92d722b3d0333682',
            "type": 'date'
        },
        {
            "label": 'Make test (custom)',
            "name": '070372b77a8f43dea734dbeeda94243d7deb75fb',
            "type": 'text'
        },
        {
            "label": 'Custom Fields Raw',
            "name": 'customRaw',
            "type": 'collection',
            "spec": [
                {
                    "label": 'Custom date (custom)',
                    "name": 'fade9947f3ffe1bf1c8888ad92d722b3d0333682',
                    "type": 'date'
                },
                {
                    "label": 'Make test (custom)',
                    "name": '070372b77a8f43dea734dbeeda94243d7deb75fb',
                    "type": 'text'
                }
            ]
        }
    ]
    assert.deepStrictEqual(getInterface(body), output)
});

it('No custom fields in input from endpoint', () => {
    const body = {
        "data": [
            {
                "id": 12474,
                "key": "id",
                "name": "ID",
                "group_id": null,
                "order_nr": 0,
                "field_type": "int"
            },
            {
                "id": 12475,
                "key": "name",
                "name": "Name",
                "group_id": null,
                "order_nr": 0,
                "field_type": "varchar"
            }
        ]
    };
    const output = [];
    assert.deepEqual(getInterface(body), output)
});

it('Empty data array', () => {
    const body = { "data": [] };
    const output = [];
    assert.deepEqual(getInterface(body), output)
});

it('Empty input', () => {
    const body = {};
    const output = [];
    assert.deepEqual(getInterface(body), output)
});

it('Correct input from webhook', () => {
    const body = {
        "data": [
            {
                "id": 12474,
                "key": "id",
                "name": "ID",
                "group_id": null,
                "order_nr": 0,
                "field_type": "int"
            },
            {
                "id": 12493,
                "key": "fade9947f3ffe1bf1c8888ad92d722b3d0333682",
                "name": "Custom date",
                "group_id": null,
                "order_nr": 4,
                "field_type": "date"
            }
        ]
    };
    const type = 'webhook';
    const staticFields = [
        {
            "name": "id",
            "type": "number",
            "label": "Deal ID"
        }
    ];

    const output = [
        {
            "label": 'Event',
            "name": 'event',
            "type": 'text'
        },
        {
            "label": 'Current',
            "name": 'current',
            "type": 'collection',
            "spec": [
                {
                    "name": "id",
                    "type": "number",
                    "label": "Deal ID"
                },
                {
                    "label": 'Custom date (custom)',
                    "name": 'fade9947f3ffe1bf1c8888ad92d722b3d0333682',
                    "type": 'date'
                },
                {
                    "label": 'Custom Fields Raw',
                    "name": 'customRaw',
                    "type": 'collection',
                    "spec": [
                        {
                            "label": 'Custom date (custom)',
                            "name": 'fade9947f3ffe1bf1c8888ad92d722b3d0333682',
                            "type": 'date'
                        }
                    ]
                }
            ]
        },
        {
            "label": 'Previous',
            "name": 'previous',
            "type": 'collection',
            "spec": [
                {
                    "name": "id",
                    "type": "number",
                    "label": "Deal ID"
                },
                {
                    "label": 'Custom date (custom)',
                    "name": 'fade9947f3ffe1bf1c8888ad92d722b3d0333682',
                    "type": 'date'
                },
                {
                    "label": 'Custom Fields Raw',
                    "name": 'customRaw',
                    "type": 'collection',
                    "spec": [
                        {
                            "label": 'Custom date (custom)',
                            "name": 'fade9947f3ffe1bf1c8888ad92d722b3d0333682',
                            "type": 'date'
                        }
                    ]
                }
            ]
        }
    ]
    assert.deepEqual(getInterface(body, type, staticFields), output)
});

it('Correct input from webhook, no custom fields', () => {
    const body = {
        "data": [
            {
                "id": 12474,
                "key": "id",
                "name": "ID",
                "group_id": null,
                "order_nr": 0,
                "field_type": "int"
            },
            {
                "id": 12493,
                "key": "date",
                "name": "Deal Date",
                "group_id": null,
                "order_nr": 4,
                "field_type": "date"
            }
        ]
    };
    const type = 'webhook';
    const staticFields = [
        {
            "name": "id",
            "type": "number",
            "label": "Deal ID"
        },
        {
            "name": "date",
            "type": "date",
            "label": "Deal Date"
        }
    ];

    const output = [
        {
            "label": 'Event',
            "name": 'event',
            "type": 'text'
        },
        {
            "label": 'Current',
            "name": 'current',
            "type": 'collection',
            "spec": [
                {
                    "name": "id",
                    "type": "number",
                    "label": "Deal ID"
                },
                {
                    "label": 'Deal Date',
                    "name": 'date',
                    "type": 'date'
                }
            ]
        },
        {
            "label": 'Previous',
            "name": 'previous',
            "type": 'collection',
            "spec": [
                {
                    "name": "id",
                    "type": "number",
                    "label": "Deal ID"
                },
                {
                    "label": 'Deal Date',
                    "name": 'date',
                    "type": 'date'
                }
            ]
        }
    ]

    assert.deepEqual(getInterface(body, type, staticFields), output)
})