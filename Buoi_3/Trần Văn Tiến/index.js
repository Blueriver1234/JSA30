const productList = [
    {
      id: 1,
      name: 'Nike AF1 07',
      description: 'Bestseller',
      price: 500
    },
    {
      id: 2,
      name: 'Nike Air Jordan 1 Mid',
      description: 'Trending 2023',
      price: 300
    },
    {
      id: 1,
      name: 'Nike Air Max 90 GORE-TEX',
      description: 'Trending 2023',
      price: 350
    },
    {
      id: 1,
      name: 'Nike Zion 3PF',
      description: 'Trending 2023',
      price: 700
    },
    {
      id: 1,
      name: 'Nike Full Force Low',
      description: 'Trending 2023',
      price: 1000
    },
]
for (let x of Object.values(productList)) {
    Object.values(x)
    if (x.price > 500) {
        console.log(x);
    }
} 





















