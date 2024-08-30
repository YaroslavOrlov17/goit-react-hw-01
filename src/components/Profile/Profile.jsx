import s from "./Profile.module.css"
import clsx from "clsx"

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx("container", s.profileBox, s.profileWrapper)}>
      <div className={clsx(s.profileWrapper)}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.info}>@{tag}</p>
        <p className={s.info}>{location}</p>
      </div>

      <ul className={s.statsWrapper}>
        <li className={s.itemWrapper}>
          <span className={s.followersTitle}>Followers</span>
          <span className={s.followersNum}>{stats.followers}</span>
        </li>

        <li className={s.itemWrapper}>
          <span className={s.followersTitle}>Views</span>
          <span className={s.followersNum}>{stats.views}</span>
        </li>

        <li className={s.itemWrapper}>
          <span className={s.followersTitle}>Likes</span>
          <span className={s.followersNum}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile
