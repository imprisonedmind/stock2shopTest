export interface Product {
  attributes: {
    foo: string;
    grams?: string;
    size?: string;
    [key: string]: string | number | boolean; // Allow any additional attributes
  };
  sku: string;
}
