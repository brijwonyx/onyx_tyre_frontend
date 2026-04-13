export type Image = {
  image_url: string;
};

export type Review = {
  rating: number;
  comment: string;
  reviewer_name: string;
  images: Image[];
};

export type brand = {
  logo: string;
};

export type TyreModelType = {
  model_name: string;
  season_type: string;
  car_type: string;
  production_flag: string;
  description: string | null;
  runflat_flag: string;
  images: Image[];
  reviews: Review[];
  brand: brand;
};

export type TyreSize = {
  size_label: string;
};

export type Inventory = {
  price: number;
  stock: number;
  warehouse_id: string;
};

export type TyreDetailsData = {
  id: string;
  load_index: string;
  speed_rating: string;
  tyreModel: TyreModelType;
  tyreSize: TyreSize;
  inventories: Inventory[];
};
