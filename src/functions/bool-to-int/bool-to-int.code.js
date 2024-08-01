function boolToInt(bool) {
    if (typeof bool !== "boolean") return undefined;
    return bool ? 1 : 0;
}