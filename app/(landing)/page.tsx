"use client";
import { Button } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      LandingPage (unprotected JHHJ)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
