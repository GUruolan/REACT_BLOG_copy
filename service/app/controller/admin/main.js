'use strict';

const Controller = require('egg').Controller

class MainController extends Controller{ //提供ctx（上下文）等属性和方法

    async index(){
        //测试
        this.ctx.body='hi api'
    }

    async checkLogin(){
        //this.ctx.body='hi api'
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = " SELECT userName FROM admin_user WHERE userName = '"+userName +
                    "' AND password = '"+password+"'"
        const res = await this.app.mysql.query(sql)
        if(res.length>0){
            //登录成功,进行session缓存
            let openId=new Date().getTime()
            this.ctx.session.openId={ 'openId':openId }
            this.ctx.body={'data':'登录成功','openId':openId}
  
        }else{
            this.ctx.body={'data':'登录失败'}
        } 
    }
        //获取后台文章分类信息
    async getTypeInfo(){
        const resType = await this.app.mysql.select('article_type') //请求article_type表中的所有数据
        this.ctx.body={data:resType}
    }
}

module.exports = MainController