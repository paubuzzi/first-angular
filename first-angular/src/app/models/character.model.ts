export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface CharacterApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export interface ApiError {
  status: number;
  message: string;
  error: string;
}
