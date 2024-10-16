import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center gap-56 bg-gray-100 items-center">
      <ul className="">
        <h1 className="text-3xl">Contect Us</h1>
        <li>
          <Link href={"mailto:bhuttonisar60@gmail.com"}>Email Us</Link>
        </li>
        <li>Phone : +923492029262</li>
        <li>Address : Karachi Malir</li>
      </ul>

      <h1 className="text-3xl">Quik Links</h1>
      <ul className="flex flex-col flex-wrap justify-center">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/generative"}>
          <li>A.I Generative</li>
        </Link>
        <Link href={"/healthcare"}>
          <li>A.I Healthcare</li>
        </Link>
        <Link href={"/marketing"}>
          <li>A.I Marketing</li>
        </Link>
        <Link href={"/learning"}>
          <li>Matchine Learning</li>
        </Link>
        <Link href={"cybersecurty"}>
          <li>Cybersecurty</li>
        </Link>
      </ul>

      <ul className=" flex flex-col justify-center">
        <h1 className=" text-3xl ">Social Links</h1>
        <Link href={"https://www.google.com"}>Google</Link>
        <Link href={"https://www.youtube.com"}>YouTube</Link>
        <Link href={"https://www.twitter.com"}>Twitter</Link>
      </ul>
    </div>
  );
}

