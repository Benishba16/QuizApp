import { connect } from "react-redux";
import { Button, Typography, Modal, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { attemptValue, questionIndex, scoreValue } from "../Redux/actions";
import { useState } from "react";
import Review from "./Review";
import "./Score.css";
import ScoreChart from "../Chart/ScoreChart";
import { HomeTwoTone } from "@ant-design/icons";

const { Title } = Typography;

function Score(props) {
  const [reviewModal, setReviewModal] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    console.log(props);
    props.onQuestionIndex(-1);
    props.onScoreValue(-1);
    props.onAttemptValue(-1);
    navigate("/question");
  };

  const handleHome = () => {
    props.onQuestionIndex(-1);
    props.onScoreValue(-1);
    props.onAttemptValue(0);
    navigate("/");
  };

  const handleReview = () => {
    setReviewModal(true);
  };
  return (
    <div>
      <Title className='score_title'>
        Your Score is {props.score}/ {props.questions.length}
      </Title>
      <div>
        <ScoreChart />
      </div>
      <div className='score_button'>
        <HomeTwoTone
          style={{ fontSize: 40 }}
          bordered={false}
          onClick={handleHome}
        />
      </div>
      <div className='restart_review'>
        <Space>
          <Button
            style={{ borderRadius: "10px" }}
            size='large'
            onClick={handleClick}
            type='primary'
          >
            Restart
          </Button>
          <Button
            style={{ borderRadius: "10px" }}
            size='large'
            type='primary'
            onClick={handleReview}
          >
            Review
          </Button>
        </Space>
      </div>
      <Modal
        title='Review'
        visible={reviewModal}
        onOk={() => setReviewModal(false)}
        onCancel={() => setReviewModal(false)}
      >
        <Review />
      </Modal>
      {localStorage.setItem("Score", props.score)}
      {props.score > localStorage.getItem("HighestScore") &&
        localStorage.setItem("HighestScore", props.score)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    questionIndex: state.questionIndex,
    score: state.score,
    questions: state.questions,
    attempt: state.attempt,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onQuestionIndex: (index) => {
      dispatch(questionIndex(index));
    },
    onScoreValue: (score) => {
      dispatch(scoreValue(score));
    },
    onAttemptValue: (attempt) => {
      dispatch(attemptValue(attempt));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);
