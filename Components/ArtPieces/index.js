import ArtPiecePreview from "../ArtPiecePreview";
export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          artist={piece.artist}
          image={piece.imageSource}
          title={piece.name}
        />
      ))}
    </ul>
  );
}
