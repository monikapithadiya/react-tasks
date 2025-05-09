import React from 'react';
import Title from './Title';
import UserCard from './UserCard';

const App = () => {
  const users = [
    {
      name: 'Tony Stark',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-rzZuhiLEqr-GF6WnZGpUkS2zSErzEUYlg&s',
      posts: 120,
      followers: 5400,
      address: 'New York, USA'
    },
    {
      name: 'Steve Rogers',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByFCks-L2CzaZwcNeur-Fy-YxXwprUyUOvw&s',
      posts: 80,
      followers: 4200,
      address: 'Brooklyn, USA'
    },
    {
      name: 'Natasha Romanoff',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdHk_SaZJeloEuLilL-ZlqymgQGAxQpQ72QA&s',
      posts: 100,
      followers: 6700,
      address: 'Russia'
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Title />
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            avatar={user.avatar}
            posts={user.posts}
            followers={user.followers}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
