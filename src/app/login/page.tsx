import { Button } from "@/components/ui/button";
import React from "react";

function LoginPage() {
  return (
    <main>
      <form className="flex flex-col items-center p-4 justify-center mx-auto container gap-4">
        <label>Username</label>
        <input
          type="text"
          name="username"
          required
          className="bg-amber-50 text-black"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          className="bg-amber-50 text-black"
        />
        <Button type="submit">Login</Button>
      </form>
    </main>
  );
}

export default LoginPage;
