import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import contacts from "../api/contacts";

function Name() {
  const router = useRouter();
  const { id } = router.query;
  const contact = contacts.find((c) => c.id === id);
  const [firstName, lastName] = contact?.name ? contact?.name.split(" ") : [];
  console.log(firstName, lastName);

  return (
    <div>
      <a href="#" onClick={() => router.back()}>
        Back
      </a>
      {/* <Link href="/contacts"> Back </Link> */}
      {/* <h2> Contact: {`${lastName.toUpperCase()}, ${firstName}`} </h2> */}
      <h2>
        Contact: {lastName.toUpperCase()}, {firstName}
      </h2>
    </div>
  );
}

export default Name;
