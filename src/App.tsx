import './App.css'
import CustomHookForApiFetch from './components/customHooks/CustomHookForApiFetch/CustomHookForApiFetch'
// import Debounce from './components/debounce_n_throttle/Debounce/Debounce'
import Debounce_customHook from './components/debounce_n_throttle/Debounce/Debounce_customHook'
// import FolderStructure from './components/FolderStructure/FolderStructure'

function App() {

  return (
    <>
      <h1>Webpage under construction - working on it. Use this link to view webpage: 
        <a href="https://glowing-gnome-5f8b28.netlify.app/" target="_blank" rel="noopener noreferrer">
          https://glowing-gnome-5f8b28.netlify.app/
        </a> 
      </h1>

      {/* <Debounce /> */}
      {/* <Debounce_customHook /> */}

      <CustomHookForApiFetch />

      {/* FOLDER STRUCTURE TASK */}
      {/* <FolderStructure /> */}
    </>
  )
}

export default App

// sfc - stateless functional component - Arrow