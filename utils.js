export function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomItem(arr) {
    const random = getRandomIndex(arr.length);
    const randomItem = arr[random];
    return randomItem;
}