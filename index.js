import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Input, Button, Icon, Checkbox } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe"
      },
      {
        text: "Jim",
        value: "Jim"
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green"
          },
          {
            text: "Black",
            value: "Black"
          }
        ]
      }
    ],

    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => {
      console.log("value", record);
      return record.name.indexOf(value) === 0;
    },
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"]
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London"
      },
      {
        text: "New York",
        value: "New York"
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "Address",
    dataIndex: "name1",
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => [
      <div style={{ padding: 8 }}>
        <div>
          <Checkbox
            value={"John"}
            onChange={e => {
              console.log(e.target.value);
              setSelectedKeys(e.target.value ? [e.target.value] : []);
            }}
            style={{ width: 100, marginBottom: 8, display: "block" }}
          >
            參加
          </Checkbox>
        </div>
        <div>
          <Checkbox
            value={"John"}
            onChange={e => {
              console.log(e.target.value);
              setSelectedKeys(e.target.value ? [e.target.value] : []);
            }}
            style={{ width: 100, marginBottom: 8, display: "block" }}
          >
            不參加
          </Checkbox>
        </div>
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, "name1")}
          size="small"
          style={{ width: 50, marginRight: 8 }}
        >
          確認
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 50 }}
        >
          重置
        </Button>
      </div>
    ],
    filterMultiple: false,
    onFilter: (value, record) => {
      console.log("value", value);
      console.log("record", record);
      return record.name.indexOf(value) === 0;
    },
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"]
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    name1: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    name1: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    name1: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    name1: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park"
  }
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
function handleSearch(selectedKeys, confirm, dataIndex) {
  console.log("selectedKeys", selectedKeys);
  console.log("confirm", confirm);
  console.log("dataIndex", dataIndex);
  confirm();

  // this.setState({
  //   searchText: selectedKeys[0],
  //   searchedColumn: dataIndex
  // });
}
ReactDOM.render(
  <Table columns={columns} dataSource={data} onChange={onChange} />,
  document.getElementById("container")
);
