// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.

import { Card, Row, Col, Divider, Input, Button } from 'antd'

// Iteration 2
function FoodBox({foodProps}) {
  return (
    <Col>
      <Card
        title={foodProps.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={foodProps.image} height={60} alt="food" />
        <p>Calories: {foodProps.calories}</p>
        <p>Servings: {foodProps.servings}</p>
        <p>
          <b>Total Calories: {foodProps.calories * foodProps.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
