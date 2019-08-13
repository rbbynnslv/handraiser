import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Menu, Icon, Button ,Layout} from 'antd';


const { Header, Sider, Content , Footer} = Layout;

class App extends React.Component {
  


  render(){

    return (
      <React.Fragment>
          <Layout>
             
                
              <Sider 
                  trigger={null} 
                  collapsible collapsed={true} 
                  style={{
                    
                    background:'transparent',
                  
                  }}

              >
                <Menu mode="inline" 
                      defaultSelectedKeys={['1']}
                      style={{
                        background:'white',
                        height:'100vh',

                      }} 

                >

                  <Menu.Item key="1">
                    <Icon type="user" />
                    <span>nav 1</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                  </Menu.Item>
                </Menu>

              </Sider>

              <Layout>
                
            
                <Header 
                    style={{ 
                      background: '#444', 
                      color:'#FFF',
                      padding:0,

                }}>
                    <Icon type="menu-fold" size="large" style={{padding:15}} />
                </Header>
               
  
                <Content
                  style={{
                    // border:'solid 1px green'
                  }}
                >
                  Content
                </Content>


                <Footer style={{border:'solid 1px blue'}} >footer</Footer>


              </Layout>
              
          </Layout>

          
      </React.Fragment>
    );
  
  }
}

export default App;
