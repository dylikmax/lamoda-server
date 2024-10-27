function multifilterParser(string, arr) {
    return string !== undefined
    ? string.split(",").map((el) => el.trim())
    : arr.map((el) => el.id);
}

function rangeParser(string) {
    return string
    ? string.split(",").map((id) => parseInt(id, 10))
    : undefined;
}

module.exports = { multifilterParser, rangeParser }