const SubmitButtons = () => (
  <div>
    <button
      type="submit"
      name="recordButton"
      className="me-5 text-2xl bg-gradient-to-br from-green-300 to-green-800 hover:bg-gradient-to-tl text-white rounded-lg p-2 shadow-2xl shadow-green-400/50 active:shadow-md transition-shadow duration-200"
    >
      記録する
    </button>
    <button
      type="submit"
      name="notRecordButton"
      className="text-2xl bg-gradient-to-br from-red-300 to-red-800 hover:bg-gradient-to-tl text-white rounded-lg p-2 shadow-2xl shadow-red-400/50 active:shadow-md transition-shadow duration-200"
    >
      記録しない
    </button>
  </div>
);

export default SubmitButtons;