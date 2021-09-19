import { v4 as uuid4 } from "uuid";
import Nweet from "components/Nweet";
import { dbService, storageService } from "firebase";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import NweetFactory from 'components/NweetFactory';

const Home = ({ userObj }) => {
  
  const [nweets, setNweets] = useState([]);
  




  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      console.log(newArray);
      setNweets(newArray);
    });
  }, []);



  return (
    <>
    <NweetFactory userObj={userObj}/>
      <div>
        {nweets.map((nweet) => (
          <Nweet key={nweet.id} nweetObj={nweet} isOwner={userObj.uid === nweet.creatorId} />
        ))}
      </div>
    </>
  );
};

export default Home;
