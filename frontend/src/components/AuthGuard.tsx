import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useContext, useEffect } from "react";
import { userContext } from "@/context/UserContext";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  const router = useRouter();
  const user = useContext(userContext);
  const pathName = usePathname();

  useEffect(() => {
    if (status === "unauthenticated" || pathName !== `/mypage/${user?.id}`) {
      router.push('/')
    }
  }, [router, status, pathName, user?.id]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    return <>{children}</>;
  }

  return null;
}

export default AuthGuard;