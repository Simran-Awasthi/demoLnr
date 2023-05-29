import Sidebar from "./components/Sidebar";
import EditorPage from "./components/Editor";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <NavBar />
      <div className=" w-full h-full box-border flex justify-start items-center bg-white">
        <Sidebar />
        <EditorPage />
      </div>
    </div>
  );
}

export default App;
