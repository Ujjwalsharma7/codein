import { SignOutButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SignUpButton>Signup</SignUpButton>
      <SignOutButton>Signout</SignOutButton>
    </div>
  );
}
