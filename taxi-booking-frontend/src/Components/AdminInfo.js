import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <span className={`tag tag-${color}`} key={tag}>
              {tag.toUpperCase()}
            </span>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a> | <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const UserInfoTable = () => (
  <table className="table">
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key}>{column.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.key} className="table-row">
          {columns.map((column) => (
            <td key={column.key}>
              {column.render ? column.render(item[column.dataIndex], item) : item[column.dataIndex]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const AdminInfo = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="table-container">
      <div className="tabs">
        <div className={`tab ${activeTab === "1" ? "active" : ""}`} onClick={() => setActiveTab("1")}>
          Cab Info
        </div>
        <div className={`tab ${activeTab === "2" ? "active" : ""}`} onClick={() => setActiveTab("2")}>
          Driver Info
        </div>
      </div>
      <div className="tab-pane">
        <UserInfoTable />
      </div>
    </div>
  );
};

export default AdminInfo;
