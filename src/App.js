import './App.css';
import EvaluateSection from './components/evaluateSection';
import { Layout } from 'antd';
import logo from './assets/img/logo.svg'

function App() {
  const { Header, Content } = Layout;

  return (
    <Layout className="App">
      <Header style={{ textAlign: 'center' }}>
        <img src={logo} alt="Risk Based Authentication" style={{width:'300px'}} />
      </Header>
      <Layout>
        <Content className="site-layout" style={{ padding: '50px', marginTop: 64 }}>
          <EvaluateSection />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
