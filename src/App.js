import './App.css';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import Grid from 'antd/lib/card/Grid';
import { Slider } from 'antd';
import { Card, Col, Row } from 'antd'
import { Switch } from 'antd';
import { Select, Radio } from 'antd';
import { Avatar, Image } from 'antd';
import { Button } from 'antd';

function App() {
  const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: 'black',
    }}
  />
);

const onSearch = value => console.log(value);
  return (
    <div className="App">
      <h1>Simple Pricing</h1>
      <Search
      style={{width:"30%"}}
      placeholder="Your Work email..."
      allowClear
      enterButton="Get Start Free"
      size="large"
      onSearch={onSearch}
    />
    <p>Free froever with Unlimited User, Free 14-days trail to test Premium</p>
    <h3 style={{color:"white",fontSize:"1rem"}}>FREE Asena & Jira Migation Transfer evething in seconds!</h3>
    <Row gutter={16} style={{display:"flex",justifyContent:"center",marginTop:"60px"}}>
      
      <Col span={6} style={{height:"10rem"}}>
        <Card id='col' bordered={false}> 
        <h4>Free</h4>
          <Row style={{justifyContent:"center"}}><h5>$</h5><h1>0</h1></Row>
          <p style={{marginTop: "-1rem"}}>Per User/month</p>
        <Row><p style={{fontWeight:"900",justifyContent:"center"}}> Unlimited</p><p>User</p></Row>
        <Row><p style={{fontWeight:"900",justifyContent:"center"}}> Basic</p><p>Permissions</p></Row>
        <Row><p style={{fontWeight:"900",justifyContent:"center"}}> 100 MB</p><p>Total stotage</p></Row>   
        </Card>
      </Col>
      <Col span={6}>
        <Card id='col1' bordered={false}>
          <h4>Premium</h4>
          <Row style={{justifyContent:"center"}}><h5>$</h5><h1>4</h1><h5>.99</h5></Row>
          <p style={{marginTop: "-1rem"}}>Per User/month</p>
          <Row style={{justifyContent:"center",justifyContent:"space-around"}}><p>Monthly</p><Switch defaultChecked /><p>Yearly</p></Row>
        <Row><p style={{fontWeight:"900",justifyContent:"center"}}> Free Guest</p><p>User</p></Row>
        <Row><p style={{fontWeight:"900",justifyContent:"center"}}> Advance</p><p>Permissions</p></Row>
        <Row><p style={{fontWeight:"900",justifyContent:"center"}}> +10GB</p><p>stotage Per User</p></Row>
        <Row><p style={{fontWeight:"900",justifyContent:"center"}}> Priority</p><p>Support</p></Row>
        </Card>
      </Col>
      <Col span={6}>
        <Card id='col2' bordered={false} style={{background:"#4169E1"}}>
          <h4 id="num0">Calculate how much</h4> <h4 id='you'>you'd spend</h4>
          <Row id='row'><h4 id="num1">1</h4>
          <h4 id="num2">$4.99</h4></Row>
          
          <Row style={{justifyContent:"space-between"}}><p style={{color:"white",textAlign:"start"}}># of user</p>
          <p style={{color:"white",textAlign:"end"}}>Per month(billed yearly)</p></Row>
          <Slider defaultValue={30} tooltipVisible />
        </Card>
      </Col>
    </Row>
    <div className="App1">
      <h1>Pricing Plans</h1>
      <p style={{fontWeight:"900"}}>Choose Your best Plan by switching between the different prices</p>
      <Radio.Button value="large" >Month</Radio.Button>
        <Radio.Button value="default">Yearly</Radio.Button>
    <Row gutter={16}>
      <Col id='per1' span={5}>
        <Card  bordered={false}>
        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
        <h5 style={{marginTop:"3rem"}}>Basic</h5>
        <Row style={{justifyContent:"center"}}><h5>$</h5><h1>14</h1></Row>
        <p>/Month</p>
        <p style={{fontWeight:"900"}}>5 Projects</p>
        <Button style={{marginTop:"4rem"}}>Choose</Button>
        </Card>
      </Col>
      <Col id='per2' span={5}>
        <Card  bordered={false}>
        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
        <h5 style={{marginTop:"3rem"}}>Plus</h5>
        <Row style={{justifyContent:"center"}}><h5>$</h5><h1>74</h1></Row>
        <p>/Month</p>
        <p style={{fontWeight:"900"}}>10 Projects</p>
        <p style={{fontWeight:"900"}}>Get 10 Getty pics</p>
        <Button style={{marginTop:"2rem"}}>Choose</Button>
        </Card>
      </Col>
      <Col id='per3' span={5}>
        <Card  bordered={false}>
        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
        <h5 style={{marginTop:"3rem"}}>Pro</h5>
        <Row style={{justifyContent:"center"}}><h5>$</h5><h1>140</h1></Row>
        <p>/Month</p>
        <p style={{fontWeight:"900"}}>30 Projects</p>
        <p style={{fontWeight:"900"}}>Get 20 Getty pics</p>
        <p style={{fontWeight:"900"}}>See more</p>
        <Button>Choose</Button>
        </Card>
      </Col>
    </Row>
    </div>
    </div>
  );
}

export default App;
