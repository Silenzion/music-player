import { IAudioTrack } from "@/modules/AudioPlayer/domain/AudioTrack/IAudioTrack";
import { IDtoTrack } from "@/modules/AudioPlayer/domain/Track/DtoTrack.interface";

export default class Track implements IAudioTrack {
  id: string;
  title: string;
  artistTitle: string;
  url: string;
  cover: string;
  duration: number;

  constructor(dto: IDtoTrack) {
    this.id = dto.id;
    this.title = dto.title;
    this.artistTitle = dto.artistTitle;
    this.url = dto.url;
    this.cover = dto.cover;
    this.duration = dto.duration;
  }
}
