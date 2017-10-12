/**
 * Get the value of x given x0, x1, y0 and y1
 * @param {number} x
 * @param {number} x0 - initial x
 * @param {number} x1 - final x
 * @param {number} y0 - value for initial x
 * @param {number} y1 - value for final x
 * @return {number} - f(x)
 */
function linearInterpolation(x, x0, x1, y0, y1) {
    return (y1 - y0) * (x - x0) / (x1 - x0) + y0;
}