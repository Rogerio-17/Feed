import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import style from "./App.module.css";
import "./global.css";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/Rogerio-17.png",
        name: "Rogério José",
        role: "Front-end Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date('2023-09-18 23:12:00'),
    },

    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/VictorKennedy-Git.png",
        name: "Victor Kennedy",
        role: "Backend",
      },
      content: [
        { type: "paragraph", content: "Opaa galera 👋" },
        {
          type: "paragraph",
          content:
            "Aprendendo bastante com o ignite da rocketseat 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date('2023-09-19 21:12:00'),
    },
  ];

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
           return(
            <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
           )
          })}
        </main>
      </div>
    </div>
  );
}
