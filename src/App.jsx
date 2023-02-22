import { useState } from 'react'
import './App.css'
import { Card, Row, Col, Divider, Input, Button } from 'antd'
import foods from './foods.json'
import FoodBox from './components/FoodBox'

function App() {
  const [foodsState, setFoodsState] = useState(foods)

  return (
    <div className="App">
      {/* Display Add Food component here */}
      {/*  <Button> Hide Form / Add New Food </Button>*/}
      {/* Display Search component here */}

      <Divider>Food List</Divider>
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />

      {/*{foodsState.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} width={0} />
          </div>)
      }
      )}*/}

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}

      </Row>

    </div>
  )
}

export default App
