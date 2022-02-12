// import Routes

import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/private route/PrivateRoute';

// import Main Screen pages

import Hero from './components/hero/hero';
import Menu from './components/menu/menu';
import Dashbord from './components/dashbord/dashbord';
import Bookshelf from './components/bookshelves/bookshelves';
import Community from './components/community/community';
import Threads from './components/threads/threads';
import Busket from './components/busket/busket';

// import Mechanism Component pages

import Register from './components/register/register';
import Login from './components/login/login';
import BookshelvesList from './components/bookshelves/sub_components/BookshelvesList/BookshelvesList';
import AddBookshelf from './components/bookshelves/sub_components/AddBookshelf/AddBookshelf';
import BookshelfDetails from './components/bookshelves/sub_components/Bookshelf/Bookshelf';
import BookList from './components/bookshelves/sub_components/BookList/BookList';
import AddBook from './components/bookshelves/sub_components/AddBook/AddBook';
import BookDetails from './components/bookshelves/sub_components/BookDetails/BookDetails';
import EditBook from './components/bookshelves/sub_components/EditBook/EditBook';
import EditBookshelf from './components/bookshelves/sub_components/EditBookshelf/EditBookshelf';

// import css styling sheet

import './App.css';
import BusketItem from './components/busket/Sub_Component/BusketItem';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      
    <Routes>
      
      <Route path='/' element={<Hero></Hero>}/>

      <Route path='/signup' element={<Register></Register>}/>

      <Route path='/signin' element={<Login></Login>}/>

      <Route
        path='/menu' 
        element={
        <PrivateRoute>
        <Menu></Menu>
        </PrivateRoute>
        }
      />

      <Route
        path='/dashbord' 
        element={
        <PrivateRoute>
        <Dashbord></Dashbord>
        </PrivateRoute>
        }
      />

      <Route
        path='/bookshelves' 
        element={
        <PrivateRoute>
        <Bookshelf></Bookshelf>
        </PrivateRoute>
        }
      />
      
      <Route path='/showBookshelves' element={<BookshelvesList></BookshelvesList>} />
      <Route path='/addBookshelf' element={<AddBookshelf></AddBookshelf>} />
      <Route path='/editBookshelf/:id' element={<EditBookshelf></EditBookshelf>} />
      <Route path='/:id' element={<BookshelfDetails></BookshelfDetails>} />

      <Route path='/showBooks/:id' element={<BookList></BookList>} />
      <Route path='/addBook/:id' element={<AddBook></AddBook>} />
      <Route path='/editBook/:id' element={<EditBook></EditBook>} />
      <Route path='/book/:id' element={<BookDetails></BookDetails>} />
      
      <Route
        path='/community' 
        element={
        <PrivateRoute>
        <Community></Community>
        </PrivateRoute>
        }
      />

      <Route
        path='/threads' 
        element={
        <PrivateRoute>
        <Threads></Threads>
        </PrivateRoute>
        }
      />

      <Route path='/showThreads' element={<Threads></Threads>} />
      
      <Route path='/busket' element={<Busket></Busket>} />
      <Route path='/busketItem' element={<BusketItem></BusketItem>} />

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
