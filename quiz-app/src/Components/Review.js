import { useState } from "react";
import { connect } from "react-redux";
import { decode } from "html-entities";
import { Typography } from "antd";

const { Title, Text } = Typography;

function Review(props) {
  const [questions, setQuestions] = useState([props.questions]);
  let [index, setIndex] = useState(props.questionIndex);
  const [select, setSelect] = useState(props.selectedValue);
  console.log("Question & Index", questions[index]);

  return props.questions.length ? (
    <div>
      {console.log(props.questions[index].category)}
      {props.questions.map((ques, index) => (
        <div>
          <Title level={2} key={ques.correct_answer}>
            {decode(ques.question)}
          </Title>
          {props.selectedValue[index] === ques.correct_answer ? (
            <Text strong type='success'>
              Correct Answer: {decode(ques.correct_answer)}
            </Text>
          ) : (
            <div>
              <Text type='success' strong>
                Correct Answer: {decode(ques.correct_answer)}
              </Text>
              <br />
              <Text type='danger' strong>
                Selected Answer: {decode(props.selectedValue[index++])}
              </Text>
            </div>
          )}
          {console.log(props.selectedValue[0])}
          {console.log("Select", select)}
        </div>
      ))}
    </div>
  ) : null;
}

const mapStateToProps = (state) => {
  return {
    questionIndex: state.questionIndex,
    questions: state.questions,
    selectedValue: state.selectedValue,
  };
};

export default connect(mapStateToProps)(Review);
