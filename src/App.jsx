
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from "react";
import Navigation from './navigation/Navigation.jsx'
import Loader from './components/loader/Loader.jsx';

const HomePage=lazy(()=>import('./pages/HomePage/HomePage.jsx'))
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage.jsx'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast.jsx'))
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews.jsx'))
const NotFound = lazy(() => import('./pages/Notfound/Notfound.jsx'))

function App() {

  return (

    <div>
      <Navigation/>
<Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/:movieId" element={<MovieDetailsPage />} >
          <Route path='cast' element={<MovieCast/>}/>
          <Route path='reviews' element={<MovieReviews/>}/>
          </Route >
        <Route path='*' element={<NotFound/>} />
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
