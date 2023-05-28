import { IDtoTrack } from "@/modules/AudioPlayer/domain/Track/DtoTrack.interface";
import faker from "@faker-js/faker";

export const PlaylistConfig: IDtoTrack[] = [
  {
    id: 1,
    title: faker.name.findName(),
    artistTitle: faker.name.jobTitle(),
    cover: "/images/album-1.jpg",
    // cover: faker.image.imageUrl(),
    url: "/music/1.mp3",
    duration: 4000,
  },
  {
    id: 2,
    title: faker.name.findName(),
    artistTitle: faker.name.jobTitle(),
    cover: "/images/album-2.jpg",
    // cover: faker.image.imageUrl(),
    url: "/music/1.mp3",
    duration: 4000,
  },
];
