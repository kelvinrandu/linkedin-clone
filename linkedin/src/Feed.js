import React, {useState} from "react";
import "./Feed.css";
import Post from "./Post";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";



function Feed() {
    const [posts, setPosts] = useState([]);
     
    const handleSubmit = (e) => {
        e.preventDefault();

    }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onclick={handleSubmit}type="submit">send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption  Icon ={ImageIcon} title="Photo" color= "#70b5f9"/>
            <InputOption  Icon ={SubscriptionsIcon} title="Video" color= "#E7A33E"/>
            <InputOption  Icon ={EventNoteIcon} title="Event" color= "#C0CBCD"/>
            <InputOption  Icon ={CalendarViewDayIcon} title="Write article" color= "#7FC15E"/>
        </div>
      </div>
      {posts.map((post)=>(
          <Post name="nasty" description="all of me is nasty" message="nasty but me"/>

      ))}

      
    </div>
  );
}

export default Feed;
