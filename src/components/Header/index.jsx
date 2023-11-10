import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./styles.scss";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Image src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOEkwREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b1d24c4196656ef3cb626add71a4fab4b0d58fe1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/zigvy-logo.jpg" />
        <h1>ZIGVY</h1>
      </div>

      <h1 className="header-blogs">Blogs</h1>
      <div className="header-account">
        <Avatar size="large" icon={<UserOutlined />} />
        <h1>Khoa Trinh</h1>
      </div>
    </div>
  );
}
