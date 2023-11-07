'use client';
import './page.css'
import Image from 'next/image';
import Edit from '../assets/Edit.png';
import Trash from '../assets/Trash.png';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Modal_Filme, Modal_Genero } from '@/components/Modal';
interface Movie {
  idFilme: number,
  idGenero: number,
  nomeFilme: string
}
export interface Genre {
  idGenero: number,
  nomeGenero: string
}
export default function Home() {
  const [isModalOpen, setModalState] = useState(false);
  const [isModalOpen2, setModalState2] = useState(false);
  const [isModalOpen3, setModalState3] = useState(false);
  const [isModalOpen4, setModalState4] = useState(false);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [editedGenreName, setNewGenreName] = useState('');
  const [searchMovie, setSearchMovie] = useState('');
  const [searchGenre, setSearchGenre] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  const toggleModal = () => setModalState(!isModalOpen);
  const toggleModal2 = () => setModalState2(!isModalOpen2);
  const toggleModal3 = (idFilme?: number) => setModalState3(!isModalOpen3);
  const toggleModal4 = () => setModalState4(!isModalOpen4);

  async function getMovies() {
    try {
      const response = await api.get('/Filmes');
      const moviesData: Movie[] = response.data;
      setMovies(moviesData);
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  async function getGenres() {
    try {
      const response = await api.get('/Generos');
      const genresData: Genre[] = response.data;
      setGenres(genresData);
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  async function deleteMovie(idFilme: number) {
    try {
      await api.delete(`/Filmes/${idFilme}`);
      getMovies();
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  async function deleteGenre(idGenero: number) {
    try {
      await api.delete(`/Generos/${idGenero}`);
      getGenres();
    } catch (error) {
      alert('Você não pode apagar um Gênero se tiver filmes com esse gênero');
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  async function createMovie(idGenero: number, nomeFilme: string) {
    try {
      const movieData = {
        idGenero: idGenero,
        nomeFilme: nomeFilme,
      };

      await api.post('/Filmes', movieData);
      console.log('Filme criado com sucesso');
      toggleModal();
      getMovies();
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  async function updateMovie(idFilme: number, idGenero: number, nomeFilme: string) {
    try {
      const updatedMovie = {
        nomeFilme: nomeFilme,
        idGenero: idGenero,
      };
      await api.put(`/Filmes/${idFilme}`, updatedMovie);
      console.log('Filme atualizado com sucesso');
      toggleModal3();
      getMovies();
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  async function createGenre(nomeGenero: string) {
    try {
      const genreData = {
        nomeGenero: nomeGenero,
      };

      await api.post('/Generos', genreData);
      console.log('Gênero criado com sucesso');
      toggleModal2();
      getGenres();
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  async function updateGenre(idGenero: number, nomeGenero: string) {
    try {
      const updatedGenre = {
        nomeGenero: nomeGenero,
      };
      await api.put(`/Generos/${idGenero}`, updatedGenre);
      console.log('Gênero atualizado com sucesso');
      toggleModal4(); // Fecha o modal após a atualização
      getGenres(); // Atualiza a lista de gêneros
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  return (
    <main>
      <div className='box-tables wrapper'>
        <div className='content-primary'>
          <button className='button' onClick={toggleModal}>
            INSERIR FILME
          </button>
          <label>Procurar filme</label>
          <input
            className='input'
            type='text'
            placeholder='Ex: Avatar'
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)} // Atualiza o estado da pesquisa
          />
          <table className='table table-one'>
            <thead>
              <tr>
                <th className='td-normal'>Título</th>
                <th className='td-normal'>Gênero</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies
                .filter((movie) =>
                  movie.nomeFilme.toLowerCase().includes(searchMovie.toLowerCase())
                )
                .map((movie) => (
                  <tr key={movie.idFilme}>
                    <td className='td-title'>{movie.nomeFilme}</td>
                    <td className='td-normal'>{movie.idGeneroNavigation.nomeGenero}</td>
                    <td className='td-sec'>
                      <button
                        className='btn'
                        onClick={() => {
                          setSelectedMovieId(movie.idFilme);
                          toggleModal3(movie.idFilme);
                        }}
                      >
                        <Image src={Edit} width={22} height={22} alt='Editar' />
                      </button>
                      <button
                        className='btn'
                        onClick={() => deleteMovie(movie.idFilme)}
                      >
                        <Image src={Trash} width={21} height={21} alt='Apagar' />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className='content-secondary'>
          <button className='button' onClick={toggleModal2}>
            INSERIR GÊNERO</button>
          <label>Procurar gênero</label>
          <input
            className='input imodal'
            type="text"
            placeholder="Ex: Romance"
            value={searchGenre}
            onChange={(e) => setSearchGenre(e.target.value)}
          />
          <table className='table table-sec'>
            <thead>
              <tr>
                <th className='td-normal' colSpan={2}>Gênero</th>
              </tr>
            </thead>
            <tbody>
              {genres
                .filter((genre) =>
                  genre.nomeGenero.toLowerCase().includes(searchGenre.toLowerCase())
                )
                .map((genre) => (
                  <tr key={genre.idGenero}>
                    <td className="td-normal">{genre.nomeGenero}</td>
                    <td className='td-sec'>
                      <button className='btn'
                        onClick={() => {
                          setSelectedGenreId(genre.idGenero);
                          toggleModal3(genre.idGenero)
                        }}>
                        <Image src={Edit} width={22} height={22} alt='Editar' />
                      </button>
                      <button className='btn' onClick={() => deleteGenre(genre.idGenero)}>
                        <Image src={Trash} width={21} height={21} alt='Apagar' />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal_Filme
        title="Nome do Filme"
        isOpen={isModalOpen}
        onClose={toggleModal}
        action={(idGenero, nomeFilme) => createMovie(idGenero, nomeFilme)}
        text="CRIAR"
        genres={genres}>
        Inserir Filme
      </Modal_Filme>
      <Modal_Genero
        title="Nome do Gênero"
        isOpen={isModalOpen2}
        onClose={toggleModal2}
        action={(nomeGenero) => createGenre(nomeGenero)}
        text="CRIAR"
        genres={genres}>
        Inserir Gênero
      </Modal_Genero>
      <Modal_Filme
        title="Nome nome do filme"
        isOpen={isModalOpen3}
        onClose={() => toggleModal3()}
        action={(idGenero, nomeFilme) => updateMovie(selectedMovieId, idGenero, nomeFilme)}
        text="ATUALIZAR"
        genres={genres}>
        Editar Filme
      </Modal_Filme>
      <Modal_Genero
        title="Novo nome gênero"
        isOpen={isModalOpen4}
        onClose={toggleModal4}
        action={(nomeGenero) => updateGenre(selectedGenreId, nomeGenero)}
        text="ATUALIZAR"
        genres={genres}>
        Editar Gênero
      </Modal_Genero>
    </main>
  )
}
