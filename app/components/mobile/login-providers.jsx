import Image from "next/image";
import googleLogo from "../../assets/images/google-logo.png";
import appleLogo from "../../assets/images/apple-logo.png";

export default function LoginProviders() {
  return (
    <>
      <div className="flex items-center justify-center gap-5">
        <Image
          src={googleLogo}
          width={50}
          height={50}
          alt="google logo"
          className="bg-white shadow-xl rounded-full p-2 cursor-pointer"
        />
        <Image
          src={appleLogo}
          alt="google logo"
          width={50}
          height={55}
          className="bg-white shadow-xl rounded-full cursor-pointer p-2"
        />
      </div>
    </>
  );
}
