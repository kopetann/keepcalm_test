import {FirstBackTask} from './first-back-task';
import {SecondBackTask} from "./second-back-task";
import {ThirdBackTask} from "./third-back-task";

const res: number = FirstBackTask.getResult(["start", "connect", "message", "end", "start", "connect", "message", "end", "start", "connect", "message"]);
const resTwo: number = SecondBackTask.getResult(7.5,3);
const resThree: string = ThirdBackTask.getResult('4{93{2}}');