import { v4 as uuid4 } from "uuid";
import Nweet from "components/Nweet";
import { dbService, storageService } from "firebase";
import { useEffect } from "react";
import { useState } from "react";
import NweetFactory from 'components/NweetFactory';

const Home = ({ userObj }) => {
  
  const [nweets, setNweets] = useState([]);
  console.log(nweets);




  useEffect(() => {
    dbService.collection("nweets").orderBy("createdAt", "desc").onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      console.log(newArray);
      setNweets(newArray);
    });
  }, []);



  return (
    <div className="container">
    <NweetFactory userObj={userObj}/>
      <div style={{marginTop: 30}}>
        {nweets.map((nweet) => (
          <Nweet key={nweet.id} nweetObj={nweet} isOwner={userObj.uid === nweet.creatorId} />
        ))}
      </div>
    </div>
  );
};

export default Home;
