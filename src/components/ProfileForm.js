import React, { useState, useEffect } from 'react';

const ProfileForm = ({ addProfile, editProfile, updateProfile }) => {
    const [profile, setProfile] = useState({
        name: '',
        age: '',
        gender: '',
        occupation: '',
        // Add more fields as needed
    });

    useEffect(() => {
        if (editProfile) {
            setProfile({ ...editProfile });
        } else {
            setProfile({
                name: '',
                age: '',
                gender: '',
                occupation: '',
                // Initialize other fields here
            });
        }
    }, [editProfile]);

    const isEditForm = !!editProfile;

    const isFormIncomplete = !profile.name || !profile.age || !profile.gender || !profile.occupation;
    // Add additional validation logic for other fields as needed

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditForm) {
            updateProfile(profile);
        } else {
            addProfile(profile);
        }
        setProfile({
            name: '',
            age: '',
            gender: '',
            occupation: '',
            // Reset other fields here
        });
    };

    return (
        <div>
            <h2>{isEditForm ? 'Edit Profile' : 'Register Profile'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        id="name"
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="age">
                    Age:
                    <input
                        id="age"
                        type="number"
                        value={profile.age}
                        onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="gender">
                    Gender:
                    <select
                        id="gender"
                        value={profile.gender}
                        onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        {/* Add more gender options if necessary */}
                    </select>
                </label>
                <label htmlFor="occupation">
                    Occupation:
                    <input
                        id="occupation"
                        type="text"
                        value={profile.occupation}
                        onChange={(e) => setProfile({ ...profile, occupation: e.target.value })}
                        required
                    />
                </label>
                {/* Add other fields here */}
                <button type="submit" disabled={isFormIncomplete}>
                    {isEditForm ? 'Update Profile' : 'Register Profile'}
                </button>
            </form>
        </div>
    );
};

export default ProfileForm;
