import products from '../../../data/products.json'

export const route = "/api/products/fetchProductDetails";
export default function handler(req, res) {
  const {name} = req.query;
  if (req.method === 'GET') {
    const product = products.find(product => product.name === name)  
    console.log(req)
    res.status(200).json(product);
  }
  else {
    res.status(500).json({error: 'This endpoint only accepts GET requests'})
  }
}