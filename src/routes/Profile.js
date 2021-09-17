import Nweet from "components/Nweet";
import { authService, dbService } from "firebase";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";

const Profile = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

//   const getMyNweets = async () => {
//     const nweets = await dbService
//       .collection("nweets")
//       .where("creatorId", "==", userObj.uid)
//       .orderBy("createdAt", "asc")
//       .get();

//     console.log(nweets.docs.map((doc) => doc.data()));
//     console.log(nweets);
//   };

  useEffect(() => {
    const getMyNweets = async () => {
        const nweets = await dbService
          .collection("nweets")
          .where("creatorId", "==", userObj.uid)
          .orderBy("createdAt", "asc")
          .get();
    
        console.log(nweets.docs.map((doc) => doc.data()));
        setNweets(nweets.docs.map((doc) => doc.data()))
        console.log(nweets);
      };
    getMyNweets()

  }, []);

  return (
    <>
      <button onClick={onLogOutClick}>Log out</button>
      <div>
          
        {nweets.map((nweet) => (
          <Nweet key={nweet.createdAt} nweetObj={nweet} isOwner={userObj.uid === nweet.creatorId} />
        ))}
      </div>
    </>
  );
};

export default Profile;
