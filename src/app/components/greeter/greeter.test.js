import React from 'react';
import renderer from 'react-test-renderer';
import Greeter from '.'

test ("Greeter: it renders without exception: props:none", () => {
    const component = renderer.create(
        <Greeter />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

test ("Greeter: it renders without exception: props:message", () => {
    const component = renderer.create(
        <Greeter message={"Hello World!"}></Greeter>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})