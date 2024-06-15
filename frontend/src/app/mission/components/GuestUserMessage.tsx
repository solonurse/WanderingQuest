import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import Login from "@/components/Login";

const GuestUserMessage = () => {
  const router = useRouter();

  const handleReturnSubmit = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("missionData");
    }
    router.push("/mission/createMission");
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center border border-gray-100 rounded-lg shadow bg-neutral-100 p-5 w-3/4">
      <h1 className="text-xl">ユーザー登録すると、ミッションの結果を写真やコメントと一緒に記録できます。</h1>
      <div className="flex gap-5">
        <Modal
          buttonLabel="ユーザー登録"
          buttonClass="text-xl bg-gradient-to-br from-green-300 to-green-800 hover:bg-gradient-to-tl text-white rounded-lg p-2 shadow-2xl shadow-green-400/50 active:shadow-md transition-shadow duration-200"
        >
          <Login />
        </Modal>
        <button
          className="text-xl bg-gradient-to-br from-red-300 to-red-800 hover:bg-gradient-to-tl hover:font-extrabold text-white rounded-lg p-2 shadow-2xl shadow-red-400/50 active:shadow-md transition-shadow duration-200"
          onClick={handleReturnSubmit}
        >
          ミッション作成ページに戻る
        </button>
      </div>
    </div>
  );
};

export default GuestUserMessage;