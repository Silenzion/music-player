import { IDtoTrack } from "@/modules/AudioPlayer/domain/Track/DtoTrack.interface";
import { faker } from '@faker-js/faker';

export const PlaylistConfig: IDtoTrack[] = [
  {
    id: 1,
    title: faker.music.songName(),
    artistTitle: `${faker.person.firstName()} ${faker.person.lastName()}`,
    cover: "images/album-1.jpg",
    url: "music/1.mp3",
    duration: 4000,
  },
  {
    id: 2,
    title: faker.music.songName(),
    artistTitle: `${faker.person.firstName()} ${faker.person.lastName()}`,
    cover: "images/album-2.jpg",
    url: "music/2.mp3",
    duration: 4000,
  },
];
