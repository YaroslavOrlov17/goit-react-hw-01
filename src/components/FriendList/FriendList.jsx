import FriendListItem from "../FriendListItem/FriendListItem"
import s from "./FriendList.module.css"
import clsx from "clsx"

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx("container", s.friendsList)}>
      {friends.map((friend) => (
        <li className={s.friendItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  )
}

export default FriendList
