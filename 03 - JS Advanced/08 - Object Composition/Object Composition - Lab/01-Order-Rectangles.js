function solve(input) {
    let result = input.map(([width, height]) => ({
        width,
        height,
        area: () => width * height,
        compareTo(rect) {
            return rect.area() - this.area() || rect.width - this.width;
        }
    }))
    .sort((a, b) => a.compareTo(b));
    return result;
}

solve([[10, 5], [5, 12]])