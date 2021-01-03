export const isArray = (arr) => {
    const nativeIsArray = Array.isArray;
    if (nativeIsArray) {
        return nativeIsArray(arr);
    } else {
        return arr.toString() === '[object Array]';
    }
}