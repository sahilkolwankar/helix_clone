import { Banner } from './containers/banner';
import { Header } from './containers/header';
import { Questions } from './containers/questions';
import { Sidebar } from './containers/sidebar';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="row contents">
        <Questions />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
