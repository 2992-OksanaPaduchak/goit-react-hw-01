import "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className="profile">
      <div className="profile-box">
        <img className="profile-imege" src={image} alt="User avatar" />
        <p className="profile-username">{name}</p>
        <p className="profile-tag">{tag}</p>
        <p className="profile-location">{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
