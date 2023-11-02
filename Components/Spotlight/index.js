import Image from "next/image";
export default function Spotlight({ data, image, artist }) {
  const randomPiece = data[Math.floor(Math.random() * data.length)];
  return (
    <>
      <h1>Spotlight</h1>
      <Image
        src={randomPiece.imageSource}
        alt="randomPiece"
        height={200}
        width={200}
      />
      <p>artist={randomPiece.artist}</p>
    </>
  );
}
