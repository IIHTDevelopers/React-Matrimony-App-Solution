import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileForm from '../components/ProfileForm';

const addProfileMock = jest.fn();
const updateProfileMock = jest.fn();

describe('boundary', () => {
    test('ProfileFormComponent boundary it is rendered', () => {
        render(<ProfileForm addProfile={addProfileMock} />);
        expect(screen.getByRole('heading')).toBeTruthy();
    });

    test('ProfileFormComponent boundary it has "Register Profile" h2', () => {
        render(<ProfileForm addProfile={addProfileMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Register Profile');
    });

    test('ProfileFormComponent boundary it has "Edit Profile" h2 when in edit mode', () => {
        render(<ProfileForm editProfile={{ name: 'Edit Profile' }} updateProfile={updateProfileMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Edit Profile');
    });

    test('ProfileFormComponent boundary it has name input field', () => {
        render(<ProfileForm addProfile={addProfileMock} />);
        const nameInput = screen.getByLabelText('Name:');
        expect(nameInput).toBeTruthy();
    });

    test('ProfileFormComponent boundary it has age input field', () => {
        render(<ProfileForm addProfile={addProfileMock} />);
        const ageInput = screen.getByLabelText('Age:');
        expect(ageInput).toBeTruthy();
    });

    test('ProfileFormComponent boundary it has gender select field', () => {
        render(<ProfileForm addProfile={addProfileMock} />);
        const genderSelect = screen.getByLabelText('Gender:');
        expect(genderSelect).toBeTruthy();
    });

    test('ProfileFormComponent boundary it has occupation input field', () => {
        render(<ProfileForm addProfile={addProfileMock} />);
        const occupationInput = screen.getByLabelText('Occupation:');
        expect(occupationInput).toBeTruthy();
    });

    test('ProfileFormComponent boundary it has a "Register Profile" button', () => {
        render(<ProfileForm addProfile={addProfileMock} />);
        const registerButton = screen.getByRole('button', { name: 'Register Profile' });
        expect(registerButton).toBeTruthy();
    });

    test('ProfileFormComponent boundary it has an "Update Profile" button when in edit mode', () => {
        render(<ProfileForm editProfile={{ name: 'Edit Profile' }} updateProfile={updateProfileMock} />);
        const updateButton = screen.getByRole('button', { name: 'Update Profile' });
        expect(updateButton).toBeTruthy();
    });
});
