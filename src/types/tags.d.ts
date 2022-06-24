export interface ITagInfo {
  selectableTags: TagType[];
  selectedTags: TagType[];
}

export type TagType =
  | 'excited'
  | 'loud'
  | 'peaceful'
  | 'coding'
  | 'fast'
  | 'slow'
  | 'woman'
  | 'man'
  | 'both'
  | 'full'
  | 'live'
  | 'band'
  | 'orchestra'
  | 'guitar'
  | 'piano'
  | 'bass'
  | 'inst';
