import { Divider, Input } from 'antd';
import { useState } from 'react';

function SearchBar(props) {

    const { foodsState, setFoodsState, arrFiltered } = props
  

    const searchFood = (name) => {
        const newFoodsArr = [...foodsState]
       

        const arrFiltered = newFoodsArr.filter(food => food.name.toLowerCase().includes(name.toLowerCase()))
        setFoodsState(arrFiltered)
       

    }

    return (
        <>
            <Divider>Search</Divider>

            <Input value={undefined} type="text" onChange={(event) => searchFood(event.target.value)} />
        </>
    )
}

export default SearchBar