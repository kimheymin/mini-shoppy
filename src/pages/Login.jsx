import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import LoginButton from "../ui/LoginButton";
import { login, login2 } from "../api/firebase";

export default function Login() {
  const googleLogin = () => login();
  const githubLogin = () => login2();

  // const login = async (e) => {
  //   const {
  //     target: { id },
  //   } = e;

  //   let provider =
  //     id === "Google"
  //       ? new firebaseInstance.auth.GoogleAuthProvider()
  //       : new firebaseInstance.auth.GithubAuthProvider();

  //   await authService.signInWithPopup(provider);
  // };

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">로그인</h1>
      <div className=" w-1/4 ">
        <LoginButton onClick={googleLogin} icon={<BsGoogle />} name="Google" />
        <LoginButton onClick={githubLogin} icon={<BsGithub />} name="Github" />
      </div>
    </section>
  );
}
