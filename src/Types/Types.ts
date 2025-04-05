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
  slug: string;
  description: string;
  price: number;
  category: string;
  images: string[];
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
