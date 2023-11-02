import useSWR from "swr";
import Spotlight from "@/Components/Spotlight";

import ArtPieces from "@/Components/ArtPieces";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(url, fetcher);
  console.log(data);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return <h1>is loading...</h1>;
  }

  return (
    <div>
      <ArtPieces pieces={data} />
      <Spotlight image={data.imageSource} artist={data.artist} />
    </div>
  );
}
