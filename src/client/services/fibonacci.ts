export function fibonacciJavascript(nbr: number): number {
    if (nbr < 2) {
        return nbr;
    }
    return fibonacciJavascript(nbr - 1) + fibonacciJavascript(nbr - 2);
}
