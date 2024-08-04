function Score({ score, totalQuestions }) {
  return (
    <div className="text-center flex flex-col">
      <div className="text-2xl font-semibold mb-4">Your Score</div>
      <div className="text-lg">
        {score} out of {totalQuestions}
      </div>
    </div>
  );
}

export default Score;
