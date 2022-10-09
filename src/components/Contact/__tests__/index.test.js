import React from "react";
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact Component', () => {
    it('renders', () => {
        render(<Contact></Contact>)
    })

    it('renders h1 tag', () => {
        const {getByTestId} = render(<Contact></Contact>);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    })

    it('renders submit button', () => {
        const {getByTestId} = render(<Contact></Contact>);
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})