export class FirstBackTask {

    public static getResult(sequence: string[]): number {
        if (sequence.length === 0) {
            return 0;
        }

        let endedSessions: number = 0;
        let started: boolean = false;
        let connected: boolean = false;
        let transported: boolean = false;

        for (const message of sequence) {
            if (message === 'start') {
                started = true;
            } else if (message === 'connect' && started) {
                connected = true;
            } else if (message === 'message' && connected) {
                transported = true;
            } else if (message === 'end' && connected) {
                started = transported = connected = false;
                endedSessions++;
            }
        }
        return endedSessions;
    }
}
