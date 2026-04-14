import type { AnimalCardProps } from "./types";
import { MyAnimalCard } from "./styles";

function AnimalCard({ name, species, img }: AnimalCardProps) {
  return (
    <MyAnimalCard>
      <h3>{name}</h3>
      <div>{species}</div>
      <img src={img} />
    </MyAnimalCard>
  );
}

export default AnimalCard;
