import { IDtoTrack } from "@/modules/AudioPlayer/domain/DtoTrack.interface";
import faker from "@faker-js/faker";

export const PlaylistConfig: IDtoTrack[] = [
  {
    id: 1,
    title: faker.name.findName(),
    artistTile: faker.name.jobTitle(),
    cover: faker.image.imageUrl(),
    url: "/music/1.mp3",
    duration: 4000,
  },
  {
    id: 2,
    title: faker.name.findName(),
    artistTile: faker.name.jobTitle(),
    cover: faker.image.imageUrl(),
    url: "/music/1.mp3",
    duration: 4000,
  },
];
