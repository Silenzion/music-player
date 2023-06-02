import { IAudioTrack } from "@/modules/AudioPlayer/domain/AudioTrack/IAudioTrack";
import { IAudioPlayerStoreActions } from "@/modules/AudioPlayer/store/IAudioPlayerStoreActions";
import { IAudioPlayerStoreGetters } from "@/modules/AudioPlayer/store/IAudioPlayerStoreGetters.interface";
import { IAudioPlayerStoreState } from "@/modules/AudioPlayer/store/IAudioPlayerStoreState.interface";
import { defineStore } from "pinia";

export const useAudioPlayerStore = defineStore<
  "audioPlayer",
  IAudioPlayerStoreState,
  IAudioPlayerStoreGetters,
  IAudioPlayerStoreActions
>("audioPlayer", {
  state: (): IAudioPlayerStoreState => ({
    player: undefined,
    playlist: [],
    currentAudio: undefined,
    progress: 0,
    isPlaying: false,
  }),
  getters: {
    indexCurrentAudio: (state: IAudioPlayerStoreState): number => {
      return state.currentAudio ? state.playlist.indexOf(state.currentAudio) : 0;
    },
    duration: (state: IAudioPlayerStoreState): number => {
      return Math.trunc(state.player?.duration || 0);
    },
  },
  actions: {
    setPlayer(player: HTMLAudioElement): void {
      this.player = player;
    },
    setCurrentAudio(audioTrack?: IAudioTrack): void {
      this.currentAudio = audioTrack;
      this.load();
    },
    async play(trackId): Promise<void> {
      if (!this.currentAudio) {
        this.setCurrentAudio(this.playlist.find((item) => item.id === trackId));
      }
      if (trackId !== this.currentAudio?.id) {
        this.isPlaying = false;
        this.setCurrentAudio(this.playlist.find((item) => item.id === trackId));
      }
      if (this.player?.paused) {
        this.player?.play().catch((e: any) => console.log(e));
      }
      this.isPlaying = true;
    },
    pause(): void {
      this.player?.pause();
      this.isPlaying = false;
    },

    load(): void {
      if (this.player) {
        this.player.load();
        this.player.currentTime = 0;
      }
    },
    toggle(): void {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play(this.currentAudio?.id);
      }
    },
    async setPrev(): Promise<void> {
      this.pause();
      if (this.currentAudio) {
        this.setCurrentAudio(this.playlist[this.indexCurrentAudio - 1]);
      }
      this.load();
      this.play(this.currentAudio?.id);
    },
    async setNext(): Promise<void> {
      this.pause();
      if (this.currentAudio) {
        if (this.indexCurrentAudio === this.playlist.length - 1) {
          this.setCurrentAudio(this.playlist[0]);
        } else {
          this.setCurrentAudio(this.playlist[this.indexCurrentAudio + 1]);
        }
      }
      this.load();
      this.play(this.currentAudio?.id);
    },
  },
});
