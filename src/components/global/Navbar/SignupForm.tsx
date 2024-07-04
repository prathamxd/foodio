"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        // setIsRegistered(true)
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="my-3">Register your account</h1>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input className="w-[85%]" type="text" placeholder="Email" required />
        <Input
          className="w-[85%]"
          type="password"
          placeholder="Password"
          required
        />
        <Button
          variant="outline"
          className="w-[85%] hover:bg-rose-500 text-rose-500 rounded-sm hover:text-white font-medium border-[1px] border-rose-500"
          type="submit"
          onClick={() => setIsRegistered(true)}
        >
          Register
        </Button>
        {/* {isRegistered && (
          <p className="text-green-500 font-medium my-2">
            User registered. Try loggin in
          </p>
        )} */}
        <p className="text-rose-600 my-2">{error && error}</p>
      </form>
    </div>
  );
};

export default SignupForm;
