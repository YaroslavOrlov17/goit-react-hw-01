import userData from "./jsonData/userData.json"
import friends from "./jsonData/friends.json"
import transactions from "./jsonData/transactions.json"
import Profile from "./components/Profile/Profile"
import FriendList from "./components/FriendList/FriendList"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"
function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </>
  )
}

export default App
