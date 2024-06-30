"use client";

import { useSession } from "next-auth/react";

const Loading = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (status === "loading") {
    return(
      <div className="flex justify-center items-center gap-6 mt-10">
          <div className="h-10 w-10 animate-spin border-[5px] border-sky-400 rounded-full  border-t-transparent"></div>
          <p className="text-[30px] font-weight">Loading</p>
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default Loading;
