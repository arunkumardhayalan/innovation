import './styles/antd-overwrite.scss';
import './styles/global.scss';
import MyRoutes from './routes';
import MainHeader from './components/header';

function App() {
  return (
    <>
      <MainHeader />
      <MyRoutes />
    </>
  );
}

export default App;
