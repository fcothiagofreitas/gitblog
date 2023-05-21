import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faGithub)

export function Home() {
  return (
    <main className="w-auto sm:w-58 m-auto -mt-20 relative p-4">
      <section className="bg-blue-700 rounded-xl px-10 py-8 flex gap-8 flex-col items-center sm:flex-row">
        <img
          src="http://github.com/fcothiagofreitas.png"
          alt=""
          className="rounded-lg w-36"
        />
        <section className="text-blue-50 flex flex-col justify-between gap-6">
          <div className="flex justify-between ">
            <h2 className="text-2xl font-bold">Thiago Freitas</h2>
            <a href="" className="text-sm text-blue-1 gap-2 flex items-center">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p className="text-blue-200 leading-relaxed">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <div className="links text-blue-100 flex justify-start gap-6 flex-col  sm:flex-row">
            <a href="" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faGithub} className="text-blue-400" />
              Nome da conta
            </a>
            <a href="" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBuilding} className="text-blue-400" />
              Rocketseat
            </a>
            <a href="" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUserGroup} className="text-blue-400" />
              32 seguidores
            </a>
          </div>
        </section>
      </section>
      <section>
        <div className="pt-20 pb-14 flex gap-4 flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-blue-50 text-xl">Publicações</h2>
            <p className="text-blue-500 text-sm">6 publicações</p>
          </div>
          <form action="">
            <input
              type="text"
              placeholder="Buscar conteúdo"
              className="bg-blue-900 border-blue-500 border-solid border 
            placeholder:text-blue-500 h-12 w-full p-4 
            rounded-lg hover:border-blue-1 text-blue-50 "
            />
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <article className="bg-blue-700 rounded-xl p-8 text-blue-200 leading-relaxed flex gap-5 flex-col">
            <header className="grid justify-between items-start grid-flow-col gap-5">
              <h4 className="text-blue-50 text-xl">
                JavaScript data types and data structures
              </h4>
              <span className="text-sm text-blue-400 block w-14">Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in{' '}
            </p>
          </article>

          <article className="bg-blue-700 rounded-xl p-8 text-blue-200 leading-relaxed flex gap-5 flex-col">
            <header className="grid justify-between items-start grid-flow-col gap-5">
              <h4 className="text-blue-50 text-xl">
                JavaScript data types and data structures
              </h4>
              <span className="text-sm text-blue-400 block w-14">Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in{' '}
            </p>
          </article>

          <article className="bg-blue-700 rounded-xl p-8 text-blue-200 leading-relaxed flex gap-5 flex-col">
            <header className="grid justify-between items-start grid-flow-col gap-5">
              <h4 className="text-blue-50 text-xl">
                JavaScript data types and data structures
              </h4>
              <span className="text-sm text-blue-400 block w-14">Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in{' '}
            </p>
          </article>

          <article className="bg-blue-700 rounded-xl p-8 text-blue-200 leading-relaxed flex gap-5 flex-col">
            <header className="grid justify-between items-start grid-flow-col gap-5">
              <h4 className="text-blue-50 text-xl">
                JavaScript data types and data structures
              </h4>
              <span className="text-sm text-blue-400 block w-14">Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in{' '}
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
