import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <Image src={image} alt={title} height={200} width={200} />
      <p>Titel: {title}</p>
      <p>Artist: {artist}</p>
    </li>
  );
}
