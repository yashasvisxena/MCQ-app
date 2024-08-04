/* eslint-disable react/prop-types */
function Question({ question, onAnswerClick, selectedOption }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-lg font-semibold mb-4">{question.questionText}</div>
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswerClick(option)}
            className={`py-2 px-4 rounded ${
              selectedOption === option
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
