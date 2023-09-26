const Modal = ({ message, handleCancel, handleAccept }) => {
  return (
    <>
      <div
        className="fixed flex flex-col justify-center items-center top-0 bottom-0 right-0 left-0 overlay z-30"
        onClick={handleCancel}
      ></div>
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-16 w-1/3 py-12 px-16 bg-white text-red-500 text-3xl rounded-md z-40">
        <h1>{message}</h1>
        <div
          className="flex gap-6 justify-end"
          onClick={() => console.log("working")}
        >
          <button className="bg-red-500" onClick={handleCancel}>
            Cancel
          </button>
          <button className="bg-blue-500" onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </>
  )
}
export default Modal
