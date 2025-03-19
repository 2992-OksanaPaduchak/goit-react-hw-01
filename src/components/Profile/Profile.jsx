import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.info}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <div className={css.box}>
            <span className={css.statistics}>Followers</span>
            <span className={css.number}>{stats.followers}</span>
          </div>
        </li>

        <li className={css.item}>
          <div className={css.box}>
            <span className={css.statistics}>Views</span>
            <span className={css.number}>{stats.views}</span>
          </div>
        </li>

        <li className={css.item}>
          <div className={css.box}>
            <span className={css.statistics}>Likes</span>
            <span className={css.number}>{stats.likes}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
