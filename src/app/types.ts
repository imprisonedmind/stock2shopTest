export interface Product {
  attributes: {
    foo: string;
    grams?: number;
    size?: string;
    [key: string]: string | number | boolean; // Allow any additional attributes
  };
  sku: string;
}

export interface InitialProductValues {
  sku: string;
  size?: string;
  grams?: number;
}
