import logo from './logo.svg';
import './App.css';
import { Address } from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

const App = () => (
  <>
    <FullName />
    <Address />
    
    <ProfilePhoto />
  </>
 );
 export default App;
