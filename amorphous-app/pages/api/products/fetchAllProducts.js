import products from '../../../data/products.json'

export const route = "/api/products/fetchAllProducts";
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  }
  else {
    res.status(500).json({error: 'This endpoint only accepts GET requests'})
  }
}