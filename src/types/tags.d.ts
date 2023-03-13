export interface TagListType {
  selectableTags: TagType[];
  selectedTags: TagType[];
}

export type TagType =
  | 'excited'
  | 'sad'
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
  | 'classic'
  | 'guitar'
  | 'piano'
  | 'bass'
  | 'inst';
