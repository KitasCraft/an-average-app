
const seededRandom = (seed) => {
    var m = 67;
    var a = 4;
    var b = 42;
    var s = (seed + m - 1) % m;
    return function (n) {
        return ((b * s + n) * (b * s + a) % m) / m;
    };
}

export const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random(i) < 0.5) {
            result.push(i + ':00');
        }
    }
    return result;
};
export const submitAPI = (formData) => {
    return true;
};