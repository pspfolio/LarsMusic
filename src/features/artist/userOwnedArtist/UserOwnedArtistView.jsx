import React from 'react';
import DashboardLayout from 'features/dashboard/DashboardLayout';
import UserOwnedArtistList from './UserOwnedArtistList';

const UserOwnedArtistView = () => (
  <DashboardLayout>
    <UserOwnedArtistList />
  </DashboardLayout>
);

export default UserOwnedArtistView;
