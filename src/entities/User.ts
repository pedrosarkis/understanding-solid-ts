import {v4} from 'uuid';

export default class User {
    public readonly id: string;
    public name: string = '';
    public email: string = '';
    public password: string = '';

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);
        this.id = id || v4();
    }
}


