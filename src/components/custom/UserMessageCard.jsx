const UserMessageCard = ({ message }) => {
  return (
    <div className="w-full flex justify-end">
      <div className="p-3 bg-stone-100 rounded max-w-[250px]">
        <h1 className="text-neutral-800 font-medium text-wrap text-start">
          {message}
        </h1>
      </div>
    </div>
  );
};

export default UserMessageCard;
