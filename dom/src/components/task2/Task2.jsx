import { useState } from "react"
import Input from "./Input"
import {v4 as uuidv4} from 'uuid'

const shapeFields= {
    square: ['side'],
    triangle: ['base', 'height'],
    rectangle: ['length', 'breadth']
}

const Task2 = () => {

    const [result, setResult] = useState(null)
    const [inputs, setInputs] = useState({
        shape: 'square',
        fields: ['side']
    })

    console.log(inputs)

    const handleShapes = (e) => {
        const newShape = e.target.value
        setInputs({
            shape: newShape,
            fields: shapeFields[e.target.value]
        })
        setResult(null)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputs.shape === 'square'){
            setResult(e.target[1].value ** 2)
        }

        if(inputs.shape === 'rectangle'){
            setResult(e.target[1].value * e.target[2].value)
        }

        if(inputs.shape === 'triangle'){
            setResult((e.target[1].value * e.target[2].value) * 0.5)
        }

    }

  return (
    <div>
      <div className="w-1/3 bg-dark-gry rounded-md p-8 mx-auto my-16">
        <h1 className="text-white text-4xl text-center my-2 mb-8">
          Area calculator
        </h1>

        <form className="flex flex-col gap-8 transition-all duration-300" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="shape">Shape</label>
            <select onChange={handleShapes}>
              <option value={"square"}>Square</option>
              <option value={"rectangle"}>Rectangle</option>
              <option value={"triangle"}>Triangle</option>
            </select>
          </div>

          {inputs?.fields.map((item) => (
            <Input key={uuidv4()} field={item} />
          ))}

          <button className="bg-orange-500 mt-2" type="submit">
            submit
          </button>
        </form>
      </div>

      {result && <h1 className="text-xl text-white text-center">{`The area of ${inputs.shape} is ${result}`}</h1>}
    </div>
  )
}
export default Task2