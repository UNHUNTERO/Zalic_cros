// 1. Каталог газет:
// • Назва газети.
// • Номер.
// • Дата виходу.
// • Кількість сторінок.
// Інформаціє, яка додається динамічно:
// • Список статей у випуску
export class Catalog {
    name: string = "";
    id: number = 0;
    release_date: Date = new Date("12/12/2012");
    pages : number = 10;
    articles: string[] = [];
    constructor(name: string, id: number, rd: Date, pages: number, a: string[]) {
       this.name = name;
       this.id = id;
       this.release_date = rd;
       this.pages=pages;
       this.articles = a;
    }
 }