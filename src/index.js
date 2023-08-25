const express = require('express');
const app = express();
const port = 3000;

const products = [
  { name: "Samsung Galaxy", category: "electronics" },
  { name: "Motorola V3", category: "electronics" },
  { name: "Iphone 12", category: "electronics" },
  { name: "Skippy", category: "grocery store" }
];

app.get('/api/products/all', (req, res) => {
    res.json({list: 'Todos los productos', products});
});

app.get('/api/products', (req, res) => {
    
  const { filter } = req.query;

  const founds = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (founds.length > 0) {
    res.json({ list: 'Productos Encontrados', products: founds });
  } else {
    const suggesteds = products.filter(product =>
      product.category === products[0].category 
    ).slice(0, 2);

    res.json({ list: 'Productos sugeridos', products: suggesteds });
  }
});

app.listen(port, () => {
  console.log(` Server listening on http://localhost:${port}`);
});
