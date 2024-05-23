// React imports
import React from 'react';
// Bootstrap imports
import Container from 'react-bootstrap/Container';
// CSS imports
import appStyles from '../../App.module.css';
// Components imports
import Asset from '../../components/Asset';
import { useProfileData } from '../../contexts/ProfileDataContext';
import Profile from './Profile';

const PopularProfiles = ({ mobile }) => {
  
  const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularProfiles.results.length ? (
        <>
          <p className="text-center">Most Followed Profiles</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;