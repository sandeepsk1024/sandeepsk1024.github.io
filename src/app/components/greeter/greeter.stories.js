import React from 'react';
import Greeter from './index';
export default {title: "Greeter"}
export const withoutMessage = () => <Greeter />;
export const withMessage = () => <Greeter message={"Greetings"} />;