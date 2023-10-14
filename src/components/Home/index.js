import {useState} from 'react'
import './index.css'

const Home = () => {
  const [text, setText] = useState('')
  const [save, setSave] = useState(false)

  const save1 = e => {
    e.preventDefault()
    setSave(true)
  }

  const edit = e => {
    e.preventDefault()
    setSave(false)
  }

  return (
    <div className="main-container " id="login_page">
      <div className="app-container">
        <div>
          <h1 className="textHead">Editable Text Input</h1>
          {save ? (
            <form id="addUserForm" className="form" autoComplete="off">
              <p className="">{text}</p>
              <div className="button-container">
                <button className="button btn" type="submit" onClick={edit}>
                  Edit
                </button>
              </div>
            </form>
          ) : (
            <form id="addUserForm" className="form" autoComplete="off">
              <input
                type="text"
                name=""
                id="name"
                value={text}
                className="form-control input"
                onChange={e => setText(e.target.value)}
                required
              />

              <button className="button" type="submit" onClick={save1}>
                Save
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
