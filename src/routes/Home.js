import Nweet from 'components/Nweet';
import { dbService } from "firebase";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Home = ({userObj}) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();

    await dbService.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid
    });
    setNweet("");
  };

  const onChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
        const newArray = snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data()
        }))
        setNweets(newArray)
    })
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={nweet} onChange={onChange} type="text" placeholder="What 's on your mind?" maxLength={120} />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <Nweet key={nweet.id} nweetObj={nweet} isOwner={userObj.uid === nweet.creatorId}/>
        ))}
      </div>
    </>
  );
};

export default Home;
