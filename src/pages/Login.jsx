import { Link } from "react-router-dom";

export default function Login(){
    return (
      <>
        <div className="backdrop-blur-md bg-white/30  rounded-md max-w-md my-60 mx-auto">
          <h1 className="flex items-center justify-center p-2 font-bold mb-1 text-2xl text-white">Login</h1>
          <div className="backdrop-blur-xl bg-white/30 shadow rounded-md space-y-4 p-6 flex flex-col items-center">
            <div className="email">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="Digite seu e-mail" className="bg-slate-50 border-slate-700 border rounded-md focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 text-gray-700 focus:text-blue-700 ml-4 focus:outline-none px-2 py-1 placeholder:text-gray-400 text-sm transition duration-300 ease-out md:ease-in"  />


            </div>
            <div className="password">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder="Digite sua senha" className="bg-slate-50 border-slate-700 border rounded-md focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 text-gray-700 focus:text-blue-700 ml-4 focus:outline-none px-2 py-1 placeholder:text-gray-400 text-sm transition duration-300 ease-out md:ease-in"  />


            </div>
            <button className="bg-blue-500 text-white p-2 w-1/3 rounded-md hover:bg-gradient-to-r from-green-300 to-green-900 transition focus:ease-out duration-300 hover:scale-110">Entrar</button>
          </div>
          <div className="flex items-center justify-center">
            <h4 className="hover:underline">Esqueceu a senha?</h4>
            <Link to="/register" href="#" className="text-xl text-violet-900 hover:underline p-1">Cadastre-se</Link>          </div>
        </div>
      </>
    )
}