function getExpectedLeadsCustomFields(params = {}) {

    const formatCustomFieldsDates = (acc, c) => {
        const val = params[c];
        // custom time is in HH:mm format which is a string (not a date obj) and should be formatted with miliseconds
        const timeVal = new RegExp('^[0-9]{2}:[0-9]{2}(:[0-9]{2}(\.[0-9]{1,3})?)?$');
        if (timeVal.test(val)) {
            // matches and formats time values
            acc[c] = iml.formatDate(iml.parseDate(val, 'HH:mm:ss.SSS'), 'HH:mm:ss.SSS');
            return acc;
        }
        if (!(typeof val === 'object' && val.getFullYear)) {
            // if not a date object return as is
            acc[c] = val;
            return acc;
        }
        // if custom time specified as a date (now) time is extracted by pipedrive
        acc[c] = iml.formatDate(val, 'YYYY-MM-DD');
        return acc;
    }

    return Object.keys(params).reduce(formatCustomFieldsDates, {});
}