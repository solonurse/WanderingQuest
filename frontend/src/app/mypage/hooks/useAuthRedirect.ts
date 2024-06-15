import { useEffect, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { userContext } from "@/context/UserContext";

const useAuthRedirect = () => {
  const { status } = useSession();
  const router = useRouter();
  const user = useContext(userContext);
  const pathname = usePathname();

  useEffect(() => {
    if (status !== "loading" && user !== null) {
      if (status === "unauthenticated" || pathname !== `/mypage/${user?.id}` || user.is_guest) {
        router.push('/');
      }
    }
  }, [status, pathname, user, router]);

  return { status, user, pathname };
};

export default useAuthRedirect;
