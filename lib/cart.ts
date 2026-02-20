// Cart types shared between context and components

export type CartItem = {
  id: string;
  sku: string | null;
  name: string;
  price: number;
  quantity: number;
  image_url: string | null;
};

export function cartItemSubtotal(item: CartItem): number {
  return item.price * item.quantity;
}

export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + cartItemSubtotal(item), 0);
}
