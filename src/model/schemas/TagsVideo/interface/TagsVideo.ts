import { Optional } from "sequelize";

export interface TagsVideosAttributes {
    id?: number;
    id_video?:number;
    id_tags?:number;
  }

export interface TagsVideosInput extends Optional<TagsVideosAttributes, 'id'> {}
export interface TagsVideosOuput extends Required<TagsVideosAttributes> {}