import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";
import contacts from "../api/contacts";

function Contact() {
  return (
    <ul>
      {contacts.map((contact) => {
        const [firstName, lastName] = contact.name.split(" ");

        return (
          <li key={contact.id}>
            <Link href={`/contacts/${contact.id}`}>
              <p>{`${lastName.toUpperCase()}, ${firstName}`}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Contact;
