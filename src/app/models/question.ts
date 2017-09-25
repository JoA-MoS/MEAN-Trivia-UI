import { Answer } from './answer';

export class Question {
    public _id: string;
    public questionText: string;
    public answers: Answer[];
}
