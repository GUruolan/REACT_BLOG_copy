/**
 * 主页
 */

import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'

//import Image from 'next/image'
import { Row, Col, List} from 'antd'
import { useState } from 'react'
import {CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'

import service_path from '../config/apiurl.js'

import homesty from '../styles/pages/Home.module.css'
import listy from '../styles/pages/list.module.css'

import Header from '../components/Header'
import Author from '../components/Author'
import Card from '../components/Card'

export default function Home(list) {

   const [myList, setMylist] = useState(list.data)

  return (
    <div className={homesty.container}>
      <Head>
        <title>Home</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className={homesty.commain} type="flex" justify="center">
        <Col className={homesty.commleft} xs={24} sm={24} md={16} lg={18} xl={14}>
          <List 
            header={<div> 最新笔记 </div>} 
            itemLayout = "vertical"
            dataSource = {myList}
            renderItem = {(item)=>{
              return (
                <List.Item>
                  <div className = {listy.list_title}>
                  <Link href = {{pathname:'/detailed', query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                  </div>
                  <div className = {listy.list_icon}>
                  <span><CalendarOutlined/>{item.addtime}</span>
                  <span><FolderOutlined/>{item.typename}</span>
                  <span><FireOutlined/>{item.viewcount} view</span>
                  </div>
                  <div className = {listy.list_context}>{item.introduce}</div>
                 
                </List.Item>
              )}}
              
          />
        </Col>
        <Col className={homesty.commright} xs={0} sm={0} md={7} lg={5} xl={4}>
         <Author />
         <Card />
        </Col>
      </Row>


      <footer className={homesty.footer}>
        <div>Powered by React + Node + Ant Desgin </div>
      </footer>
    </div>
  )
}

Home.getInitialProps = async ()=>{ //接收初始值，也就是形参list
  const promise = new Promise((resolve)=>{
    axios(service_path.urlarticlelist).then(
      (res)=>{
        //console.log('=======>',res)
        resolve(res.data);
      }
    )
  })
  return await promise;
}




