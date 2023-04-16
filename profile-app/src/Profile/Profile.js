import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
const Profile = ({ fullName, bio, profession, handleName, children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={style}>
      <h1 style={{ color: '#0077b6', marginBottom: 10 }}>{fullName}</h1>
      <img src={children} alt={fullName} style={{ width: 150, borderRadius: '50%' }} />
      <p style={{ color: '#0077b6', margin: '10px 0'}}>{bio}</p>
      <p style={{ color: '#0077b6',margin: '10px 0' }}>{profession}</p>
      <Button variant="outline-primary" onClick={() => handleName(fullName)}>Click me!</Button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'No bio available',
  profession: 'Unknown',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Profile;
