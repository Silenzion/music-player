export interface IAudioPlayerStoreActions {
  play(trackId): Promise<void>;
  pause(): void;
  setPrev(): Promise<void>;
  setNext(): Promise<void>;
  load(): void;
  toggle(): void;
  setCurrentAudio(IAudioTrack): void;
  setPlayer(player: HTMLAudioElement): void;
}
