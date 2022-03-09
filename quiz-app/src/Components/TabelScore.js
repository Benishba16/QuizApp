import { Table, Typography } from "antd";

const { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Score",
    dataIndex: "score",
  },
];

const data = [
  {
    name: localStorage.getItem("Username"),
    score: localStorage.getItem("Score"),
  },
];

function TabelScore() {
  return (
    <div>
      <Title style={{ color: "#1890ff" }}>High Score</Title>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
}

export default TabelScore;
