export interface Product {
    Id: number;
    Product1: string;
    Proteins: number;
    Carbohydrates: number;
    Fats: number;
}

export interface Requirement extends Product {
    dateCreated: Date;
}

