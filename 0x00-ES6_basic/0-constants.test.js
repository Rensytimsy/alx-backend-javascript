import {taskFirst} from './0-constants.js';

test("combines two or more strings", () => {
    expect(taskFirst()).toEqual("I prefer const when I can.");
});