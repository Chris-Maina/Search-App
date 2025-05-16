export interface SearchResult {
  id: string;
  name: string;
  description: string;
}

export interface SearchResponse {
  results: SearchResult[];
  totalResults: number;
  query: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}