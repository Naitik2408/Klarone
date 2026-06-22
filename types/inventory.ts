export interface ProductFamily {
  id: string;
  brand: string;
  series: string;
  model_name: string;
  category: string;
  description?: string;
  slug: string;
  thumbnail_image?: string;
  gallery_images?: string[];
  display_size?: string;
  weight?: string;
  status: 'active' | 'draft' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface ProductVariant {
  id: string;
  product_family_id: string;
  cpu: string;
  ram: string;
  ssd: string;
  gpu?: string;
  touch_screen: boolean;
  screen_resolution?: string;
  operating_system?: string;
  base_price: number;
  rental_price: number;
  status: 'active' | 'draft' | 'archived';
  created_at: string;
  updated_at: string;
}

export type ConditionGrade = 'new' | 'open_box' | 'refurbished_a' | 'refurbished_b' | 'refurbished_c';
export type InventoryStatus = 'available' | 'reserved' | 'sold' | 'rented' | 'under_inspection' | 'repair' | 'returned' | 'scrapped';

export interface InventoryUnit {
  id: string;
  inventory_code: string;
  variant_id: string;
  serial_number: string;
  asset_tag?: string;
  battery_health?: number;
  condition_grade: ConditionGrade;
  color?: string;
  purchase_price: number;
  selling_price: number;
  rental_price: number;
  status: InventoryStatus;
  warehouse_location?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}
