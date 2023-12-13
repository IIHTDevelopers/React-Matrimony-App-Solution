import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfileList from '../components/ProfileList';

const profiles = [
    { id: 1, name: 'John Doe', age: 30, gender: 'Male', occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 28, gender: 'Female', occupation: 'Designer' },
];

const deleteProfile = jest.fn();
const setEditProfile = jest.fn();

describe('boundary', () => {
    beforeEach(() => {
        render(
            <ProfileList
                profiles={profiles}
                deleteProfile={deleteProfile}
                setEditProfile={setEditProfile}
            />
        );
    });

    test('ProfileListComponent boundary it displays "Edit" button to edit the profile', () => {
        const editButtons = screen.getAllByText('Edit');
        expect(editButtons).toBeTruthy();
    });

    test('ProfileListComponent boundary calls deleteProfile when "Delete" button is clicked', () => {
        const deleteButtons = screen.getAllByText('Delete');
        fireEvent.click(deleteButtons[0]);
        expect(deleteProfile).toHaveBeenCalledWith(profiles[0].id);
    });

    test('ProfileListComponent boundary removes the profile after clicking the "Delete" button', () => {
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);
        expect(screen.queryByText(`Name: ${profiles[0].name}`)).toBeNull();
        expect(screen.queryByText(`Age: ${profiles[0].age}`)).toBeNull();
        expect(screen.queryByText(`Gender: ${profiles[0].gender}`)).toBeNull();
        expect(screen.queryByText(`Occupation: ${profiles[0].occupation}`)).toBeNull();
        // Add assertions for other profile fields as needed
    });

    test('ProfileListComponent boundary displays "No profiles found" when there are no profiles', () => {
        render(
            <ProfileList profiles={[]} deleteProfile={deleteProfile} setEditProfile={setEditProfile} />
        );
        const noProfilesMessage = screen.getByText('No profiles found');
        expect(noProfilesMessage).toBeTruthy();
    });
});
