import './assets/css/App.scss';
import EvaluateSection from './components/evaluateSection';
import { Layout } from 'antd';
import logo from './assets/img/logo.svg'
import playground from './assets/img/playground.svg'

function App() {
  const { Header, Content } = Layout;

  return (
    <Layout className="App">
      <Header className="main_header">
        <img src={logo} alt="Risk Based Authentication" />
        <img src={playground} alt="Playground" />
      </Header>
      <Layout>
        <Content className="site-layout" style={{ paddingBottom: '30px', marginTop: '30px' }}>
          <EvaluateSection />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
