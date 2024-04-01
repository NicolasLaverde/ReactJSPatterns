import { faker } from "@faker-js/faker";

const products = Array.from({ length: 20 }, () => {
    return {
        productName: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price()
    };
});

const companies = Array.from({ length: 15 }, () => {
    return {
      companyName: faker.company.name(),
      phrase: faker.company.catchPhrase()
    };
  });

export  {
    products,
    companies
}