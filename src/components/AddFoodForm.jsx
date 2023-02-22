
import { Divider, Input } from 'antd';


// Iteration 4
function AddFoodForm(props) {

const {name, image, calories, servings,setName,setImage, setCalories,setServings, setFoodsState,foodsState} = props

const handleSubmit = event => {
    event.preventDefault()
    console.log ( name, image, calories, servings )
   setFoodsState(
      [...foodsState, { name, image, calories, servings }]
   )
    setName('')
    setImage('')
    setCalories(0)
    setServings(0)
  }

    return (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input 
            value={name} type="text" 
            onChange={event => setName(event.target.value)}
             />

            <label>Image</label>
            <Input 
            value={image} type="text" 
           onChange={event => setImage(event.target.value)}
             />


            <label>Calories</label>
            <Input 
           value={calories} type="number"
             onChange={event => setCalories(event.target.value)}
              />


            <label>Servings</label>
            <Input 
            value={servings} type="number" 
            onChange={event => setServings(event.target.value)} 
            />


            <button type="submit">Create</button>
        </form>
    );
}

export default AddFoodForm;
