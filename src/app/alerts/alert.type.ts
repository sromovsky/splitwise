import {AlertType} from './alert-type.enum';

export type Alert = {
    type: AlertType;
    message: string;
}
