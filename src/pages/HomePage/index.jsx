import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Space, Tag } from "antd";
import { fetchAllListPost } from "../../redux/post/action";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../../redux/users/action";
import "./styles.scss";
import MyComment from "../../components/MyComment";
import MySearch from "../../components/Search";

export default function HomePage() {
  const { listPost, user } = useSelector((state) => state);
  const [isShowHideComent, setIsShowHideComent] = useState(false);
  const dispatch = useDispatch();

  const PostAuthor = ({ author, date }) => {
    // console.log("author", author);
    return (
      <div>
        <h2>Author: {author}</h2>
        <h2>Created at: {date}</h2>
      </div>
    );
  };
  let getData = [];
  if (listPost?.data && user?.data && listPost.isSuccess && user.isSuccess) {
    getData = listPost.data.map((item) => {
      let result = {};
      user.data.forEach((itemUser) => {
        // console.log(itemUser.id === item.userId);
        // console.log(item.userId);
        if (item?.userId === itemUser?.id) {
          //  { ...item, user: itemUser };
          result = { ...item, user: itemUser };
        }
      });
      return result;
    });
  }

  console.log("getData: ", getData);

  useEffect(() => {
    dispatch(fetchAllListPost());
    dispatch(fetchAllUser());
  }, []);

  return (
    <div className="homePage-container">
      {/* Header */}
      <header className="homePage-header-menu">
        <Header />
      </header>
      <MySearch data={getData} />
      {getData.length > 0 &&
        getData.map((item, idx) => {
          return (
            <div key={idx}>
              <div className="post-title">
                <h1>
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                </h1>
              </div>
              <div className="info-content">
                <div className="post-author">
                  <PostAuthor author={item.user.username} date="16/01/2023" />
                </div>
                <div className="post-btn">
                  <Space size={[0, 1]} wrap>
                    <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="geekblue">geekblue</Tag>
                    <Tag color="purple">purple</Tag>
                  </Space>
                </div>
              </div>
              <div className="post-description">
                {item.body.charAt(0).toUpperCase() + item.title.slice(1)}
              </div>
              <div>
                <MyComment
                  show={isShowHideComent}
                  setShow={setIsShowHideComent}
                />
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
