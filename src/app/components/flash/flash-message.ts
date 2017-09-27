import { FlashMessageTypes } from './flash-message-types.enum';

export class FlashMessage {
    type: FlashMessageTypes;
    message: string;
    private _styles: Array<string> = ['success', 'danger', 'warning', 'info'];

    constructor(msg: string, type: FlashMessageTypes = FlashMessageTypes.info) {
        this.type = type;
        this.message = msg;
    }

    get style(): string {
        return FlashMessageTypes[this.type];
    }
}
