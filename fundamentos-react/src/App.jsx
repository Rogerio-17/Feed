import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import style from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Diego"
            content="sssssssaj ssfnlaskmojnsdkav la dc oadf inoinfoinaosinosa"
          />
          <Post />
        </main>
      </div>
    </div>
  );
}
