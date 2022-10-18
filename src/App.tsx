import React, { useEffect, useState } from 'react';
import logo from './Loker BUMN 45.png';
import './App.css';
import axios from 'axios';

type bacaDataInterface = {
  id: number, name: string, message: string, created_at: string
}

function App() {
  const [bacaData, setbacaData] = useState<bacaDataInterface[]>([]);

  useEffect(() => {
    (async () => {
      const getData = await axios.get('https://jsbasic.hafidzubaidillah.com/messages').then(gotData => gotData.data)
      console.log(getData)
      setbacaData(getData)
    })()
  }, [])

  console.log(bacaData)


  return (
    <>
      <nav className='flex bg-slate-600 text-white p-4 justify-between items-center'>
        <img src={logo} className='h-7' />
        <ul className='flex'>
          <li className='px-4 py-2'>Instagram</li>
          <li className='px-4 py-2'>Telegram</li>
          <li className='p-4 py-2'>Facebook</li>
        </ul>
      </nav>
      <div id='middle' className="h-screen" style={{ backgroundImage: 'url("/cover.jpg")', backgroundSize: 'contain', backgroundPosition: 'center' }}>
      </div>
      <div id="form" className="bg-gray-600 flex justify-center">
        <form className="isiform flex flex-col w-[30%] text-white">
          <span className="sukses text-green-300">Data berhasil disubmit</span>
          <span className="failed text-red-500">Gagal</span>
          <label htmlFor="name">Name</label>
          <input name="name" autoComplete="off" />
          <label htmlFor="pesan">Pesan</label>
          <textarea name="pesan" id="pesan" cols={30} rows={10}></textarea>
          <button type="submit" className="bg-green-800 my-5 hover:bg-sky-700">Submit</button>
          <button type="reset" className="bg-yellow-800 hover:bg-sky-700">Reset</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Pesan</th>
          </tr>
        </thead>
        <tbody>
          {
            bacaData.length ? bacaData.map((item) => {
            return <tr key={(item.id)}><td className='border'>{item.name}</td><td className='border'>{item.message}</td></tr>
            }) : <tr><td className='border' colSpan={2}>Tidak ada data</td></tr>}
        </tbody>
      </table>
      <div id='footer'></div>
    </>
  );
}

export default App;
