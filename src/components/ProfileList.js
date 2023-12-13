import React from 'react';

const ProfileList = ({ profiles, deleteProfile, setEditProfile }) => {
    const handleDelete = (id) => {
        deleteProfile(id);
    };

    const handleEdit = (profile) => {
        setEditProfile(profile);
    };

    return (
        <div>
            <ul>
                {profiles.length > 0 ? (
                    profiles.map((profile) => (
                        <li key={profile.id}>
                            <strong>Name:</strong> {profile.name}
                            <br />
                            <strong>Age:</strong> {profile.age}
                            <br />
                            <strong>Gender:</strong> {profile.gender}
                            <br />
                            <strong>Occupation:</strong> {profile.occupation}
                            <br />
                            {/* Add other profile fields as needed */}
                            <button onClick={() => handleEdit(profile)}>Edit</button>
                            <button onClick={() => handleDelete(profile.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <li>No profiles found</li>
                )}
            </ul>
        </div>
    );
};

export default ProfileList;
