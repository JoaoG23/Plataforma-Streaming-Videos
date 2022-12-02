import { Optional } from "sequelize";

export interface FavoritosAttributes {
    id?: number;
    id_video?: number;
    id_usuario?: number;
  }

export interface FavoritosInput extends Optional<FavoritosAttributes, 'id'> {}
export interface FavoritosOuput extends Required<FavoritosAttributes> {}