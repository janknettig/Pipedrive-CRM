function addDiscountPercentage(body) {
    // workaround for breaking change in API in output of modules Update Product Attachment Details and List products in a Deal.
    // should be removed after the adjusting period
    if(!body) return {};
    const {discount, discount_type} = body;

    if (discount && discount_type === 'percentage') {
        body.discount_percentage = discount;
    }

    return body;

}