import { Divider, Typography, Image, Button, Modal, Menu } from "antd";
import "./FrontPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import {
  UserAddOutlined,
  SolutionOutlined,
  TagOutlined,
} from "@ant-design/icons";
import TabelScore from "../Components/TabelScore"
import QuizInstructions from "../Components/QuizInstructions"


const { Title, Text } = Typography;

function FrontPage() {
  const [modal, setModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [instruction, setInstruction] = useState(false);

  return (
    <div className="front_page">
      <div className="frontpage_first"
        style={{ height: "100vh", width: "5vw", marginTop: 0 }}
      >
        <Menu
        className="menu"
          defaultSelectedKeys={["1"]}
          mode='inline'
          theme='dark'
        >
          <Menu.Item
            style={{ height: "10vh" }}
            onClick={() => setInstruction(true)}
          >
            <SolutionOutlined style={{ fontSize: 20 }} />
          </Menu.Item>
          <Menu.Item
            style={{ height: "10vh" }}
            onClick={() => setIsModalVisible(true)}
          >
            <UserAddOutlined style={{ fontSize: 20, borderRadius: "10px" }} />
          </Menu.Item>
          <Menu.Item style={{ height: "10vh" }} onClick={() => setOpen(true)}>
            <TagOutlined style={{ fontSize: 20 }} />
          </Menu.Item>
        </Menu>
      </div>
      <Modal footer={null} visible={open} onCancel={() => setOpen(false)}>
        <TabelScore />
      </Modal>
      <Modal
        footer={null}
        visible={instruction}
        onCancel={() => setInstruction(false)}
      >
        <QuizInstructions />
      </Modal>

      <Modal
        footer={null}
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <Login />
      </Modal>
      <div className="frontpage_second">
      <div className='quiz_title_flex'>
        <Title
          className='quiz_title'
          style={{
            color: "#1890ff",
            fontFamily: "'ZCOOL QingKe HuangYou', cursive",
            fontSize: 70,
          }}
        >
          Quiz
        </Title>
      </div>
      <Divider type='horizontal' />
      <div className='quiz-flex'>
        <div>
          <Text
            className='online_quiz'
            strong
            style={{
              fontSize: 45,
              fontFamily: "'ZCOOL QingKe HuangYou', cursive",
            }}
          >
            Welcome to Online Quiz
          </Text>
          <div>
            <Text className='quiz_qoute' strong style={{ fontSize: 20 }}>
              Open your door to more with our questions.
            </Text>
          </div>
          <br />
          <div>
            <Button
              className='quiz_button'
              size='large'
              type='primary'
              onClick={() => setModal(true)}
              style={{ borderRadius: "10px" }}
            >
              Join for free
            </Button>
            <Modal
              footer={null}
              visible={modal}
              onOk={() => setModal(false)}
              onCancel={() => setModal(false)}
            >
              <SignUp />
            </Modal>
          </div>
        </div>
        <div></div>
        <div>
          <Image
            className='quiz_image'
            width={400}
            src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/33EmCuyKJT5MD5DOiYCcCV/1ce227e348fbe7de7f0b9305707700e4/IN_HERO_C_NOV21.png?auto=format%2Ccompress&dpr=2&w=459&h=497&q=40'
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default FrontPage;
