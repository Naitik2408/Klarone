import { ProductFamily, ProductVariant, InventoryUnit } from '../types/inventory';

export const mockFamilies: ProductFamily[] = [
  {
    id: 'fam_001',
    brand: 'Lenovo',
    series: 'ThinkPad',
    model_name: 'T480',
    category: 'Business Laptop',
    description: 'A robust and reliable business laptop with excellent battery life and keyboard.',
    slug: 'lenovo-thinkpad-t480',
    status: 'active',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'fam_002',
    brand: 'Dell',
    series: 'Latitude',
    model_name: '5410',
    category: 'Business Laptop',
    description: 'Work faster with the world’s smallest 14-inch mainstream business laptop.',
    slug: 'dell-latitude-5410',
    status: 'active',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
];

export const mockVariants: ProductVariant[] = [
  {
    id: 'var_001',
    product_family_id: 'fam_001', // T480
    cpu: 'Intel Core i5 8th Gen',
    ram: '8GB',
    ssd: '256GB',
    touch_screen: false,
    base_price: 15999,
    rental_price: 1200,
    status: 'active',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'var_002',
    product_family_id: 'fam_001', // T480
    cpu: 'Intel Core i5 8th Gen',
    ram: '16GB',
    ssd: '512GB',
    touch_screen: false,
    base_price: 18999,
    rental_price: 1500,
    status: 'active',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'var_003',
    product_family_id: 'fam_002', // Latitude 5410
    cpu: 'Intel Core i5 10th Gen',
    ram: '16GB',
    ssd: '256GB',
    touch_screen: true,
    base_price: 24999,
    rental_price: 2000,
    status: 'active',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
];

export const mockUnits: InventoryUnit[] = [
  {
    id: 'unit_001',
    inventory_code: 'KLR-000001',
    variant_id: 'var_001', // T480 i5 8GB 256GB
    serial_number: 'SN-T480-A01',
    condition_grade: 'refurbished_a',
    battery_health: 92,
    color: 'Black',
    purchase_price: 10000,
    selling_price: 15999,
    rental_price: 1200,
    status: 'available',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'unit_002',
    inventory_code: 'KLR-000002',
    variant_id: 'var_001', // T480 i5 8GB 256GB
    serial_number: 'SN-T480-A02',
    condition_grade: 'refurbished_b',
    battery_health: 84,
    color: 'Black',
    purchase_price: 9000,
    selling_price: 14999,
    rental_price: 1000,
    status: 'available',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'unit_003',
    inventory_code: 'KLR-000003',
    variant_id: 'var_002', // T480 i5 16GB 512GB
    serial_number: 'SN-T480-B01',
    condition_grade: 'refurbished_a',
    battery_health: 88,
    color: 'Black',
    purchase_price: 12000,
    selling_price: 18999,
    rental_price: 1500,
    status: 'rented',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'unit_004',
    inventory_code: 'KLR-000004',
    variant_id: 'var_003', // 5410 i5 16GB 256GB
    serial_number: 'GV0Y063',
    condition_grade: 'refurbished_a',
    battery_health: 95,
    color: 'Silver',
    purchase_price: 15000,
    selling_price: 24999,
    rental_price: 2000,
    status: 'available',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
];

export function getFamilyStats(familyId: string) {
  const variants = mockVariants.filter(v => v.product_family_id === familyId);
  const units = mockUnits.filter(u => variants.some(v => v.id === u.variant_id));
  
  return {
    totalVariants: variants.length,
    totalUnits: units.length,
    availableUnits: units.filter(u => u.status === 'available').length,
    rentedUnits: units.filter(u => u.status === 'rented').length,
    soldUnits: units.filter(u => u.status === 'sold').length,
    repairUnits: units.filter(u => u.status === 'repair').length,
  };
}

export function getVariantStats(variantId: string) {
  const units = mockUnits.filter(u => u.variant_id === variantId);
  
  return {
    totalUnits: units.length,
    availableUnits: units.filter(u => u.status === 'available').length,
    rentedUnits: units.filter(u => u.status === 'rented').length,
    soldUnits: units.filter(u => u.status === 'sold').length,
    repairUnits: units.filter(u => u.status === 'repair').length,
  };
}
