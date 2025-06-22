import { useState } from "React";
import PostsList from "./components/PostsList";
import Post from "./components/Post";
import MainHeader from "./components/MainHeader";

function App() {
  const [isModalVisiable, setIsModalVisible] = useState(true);
  function showModalHandler() {
    setIsModalVisible(true);
  }
  return (
    <>
      <MainHeader isOpen={isModalVisiable} />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default App;
