import Question from "./Question";
import Score from "./Score";
import { useState } from "react";

function Quiz() {
  const questions = [
    {
      questionText: "Will Radiantly Hire Yashasvi Saxena as React Intern?",
      options: ["Yes", "Ofcourse", "You bet", "A million times"],
      correctOption: ["Yes", "Ofcourse", "You bet", "A million times"],
    },
    {
      questionText: "Who is CEO of Tesla?",
      options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
      correctOption: "Elon Musk",
    },
    {
      questionText: "The iPhone was created by which company?",
      options: ["Apple", "Intel", "Amazon", "Microsoft"],
      correctOption: "Apple",
    },
    {
      questionText: "How many Harry Potter books are there?",
      options: ["1", "4", "6", "7"],
      correctOption: "7",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );

  const handleAnswerOptionClick = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = option;
    setSelectedOptions(newSelectedOptions);

    const isCorrect =
      option === questions[currentQuestion].correctOption ||
      questions[currentQuestion].correctOption.includes(option);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNavigation = (direction) => {
    const newQuestionIndex = currentQuestion + direction;
    if (newQuestionIndex >= 0 && newQuestionIndex < questions.length) {
      setCurrentQuestion(newQuestionIndex);
    }
  };

  const handleFinishQuiz = () => {
    setShowScore(true);
  };

  return (
    <div className="flex flex-grow justify-center items-center p-6 w-full">
      <div className="w-full max-w-2xl rounded-lg p-6 shadow-md bg-secondary shadow-primary">
        {showScore ? (
          <div className="flex flex-col space-y-4">
            <Score score={score} totalQuestions={questions.length} />
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Re-Attempt
            </button>
          </div>
        ) : (
          <>
            <Question
              question={questions[currentQuestion]}
              onAnswerClick={handleAnswerOptionClick}
              selectedOption={selectedOptions[currentQuestion]}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleNavigation(-1)}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleFinishQuiz}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Finish
                </button>
              ) : (
                <button
                  onClick={() => handleNavigation(1)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
