export type TCategory = {
  name: string;
  image: string;
};

export type TCategoryProps = {
  cat: TCategory;
}

export type Tproduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_path: string;
  reviews: [];
  quantity: number;
  totalPrice: number;
};

export type Tslides = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  buttonText: string;
};

export type TProductProps = {
  product: Tproduct;
};
