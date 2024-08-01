it('input with "discount_type":"percentage"', () => {
    const body = {
        "id": 7,
        "type": "product",
        "owner": {
            "id": 7849619
        },
        "prices": [
            {
                "id": 7,
                "cost": 0
            }
        ],
        "discount":10,
        "discount_type":"percentage"
    };
    const output = {
        "id": 7,
        "type": "product",
        "owner": {
            "id": 7849619
        },
        "prices": [
            {
                "id": 7,
                "cost": 0
            }
        ],
        "discount":10,
        "discount_type":"percentage",
        "discount_percentage":10
    };
    assert.deepEqual(addDiscountPercentage(body), output)
});

it('input with "discount_type":"amount"', () => {
    const body = {
        "id": 7,
        "type": "product",
        "owner": {
            "id": 7849619
        },
        "prices": [
            {
                "id": 7,
                "cost": 0
            }
        ],
        "discount":10,
        "discount_type":"amount"
    };
    const output = {
        "id": 7,
        "type": "product",
        "owner": {
            "id": 7849619
        },
        "prices": [
            {
                "id": 7,
                "cost": 0
            }
        ],
        "discount":10,
        "discount_type":"amount"
    };
    assert.deepEqual(addDiscountPercentage(body), output)
});

it('input without discount', () => {
    const body = {
        "id": 7,
        "type": "product",
        "owner": {
            "id": 7849619
        },
        "prices": [
            {
                "id": 7,
                "cost": 0
            }
        ],
        "discount":null,
        "discount_type":"percentage"
    };
    const output = {
        "id": 7,
        "type": "product",
        "owner": {
            "id": 7849619
        },
        "prices": [
            {
                "id": 7,
                "cost": 0
            }
        ],
        "discount":null,
        "discount_type":"percentage"
    };
    assert.deepEqual(addDiscountPercentage(body), output)
});


it('Empty input', () => {
    const body = {};
    const output = {};
    assert.deepEqual(addDiscountPercentage(body), output)
});