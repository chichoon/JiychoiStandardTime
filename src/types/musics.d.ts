export interface ISongsList {
  songs: ISong[];
}

export interface ISong {
  index: number;
  title: string;
  artist: string;
  comment: string;
  url: string;
  date: string;
}
