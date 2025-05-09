import React, { useState } from 'react';

const UserCard = ({ name, avatar, posts, followers, address }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div style={styles.card}>
      <img src={avatar} alt={name} style={styles.avatar} />
      <h2>{name}</h2>
      <p>{address}</p>

      <div style={styles.info}>
        <div>
          <h3>Posts</h3>
          <p>{posts}</p>
        </div>
        <div>
          <h3>Followers</h3>
          <p>{followers}</p>
        </div>
      </div>

      <button onClick={toggleFollow} style={styles.button}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '12px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px'
  },
  info: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '15px 0'
  },
  button: {
    padding: '8px 16px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: 'teal',
    color: '#fff',
    cursor: 'pointer'
  }
};

export default UserCard;
