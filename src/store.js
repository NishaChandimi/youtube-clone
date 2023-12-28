import { create } from "zustand";

export const useVideoStore = create((set) => ({
  videos: [],
  
  setVideos: (videos) =>
    set((state) => {
      return { videos: videos };
    }),
}));
