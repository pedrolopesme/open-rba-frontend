import './App.css';
import EvaluateSection from './components/evaluateSection';
import { Layout } from 'antd';
import logo from './logo.svg'

function App() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout className="App">
      <Header>
        <img src={logo} alt="Risk Based Authentication" style={{width:'300px'}} />
      </Header>
      <Layout style={{ padding: '0 50px' }}>
          <EvaluateSection />
      </Layout>
    </Layout>
  );
}

export default App;
