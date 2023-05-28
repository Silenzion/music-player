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
      return state.currentAudio?.duration || 0;
    },
  },
  actions: {
    setPlayer(player: HTMLAudioElement): void {
      this.player = player;
    },
    getCurrentPosition(): number {
      return this.player ? Math.round(this.player.currentTime * 1000) : 0;
    },
    setCurrentAudioTrack(audioTrack?: IAudioTrack): void {
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
      this.isPlaying = true;
    },
    pause(): void {
      this.player?.pause();
      this.isPlaying = false;
    },
    slideProgress(newValue: number): void {
      if (this.player) {
        const value = Math.floor(((this.currentAudio?.duration || 0) * +newValue) / 100);
        this.player.currentTime = value;
        this.progress = value;
      }
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
        this.play(this.currentAudio?.id).catch((e: any) => console.log(e));
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
