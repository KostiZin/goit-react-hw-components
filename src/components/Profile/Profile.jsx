import { Stats } from './ProfileStats';

import user from './user.json';

export const Profile = () => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <Stats followers={followers} views={views} likes={likes} />
    </div>
  );
};
