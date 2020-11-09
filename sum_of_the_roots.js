// Implement function which will
// return sum of roots of a quadratic equation rounded to 2 decimal places,
// if there are any possible roots, else return None/null/nil/nothing.
// If you use discriminant,when discriminant = 0,
// x1 = x2 = root => return sum of both roots.
// There will always be valid arguments.
a = 2;
b = 3;
c = 5;
function roots(a,b,c){

    let d = (b ** 2) - (4 * a * c);
    let x1 = (-b - (d ** 0.5)) / (2 * a);
    let x2 = (-b + (d ** 0.5)) / (2 * a);
    if (d > 0) {
        return Number((x1 + x2).toFixed(2));
    } else if (d === 0) {
        return Number((x1 * 2).toFixed(1));
    } else {
        return null;
    }

}
print roots(a, b, c);