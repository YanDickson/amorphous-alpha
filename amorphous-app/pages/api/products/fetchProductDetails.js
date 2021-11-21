import products from '../../../data/products.json'

export const route = "/api/products/fetchProductDetails";
export default function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET') {
    const product = products.find(product => Number(product.id) === Number(id))  
    console.log(`THIS IS THE PRODUCT --> ${id} ${product}`)
    res.status(200).json(product);
  }
  else {
    res.status(500).json({error: 'This endpoint only accepts GET requests'})
  }
}