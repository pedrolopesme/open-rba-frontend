import './assets/css/App.scss';
import EvaluateSection from './components/evaluateSection';
import { Layout, Col,Row } from 'antd';
import logo from './assets/img/logo.svg'
import playground from './assets/img/playground.svg'

function App() {
  const { Header, Content  } = Layout;

  return (
    <Layout className="App">
      <Header className="main_header" justify="space-between">
        <Row justify="space-between">
          <Col span={4}><img src={logo} alt="Risk Based Authentication" /></Col>
          <Col span={4}><img src={playground} alt="Playground" /></Col>
        </Row>
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
