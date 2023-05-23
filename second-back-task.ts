export class SecondBackTask {
    public static getResult(base: number, degree: number): number {
        // In this task we have to calculate the last digit of base raised to the degree
        // The hack is very-very simple - just convert result to string and slice it!
        return parseInt((base ** degree).toString().slice(-1));
    }
}