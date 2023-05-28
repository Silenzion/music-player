export interface IAudioPlayerStoreActions {
  play(trackId): Promise<void>;
  pause(): void;
  setPrev(): Promise<void>;
  setNext(): Promise<void>;
  load(): void;
  toggle(): void;
  slideProgress(newValue: number): void;
  setCurrentAudioTrack(Track);
  setPlayer(player: HTMLAudioElement): void;
  getCurrentPosition(): number;
}
