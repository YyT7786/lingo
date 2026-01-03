import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin";
import AdminClient from "./adminClient";

export default function AdminPage() {
  if (!isAdmin()) {
    redirect("/");
  }

  return <AdminClient />;
}
