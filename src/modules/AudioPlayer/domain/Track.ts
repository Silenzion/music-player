import { IDtoTrack } from "@/modules/AudioPlayer/domain/DtoTrack.interface";

export default class Track {
  id: number;
  title: string;
  artistTile: string;
  url: string;
  cover: string;
  duration: number;

  constructor(dto: IDtoTrack) {
    this.id = dto.id;
    this.title = dto.title;
    this.artistTile = dto.artistTile;
    this.url = dto.url;
    this.cover = dto.cover;
    this.duration = dto.duration;
  }
}
