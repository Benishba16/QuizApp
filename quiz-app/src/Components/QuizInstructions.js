import React from "react";
import { Typography } from "antd";
import "../Components/QuizInstructions.css";

const { Title, Text } = Typography;

function QuizInstructions() {
  return (
    <div>
      <Title className='inst_title'>Instructions</Title>
      <Text className='inst_text' style={{ fontSize: 25 }}>
        Solve 5 MCQ Questions
      </Text>
      <div style={{ fontSize: 20 }}>
        <div>
          <Text>1.Total 5 questions asked</Text>
        </div>
        <div>
          <Text>2.Each question carries 1 mark. No negative marks</Text>
        </div>
        <div>
          <Text>
            3.You can skip questions, if you are not well about the question
            using next button
          </Text>
        </div>
        <div>
          <Text>
            4.You can only review the answers after completing the entire quiz
            questions
          </Text>
        </div>
        <div>
          <Text>
            5.All the best! You can start the quiz by logging in or by Siging up
          </Text>
        </div>
      </div>
    </div>
  );
}

export default QuizInstructions;
