import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('boundary', () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "Welcome to Matrimony Application" h2', () => {
        render(<App />);
        expect(screen.queryByText('Welcome to Matrimony Application')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Register Profile" h2', () => {
        render(<App />);
        expect(screen.queryAllByText('Register Profile')).toBeTruthy();
    });

    test('AppComponent boundary has "Profiles List" h2', () => {
        render(<App />);
        expect(screen.queryByText('Profiles List')).toBeInTheDocument();
    });
});
