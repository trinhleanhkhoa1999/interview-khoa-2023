import React, { createElement, useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./styles.scss";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import { Avatar, Comment, Tooltip } from "antd";
// import { fetchAllListComment } from "../../redux/comment/action";
// import { useDispatch, useSelector } from "react-redux";

const MyComment = ({ show, setShow }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };
  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };
  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  // const dispatch = useDispatch();
  // const { comment } = useSelector((state) => state);
  // console.log("comment: ", comment.data);
  // useEffect(() => {
  //   dispatch(fetchAllListComment());
  // }, []);
  return (
    <div className="comment">
      <h1 onClick={() => setShow(!show)}>1 replies (click me !)</h1>
      {show === true && (
        <Comment
          actions={actions}
          author={<a>Han Solo</a>}
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title="2016-11-22 11:22:33">
              <span>8 hours ago</span>
            </Tooltip>
          }
        />
      )}
    </div>
  );
};
export default MyComment;
