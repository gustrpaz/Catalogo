'use client'
import './page.css'
import Image from 'next/image'
import Edit from '../assets/Edit.png'
import Trash from '../assets/Trash.png'
import { useState } from 'react';
import { Modal } from '../components/Modal'

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    console.log('Entrou aqui')
    setModalIsOpen(!modalIsOpen)
  }
  console.info(modalIsOpen)
  return (
    <div className='box-tables'>
      <div className='content-primary'>
        <button className='button'
          onClick={handleOpenModal}>
          Inserir Filme
        </button>
        <label>Procurar filme</label>
        <input type='text' placeholder='Ex: Avatar'></input>
        <table className='table table-one'>
          <thead>
            <tr>
              <th className='td-normal'>Título</th>
              <th className='td-normal'>Gênero</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='td-title'>Avatar</td>
              <td className="td-normal">Aventura</td>
              <td className='td-sec'>
                <button className='btn'><Image src={Edit} width={22} height={22} alt='Editar'></Image></button>
                <button className='btn'><Image src={Trash} width={21} height={21} alt='Apagar'></Image></button>
              </td>
            </tr>
            <tr>
              <td className='td-title'>After</td>
              <td className="td-normal">Romance</td>
              <td className='td-sec'>
                <button className='btn'><Image src={Edit} width={22} height={22} alt='Editar'></Image></button>
                <button className='btn'><Image src={Trash} width={21} height={21} alt='Apagar'></Image></button>
              </td>
            </tr>
            <tr>
              <td className='td-title'>Invencivel</td>
              <td className="td-normal">Ação</td>
              <td className='td-sec'>
                <button className='btn'><Image src={Edit} width={22} height={22} alt='Editar'></Image></button>
                <button className='btn'><Image src={Trash} width={21} height={21} alt='Apagar'></Image></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='content-secondary'>
        <button className='button'
          onClick={handleOpenModal}>
          Inserir Gênero</button>
        <label>Procurar gênero</label>
        <input type='text' placeholder='Ex: Romance'></input>
        <table className='table table-sec'>
          <thead>
            <tr>
              <th className='td-normal' colSpan={2}>Gênero</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td-normal">Aventura</td>
              <td className='td-sec'>
                <button className='btn'><Image src={Edit} width={22} height={22} alt='Editar'></Image></button>
                <button className='btn'><Image src={Trash} width={21} height={21} alt='Apagar'></Image></button>
              </td>
            </tr>
            <tr>
              <td className="td-normal">Comédia</td>
              <td className='td-sec'>
                <button className='btn'><Image src={Edit} width={22} height={22} alt='Editar'></Image></button>
                <button className='btn'><Image src={Trash} width={21} height={21} alt='Apagar'></Image></button>
              </td>
            </tr>
            <tr>
              <td className="td-normal">Romance</td>
              <td className='td-sec'>
                <button className='btn'><Image src={Edit} width={22} height={22} alt='Editar'></Image></button>
                <button className='btn'><Image src={Trash} width={21} height={21} alt='Apagar'></Image></button>
              </td>
            </tr>
            <tr>
              <td className="td-normal">Terror</td>
              <td className='td-sec'>
                <button className='btn'><Image src={Edit} width={22} height={22} alt='Editar'></Image></button>
                <button className='btn'><Image src={Trash} width={21} height={21} alt='Apagar'></Image></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal isOpen={modalIsOpen} onClose={handleOpenModal}>
        <div>
          <h2>Teste</h2>
        </div>
      </Modal>
    </div>
  )
}