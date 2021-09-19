import Nweet from "components/Nweet";
import { authService, dbService } from "firebase";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useState } from "react";

const Profile = ({ userObj,refreshUser }) => {
  const [nweets, setNweets] = useState([]);
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
 
const onChange = (event) => {
    const {target: {value}} = event
    setNewDisplayName(value)
}

const onSubmit = async(event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
        await userObj.updateProfile({displayName: newDisplayName})
        refreshUser()
    }
}

  // 내가 쓴 트윗만 보여줌
  useEffect(() => {
    const getMyNweets = async () => {
      const nweets = await dbService
        .collection("nweets")
        .where("creatorId", "==", userObj.uid)
        .orderBy("createdAt", "asc")
        .get();

      //   console.log(nweets.docs.map((doc) => doc.data()));
      //   console.log(nweets);
      setNweets(nweets.docs.map((doc) => doc.data()));
    };
    getMyNweets();
  }, []);

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} autoFocus className="formInput"/>
        <input type="submit" value="Update Profile" className="formBtn" style={{marginTop:10}}/>
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>Log Out</span>
      <div>
        {nweets.map((nweet) => (
          <Nweet key={nweet.createdAt} nweetObj={nweet} isOwner={userObj.uid === nweet.creatorId} />
        ))}
      </div>

    </div>
  );
};

export default Profile;
