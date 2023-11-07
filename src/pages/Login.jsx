import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import LoginButton from "../components/LoginButton";
import { login, login2 } from "../api/firebase";

export default function Login() {
  const googleLogin = () => login();
  const githubLogin = () => login2();

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">로그인</h1>
      <div className=" w-1/4 ">
        <LoginButton
          onClick={googleLogin}
          icon={<BsGoogle />}
          text={"구글 로그인"}
        />
        <LoginButton
          onClick={githubLogin}
          icon={<BsGithub />}
          text={"깃허브 로그인"}
        />
      </div>
    </section>
  );
}
