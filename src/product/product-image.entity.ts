import { Column, Entity } from 'typeorm';

@Entity('product_image')
export class ProductImage {
  @Column({ name: 'url', length: 255, nullable: false })
  url: string;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;
}