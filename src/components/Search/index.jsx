import { Input, Table } from "antd";
import React, { useEffect } from "react";
import "./styles.scss";
import { useState } from "react";

const MySearch = ({ data }) => {
  console.log("data: ", data);
  const [searchText, setSearchText] = useState("");
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setDataSource(data);
  }, [data.length > 1 && data !== undefined]);
  console.log("dataSource: ", dataSource);
  return (
    <div className="search-container">
      <Input.Search
        placeholder="Search here..."
        onSearch={(value) => {
          setSearchText(value);
        }}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <Table
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            filteredValue: [searchText],
            onFilter: (value, record) => {
              return String(record.name)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
        ]}
        dataSource={dataSource}
      ></Table>
    </div>
  );
};
export default MySearch;
