import {rest} from 'msw'


export function handlers(){

    return [
        rest.post('/login',null),
        rest.get('/user',null)
    ]
} 