import './Modal.css';
import React, { useState } from 'react';
import Image from 'next/image';
import closeIcon from '../assets/xmark-solid.svg'
import { Genre } from "../app/page";
interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: (idFilme?: number) => void;
  action: (idGenero?: number) => void;
  text: string;
  genres?: Genre[];
  children: React.ReactNode;
}
export const Modal_Filme: React.FC<ModalProps> = ({ title, isOpen, onClose, action, text, children, genres }) => {
  const [nomeFilme, setNomeFilme] = useState('');
  const [generoSelecionado, setGeneroSelecionado] = useState('');
  return isOpen ? (
    <div className={'modal'}>
      <div className={'modal__overlay'} />
      <div className={'modal__box'}>
        <div className='close-icon'>
          <button className={'modal__close-btn'} onClick={() => onClose()}>
            <Image src={closeIcon} alt={'close modal'} width={30} height={30} />
          </button>
        </div>
        <div className='modal__container'>
          <div className={'modal_content'}>
            <label>{title}</label>
            <input
              className='input imodal'
              type="text"
              placeholder="Ex: Avatar"
              value={nomeFilme}
              onChange={(e) => setNomeFilme(e.target.value)}
            />
            <select
              name="genero"
              id="genero"
              value={generoSelecionado}
              onChange={(e) => setGeneroSelecionado(e.target.value)}
            >
              <option value="" selected>Selecionar Gênero</option>
              {genres &&
                genres.map((genre) => (
                  <option key={genre.idGenero} value={genre.idGenero}>
                    {genre.nomeGenero}
                  </option>
                ))
              }
            </select>
            <button className="button-modal" onClick={() => action(generoSelecionado, nomeFilme)}>{text}</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
export const Modal_Genero: React.FC<ModalProps> = ({ title, isOpen, onClose, action, text, children }) => {
  const [nomeGenero, setNomeGenero] = useState('');
  return isOpen ? (
    <div className={'modal'}>
      <div className={'modal__overlay'} />
      <div className={'modal__box'}>
        <div className='close-icon'>
          <button className={'modal__close-btn'} onClick={() => onClose()}>
            <Image src={closeIcon} alt={'close modal'} width={30} height={30} />
          </button>
        </div>
        <div className='modal__container'>
          <div className={'modal_content'}>
            <label>{title}</label>
            <input
              className='input imodal'
              type="text"
              placeholder="Ex: Romance"
              value={nomeGenero}
              onChange={(e) => setNomeGenero(e.target.value)} />
            <button className="button-modal" onClick={() => action(nomeGenero)}>{text}</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
