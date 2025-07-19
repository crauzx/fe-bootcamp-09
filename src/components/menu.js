"use client";
import getConfig from "@/firebase/config";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import { signOut } from "firebase/auth";
import Link from "next/link";

export default function Menu() {
  const isOnline = useOnlineStatus();
  const { role } = useAuthGuard();
  const { auth } = getConfig();
  const isLoggedIn = role === "admin" || role === "user";

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="menu">
      <div className="list-menu-item">
        {isLoggedIn && (
          <>
            <Link href="/" className="menu-item">
              Home
            </Link>
            {role === "admin" && (
              <Link href="/users" className="menu-item">
                Users
              </Link>
            )}
            <Link href="/foods" className="menu-item">
              Foods
            </Link>
          </>
        )}
      </div>
      <div className="list-menu-item">
        {role === "guest" && (
          <Link href="/login" className="menu-item">
            Login
          </Link>
        )}
        {isLoggedIn && (
          <div className="menu-item" onClick={handleLogout}>
            Logout
          </div>
        )}
        <div className="menu-item">
          Status: {isOnline ? "Online" : "Offline"}
        </div>
      </div>
    </nav>
  );
}
