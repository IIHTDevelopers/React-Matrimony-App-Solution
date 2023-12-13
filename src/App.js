import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileForm from './components/ProfileForm';
import ProfileList from './components/ProfileList';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [editProfile, setEditProfile] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:4000/profiles');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };
    fetchProfiles();
  }, []);

  const addProfile = async (profile) => {
    try {
      const addedProfile = await axios.post('http://localhost:4000/profiles', profile);
      setProfiles([...profiles, addedProfile.data]);
    } catch (error) {
      console.error('Error adding profile:', error);
    }
  };

  const deleteProfile = async (profileId) => {
    try {
      await axios.delete(`http://localhost:4000/profiles/${profileId}`);
      setProfiles(profiles.filter((profile) => profile.id !== profileId));
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  const updateProfile = async (profile) => {
    try {
      await axios.put(`http://localhost:4000/profiles/${profile.id}`, profile);
      setProfiles(
        profiles.map((p) => (p.id === profile.id ? { ...p, ...profile } : p))
      );
      setEditProfile(null);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to Matrimony Application</h2>
      <h2>Register Profile</h2>
      <ProfileForm addProfile={addProfile} editProfile={editProfile} updateProfile={updateProfile} />
      <h2>Profiles List</h2>
      <ProfileList
        profiles={profiles}
        deleteProfile={deleteProfile}
        setEditProfile={setEditProfile}
      />
    </div>
  );
}

export default App;
