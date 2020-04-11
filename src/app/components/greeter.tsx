import React, {FunctionComponent} from 'react';

type GreeterProps = {
    message?: string,
}

const Greeter:FunctionComponent<GreeterProps> = ({message}:GreeterProps) => <h1>{"Greetings for the Day!"}</h1>

export default Greeter 