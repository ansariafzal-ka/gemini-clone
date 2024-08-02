const GeminiMessageCard = ({ message }) => {
  return (
    <div className="w-full flex justify-start">
      <div className="flex justify-center items-center gap-2">
        <div className="p-3 bg-neutral-800 rounded max-w-[500px]">
          <pre className="text-white font-medium text-wrap text-start whitespace-pre-wrap overflow-auto">
            {message}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default GeminiMessageCard;
