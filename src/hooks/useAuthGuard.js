import getConfig from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuthGuard() {
  const router = useRouter();
  const [role, setRole] = useState("");
  const { db, auth } = getConfig();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(uid)
            console.log(docSnap.data())
          setRole(docSnap.data().role);
        }
      } else {
        setRole("guest");
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    role,
  };
}
