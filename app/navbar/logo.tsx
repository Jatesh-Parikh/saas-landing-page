import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/logo/logo-16.svg"
        alt="logo"
        width={50}
        height={50}
        className="p-2"
      />
    </div>
  );
};

export default Logo;
