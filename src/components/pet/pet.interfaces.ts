import { CollectionParameters } from "../../common/operations/operations.interfaces";

export interface Pet {
  id?: number;
  name: string;
  category?: Category;
  photoUrls: string[];
  tags?: Tag[];
  status?: PetStatus;
}

interface Category {
  id?: number;
  name: string;
}

interface Tag {
  id?: number;
  name: string;
}

export type PetStatus = "available" | "pending" | "sold";

export interface GetAllPetsParameters extends CollectionParameters {
  status: PetStatus;
  tags: string[];
}
