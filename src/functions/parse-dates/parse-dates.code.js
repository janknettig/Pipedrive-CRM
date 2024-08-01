function parseDates(obj) {
    const func = iml.parseDate;
    const validator = (value) => JSON.stringify(new Date(value)) !== "null";

    for (let [key, value] of Object.entries(obj)) {
        if (value) {
            if (typeof value === "string" && value.length > 7 && validator(value)) {
                obj[key] = func(value);
            } else if (Array.isArray(value)) {
                obj[key] = value.map((item) => iml.parseDates(item));
            } else if (typeof value === "object") {
                obj[key] = iml.parseDates(value);
            }
        }
    }
    return obj;
}