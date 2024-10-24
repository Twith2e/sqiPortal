import { useParams } from "react-router-dom";

export default function DynamicPage() {
  const { id } = useParams();
  return <h1>{id.toUpperCase().replace(/[-]+/g, " ")}</h1>;
}
