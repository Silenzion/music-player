import { IDtoTrack } from "@/modules/AudioPlayer/domain/Track/DtoTrack.interface";
import { faker } from '@faker-js/faker';
import { v4 as uuid } from "uuid";

export const PlaylistConfig: IDtoTrack[] = [
  {
    id: uuid(),
    title: faker.music.songName(),
    artistTitle: `${faker.person.firstName()} ${faker.person.lastName()}`,
    cover: "images/album-1.jpg",
    url: "music/1.mp3",
    duration: 4000,
  },
  {
    id:uuid(),
    title: faker.music.songName(),
    artistTitle: `${faker.person.firstName()} ${faker.person.lastName()}`,
    cover: "images/album-2.jpg",
    url: "music/2.mp3",
    duration: 4000,
  },
];
