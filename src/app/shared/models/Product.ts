import { ProductCategory } from '../enums/PorductCategory.enum';

export interface Product{
id: number;
name: string;
price: number;
category: ProductCategory;

}
