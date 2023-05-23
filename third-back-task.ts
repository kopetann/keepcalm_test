export class ThirdBackTask {
    public static getResult(sequence: string): string {
        const matches: RegExpMatchArray[] = [...sequence.matchAll(/(\d){(\d+)}/g)];
        if (!matches) {
            return sequence;
        }

        for (let i = matches.length - 1; i >= 0; i--) {
            sequence = sequence.replace(matches[i][0], (matches[i][2]).repeat(parseInt(matches[i][1])));
        }

        if(sequence.includes('{')){
            sequence = this.getResult(sequence);
        }

        return sequence;
    }
}