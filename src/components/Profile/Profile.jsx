import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div>
        <img className={s.avatar} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.box}>
            <span className={s.statistics}>Followers</span>
            <span className={s.number}>{stats.followers}</span>
          </div>
        </li>

        <li className={s.item}>
          <div className={s.box}>
            <span className={s.statistics}>Views</span>
            <span className={s.number}>{stats.views}</span>
          </div>
        </li>

        <li className={s.item}>
          <div className={s.box}>
            <span className={s.statistics}>Likes</span>
            <span className={s.number}>{stats.likes}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
