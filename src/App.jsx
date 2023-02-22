import { useState } from 'react'
import './App.css'
import { Card, Row, Col, Divider, Input, Button } from 'antd'
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import SearchBar from './components/SearchBar'

function App() {
  const [foodsState, setFoodsState] = useState(foods)
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)
  const [ arrFiltered, setArrFiltered ] = useState(foods)

  

  return (
    <div className="App" key="">
       <SearchBar arrFiltered={arrFiltered} setArrFiltered={setArrFiltered} foodsState={foodsState} setFoodsState={setFoodsState}/>

      <AddFoodForm

        name={name} image={image} calories={calories} servings={servings} setName={setName} setImage={setImage} setCalories={setCalories} setServings={setServings} setFoodsState={setFoodsState} foodsState={foodsState}
      />

      {/*  <Button> Hide Form / Add New Food </Button>*/}
      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {/*{foodsState.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} width={0} />
          </div>)
      }
      )}*/}
        {/*<FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />*/}

        {foodsState.map((food) => {
          return (
            <FoodBox foodProps={food} />
          )
        })}
      </Row>

    </div>
  )
}

export default App
