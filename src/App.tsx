import { useState, useEffect } from 'react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import './App.css'

type Repo = {
  id: number;
  name: string;
  topics: string[];
  html_url: string;
  description: string;
};

function App() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/glauberperez/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        console.log(data);
      });
      //eslint-disable-next-line
  }, []);

  return (
    <>

    <main className="px-10">
        <section>
          <nav className="py-4 mb-12 flex justify-between">
            <h1 className="text-white text-3xl font-medium font-sanfrancisco">Glauber Perez</h1>
            <ul className="flex items-center">
              <li>
                <a 
                className="px-4 py-2 rounded-lg ml-8 text-lg font-semibold font-sanfrancisco text-white bg-zinc-500 hover:bg-zinc-600 active:bg-zinc-700" 
                href="Resume.pdf"
                >
                  CV
                </a>
                </li> 
            </ul>
          </nav>
          <div className="relative mx-auto bg-gradient-to-b from-emeraldgreen rounded-full w-80 h-80 mt-0 overflow-hidden">
            <img className="absolute inset-0 w-full h-full object-cover" src="https://avatars.githubusercontent.com/glauberperez" alt="profile" />
          </div>
          <div className="text-center p-10">
            <h2 className="text-white font-medium font-sanfrancisco text-5xl md:text-6xl py-3">Glauber Perez</h2>
            <h3 className="text-white font-normal font-sanfrancisco text-2xl md:text-3xl py-2">Developer | Pentester</h3>
            <p className="text-white font-sanfrancisco text-md py-1 px-5 leading-8">
            I am a young developer passionate about technology and cybersecurity. 
            </p>
          </div>
          <div className="text-6xl flex justify-center gap-10 py-3">
            <a className="text-white hover:text-zinc-600 active:text-zinc-700" href="https://github.com/glauberperez">
              <AiFillGithub />
            </a>
            <a className="text-white hover:text-zinc-600 active:text-zinc-700" href="https://www.linkedin.com/in/glauber-perez-0b0b1b1b9/">
              <AiFillLinkedin />
            </a>
          </div>
        </section>  

        <section className="py-10">
          <div>

            <h3 className="text-white font-medium font-sanfrancisco text-4xl pb-10">Projects:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {
                repos.map( function(repo: Repo){
                  if(repo.topics.includes('portfolio')) {
                    return(

                    <div key={repo.id} className="bg-zinc-500 rounded-lg p-5">
                      <div className="flex justify-between">
                        <h4 className="text-white font-bold font-sanfrancisco text-2xl ">{repo.name.toUpperCase()}</h4>
                        <a href={repo.html_url} className="text-white font-sanfrancisco text-3xl text-right"> <AiFillGithub/> </a>
                      </div>
                      <p className="text-white font-sanfrancisco text-md py-5 leading-8 ">
                        {repo.description}
                      </p>
                    </div>

                    )
                  }
                  else {
                    return(
                    <></>
                    )
                  }
                })
              }

            </div>

          </div>
        </section>

      </main>

    </>
  )
}

export default App
