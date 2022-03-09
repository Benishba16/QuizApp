import React, { useState } from "react";
import { Button, Select } from "antd";
import Categories from "./Categories";
import "./StartQuiz.css";
import QuizInfo from "../Components/QuizInfo";
import { connect } from "react-redux";
import { categoryValue, typeValue, category } from "../Redux/actions";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

function StartQuiz(props) {
  const navigate = useNavigate();

  let [category, setCategory] = useState("");
  let [mode, setMode] = useState("");
  let [cat, setCat] = useState("");

  const options = [
    { id: "easy", value: "Easy" },
    { id: "medium", value: "Medium" },
    { id: "hard", value: "Hard" },
  ];

  const handleCategory = (data, value) => {
    setCat(value.data);
    category = data;
    setCategory(category);
    console.log("Category", category);
    props.onCategotyValue(category);
  };

  const handleType = (data) => {
    mode = data;
    setMode(mode);
    console.log("Mode", mode);
    props.onModeValue(mode);
  };

  return (
    <div className='card'>
      {props.onCat(cat)}
      <div className='quiz_info'>
        <QuizInfo />
      </div>
      <br />
      <div className='select'>
        <div className='select_category'>
          <Select
            size='large'
            placeholder='Select a Category'
            onChange={handleCategory}
            style={{ width: 240 }}
            className='selectCat'
          >
            {Categories.map((Category) => (
              <Option
                key={Category.id}
                value={Category.id}
                data={Category.category}
              >
                {Category.category}
              </Option>
            ))}
          </Select>
        </div>
        <div className='select_type'>
          <Select
            size='large'
            placeholder='Select Difficulty mode'
            onChange={handleType}
            style={{ width: 240 }}
            className='selectCat'
          >
            {options.map((option) => (
              <Option key={option.id} value={option.id}>
                {option.value}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className='start_button'>
        <Button
          size='large'
          type='primary'
          htmlType='submit'
          onClick={() => navigate("/mode")}
          style={{ borderRadius: "10px" }}
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
    mode: state.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCategotyValue: (category) => {
      dispatch(categoryValue(category));
    },
    onModeValue: (mode) => {
      dispatch(typeValue(mode));
    },
    onCat: (cat) => {
      dispatch(category(cat));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartQuiz);
