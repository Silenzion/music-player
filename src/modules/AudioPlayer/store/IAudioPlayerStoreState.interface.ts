import { IAudioTrack } from "@/modules/AudioPlayer/domain/AudioTrack/IAudioTrack";
import { StateTree } from "pinia";

export interface IAudioPlayerStoreState extends StateTree {
  currentAudio?: IAudioTrack;
  isPlaying: boolean;
  progress: number;
  player?: HTMLAudioElement;
  playlist: IAudioTrack[];
}
