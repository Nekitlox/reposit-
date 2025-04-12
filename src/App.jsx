
import foto from "../src/assets/me.jpg";
import Merare from "./dade/Merare";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans p-4">

      <section className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-md rounded-2xl p-6 mb-6">
        <img src={foto} alt="" className="w-40 h-40 object-cover rounded-xl border-4 border-gray-300 mb-4 md:mb-0 md:mr-6"  />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold">Балеевских Никита</h2>
          <p className="text-pink-500mt-1"> Fronend-разработчик</p>
          <a href="https://t.me/pridurokzz" className="bg-red-400 py-2 px-5">как найти меня</a>
          <p>позвони мне пупсик</p>
          <p>+996552157391</p>
        </div>
      </section>


      <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">опыт работы</h2>
        <p className="text-pink-500">
         работал на james smita, таксавал но это таак для души, и на codify
        </p>
      </section>


      <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <Merare />
      </section>


      <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Образование</h2>
        <h3 className="text-pink-500">Пока нету </h3>
      </section>

  
     
    </main>
  );
}

export default App;
