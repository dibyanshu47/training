import { useRef, useState } from "react"
import { AiFillEye, AiFillEyeInvisible, AiOutlineEdit } from "react-icons/ai"
import { MdCancel } from "react-icons/md"
import Modal from "../utilities/Modal"

const User = ({ username, password, email, id, removeUser, updateUser }) => {
  const inputRef = useRef()

  //edit and password visibility toggle
  const [toggle, setToggle] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  //user data
  const [localUser, setLocalUser] = useState(username)
  const [localPass, setLocalPass] = useState(password)
  const [localEmail, setLocalEmail] = useState(email)

  //modal visible state
  const [isModalOpen, setModalOpen] = useState(false)

  //updating user details
  const handleUpdate = () => {
    updateUser(id, localUser, localPass, localEmail)
    setIsEdit(false)
  }

  //aborting edit
  const handleCancel = () => {
    setLocalUser(username)
    setLocalEmail(email)
    setLocalPass(password)
    setIsEdit(false)
  }

  //deleting user
  const handleRemove = () => {
    removeUser(id)
    setModalOpen(false)
  }

  const handleEdit = () => {
    inputRef.current.focus()
    setIsEdit(true)
  }

  return (
    <div className="bg-dark-sec rounded-md p-8 flex flex-col gap-8">
      <div className=" flex flex-col gap-8 lg:justify-between">
        <div className="flex gap-8">
          <input
            ref={inputRef}
            type="text"
            className="bg-dark-gry text-white text-xl w-1/3"
            value={localUser}
            onChange={(e) => setLocalUser(e.target.value)}
            readOnly={!isEdit}
          />

          <input
            type="text"
            className="bg-dark-gry text-white text-xl w-1/3"
            value={localEmail}
            onChange={(e) => setLocalEmail(e.target.value)}
            readOnly={!isEdit}
          />

          <div className="relative w-1/3">
            <input
              type={`${toggle || isEdit ? "text" : "password"}`}
              className="bg-dark-gry text-white text-xl w-full"
              value={localPass}
              onChange={(e) => setLocalPass(e.target.value)}
              readOnly={!isEdit}
            />
            <div
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            >
              {!isEdit &&
                (toggle ? (
                  <AiFillEyeInvisible className="text-3xl text-white" />
                ) : (
                  <AiFillEye className="text-3xl text-white" />
                ))}
            </div>
          </div>
        </div>
        <div>
          {isEdit ? (
            <div className="flex justify-end items-center gap-4 cursor-pointer">
              <MdCancel
                className="text-3xl text-white"
                onClick={handleCancel}
              />
              <button className="w-32 bg-orange-500" onClick={handleUpdate}>
                Update
              </button>
            </div>
          ) : (
            <div className="flex justify-end items-center gap-4 cursor-pointer">
              <AiOutlineEdit
                className="text-3xl text-white"
                onClick={handleEdit}
              />
              <button
                className="w-32 bg-orange-500"
                onClick={() => setModalOpen(true)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          message={"Are you sure to delete?"}
          handleCancel={() => setModalOpen(false)}
          handleAccept={handleRemove}
        />
      )}
    </div>
  )
}
export default User
