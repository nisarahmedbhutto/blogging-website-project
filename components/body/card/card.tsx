import Image from "next/image";
import card from "./card-data";
import Link from "next/link";

export default function Card() {
  return (
    <div className="flex justify-center flex-wrap">
      {card.map(({ title, discraption, link,pageLink }, index) => (
        <div
          key={index}
          className="p-4 w-100 flex flex-col hover:border-2 bg-blue-100 shadow-lg shadow-gray-700
           border-blue-300 w-64 h-auto m-4 justify-start items-center rounded-2xl"
        >
          <Image
            src={link}
            alt={title}
            className="rounded-lg shadow-lg w-52 h-60 mt-1"
            layout="intrinsic"
            width={208}
            height={190}
          />
          <h2 className="text-xl font-bold mt-4">{title}</h2>
          <p className="overflow-hidden mt-4">{discraption}</p>
          <div>
            <button className="bg-blue-200 rounded-xl w-28 mt-4 hover:border-2 hover:border-blue-300 h-8 hover:w-32 hover:h-10">
              <Link href={pageLink}>Read More</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
