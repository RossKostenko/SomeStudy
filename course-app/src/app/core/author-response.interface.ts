import { Author } from './author.interface';

export interface AuthorResponse {
  successful: boolean;
  result: Author[] | null;
}
