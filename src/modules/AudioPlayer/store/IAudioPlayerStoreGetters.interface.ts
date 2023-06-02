import { IAudioPlayerStoreState } from "@/modules/AudioPlayer/store/IAudioPlayerStoreState.interface";
import { _GettersTree, StateTree } from "pinia";

export interface IAudioPlayerStoreGetters extends _GettersTree<IAudioPlayerStoreState> {
  duration: (state: IAudioPlayerStoreState) => number;
  indexCurrentAudio: (state: IAudioPlayerStoreState) => number;
}
