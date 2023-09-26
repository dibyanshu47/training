const Input = ({field}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={field} className="capitalize">{field}</label>
      <input type="number" name={field} required/>
    </div>
  )
}
export default Input