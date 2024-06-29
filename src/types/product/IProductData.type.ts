interface IDamnation {
  width: number;
  height: number;
  depth: number;
}
interface IMetaProduct {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
export interface IReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: IDamnation;
  availabilityStatus: string;
  images: string[];
  thumbnail: string;
  meta: IMetaProduct;
  minimumOrderQuantity: number;
  returnPolicy: string;
  shippingInformation: string;
  warrantyInformation: string;
  reviews: IReview[];
}
