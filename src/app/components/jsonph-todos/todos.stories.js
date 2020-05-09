import React from 'react';
import TodosList from './index';
export default {title: "JSON PH Todos"}
export const wihtoutUserId = () => <TodosList />;
export const withUserId1 = () => <TodosList userId={1} />;
export const withUserId2 = () => <TodosList userId={2} />;