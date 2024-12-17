// src/app/models/product.model.ts

export interface Product {
    id: string;           // Identificador único del producto
    name: string;         // Nombre del producto
    description: string;  // Descripción del producto
    price: number;        // Precio base del producto
    imageUrl: string;     // URL o ruta de la imagen
    tags?: string[];      // Etiquetas opcionales (e.g., "Popular")
    stock?: number;       // Stock disponible (opcional)
    category?: string;    // Categoría del producto (opcional)
  }
  