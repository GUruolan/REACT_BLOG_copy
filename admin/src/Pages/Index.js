import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../static/adminIndex.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function AdminIndex() {

    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };

    return (

        <Layout style={{ minHeight: '100vh', margin: '0 16px'}}>

            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} collapsedWidth = '20px'>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <span>工作台</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <span>添加文章</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <span>文章管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">添加文章</Menu.Item>
                        <Menu.Item key="4">文章列表</Menu.Item>

                    </SubMenu>

                    <Menu.Item key="9">
                        <span>留言管理</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0,margin: '0 16px' }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>博客工作台.</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>REACT_BLOG Admin</Footer>
            </Layout>


        </Layout>
    )

}

export default AdminIndex