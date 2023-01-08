import React from 'react';
import { PrincipalContainer, UserContainer } from './StyleComponent';

const Profile = () => {
  return (
    <PrincipalContainer>
      <UserContainer>
        <h1>Profile</h1>

        <form>
          <div>
            <label htmlFor=''>User Name</label>
            <input type='text' value='text' placeholder='Daniel Maceddo' />
            <label htmlFor=''>Institute</label>
            <input type='Text' name='email' placeholder='ITC' />
          </div>
        </form>
      </UserContainer>
    </PrincipalContainer>
  );
};

export default Profile;
