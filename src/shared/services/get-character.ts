import { StarWarsCharacterModel } from '../models';
import { request } from '../utils';

export const getCharacter = (name: string): Promise<StarWarsCharacterModel> =>
  request<StarWarsCharacterModel>(name);
