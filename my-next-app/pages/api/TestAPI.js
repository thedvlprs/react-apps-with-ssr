/* import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    name: String,
    address: String,
    contact: String,
    bloodgroup: String,
    favouriteSnack: String,
    vehicle: String
  }
`); */

const data = {
    name: 'John Doe',
    address: '7th Avenue, Brooklyn',
    contact: '099251456',
    bloodgroup: 'A +ve',
    favouriteSnack: 'Hotdog',
    vehicle: 'Hyundai Tucson',
};

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
};

/* export default async (req, res) => {
    const response = await graphql(schema, req.body.query, data);
    res.end(JSON.stringify(response.data));
}; */
