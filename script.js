function isSameType(value1, value2) {
    // Check if both values are NaN
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }

    // Check if one of the values is NaN
    if (Number.isNaN(value1) || Number.isNaN(value2)) {
        return false;
    }

    // Check if both values have the same type
    return typeof(value1) === typeof(value2);
}

// Convert the inputs to numbers if possible
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Try to convert to number first
let numValue1 = Number(value1);
let numValue2 = Number(value2);

// If the conversion fails, they remain strings
value1 = Number.isNaN(numValue1) ? value1 : numValue1;
value2 = Number.isNaN(numValue2) ? value2 : numValue2;

alert(isSameType(value1, value2));

