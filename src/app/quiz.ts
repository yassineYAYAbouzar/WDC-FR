
export class Answer {
    constructor(public option: string, public correct?: boolean) {}
}
export class Quiz {
    constructor(public question: string, public answer: Answer[]) {}
}