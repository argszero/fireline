# Fire Line


## 现实
现场需求分析、上线前现场开发等原因，使得我们不得不面对多地协同的问题。这种情况下，一般的集中式项目管理工具就显的力不从心，甚至显的有些讨厌。
比如：

* 我们在公司部署一个redmine做项目管理
* 留在公司的人员很容易反馈、跟踪问题
* 项目地汇报和跟踪问题就需要连接公司VPN
* 不是所有项目地都可以访问外网的
* -- 悲催的同事只能晚上回到酒店再将项目进展更新到redmine上
* 有点项目地外网和业务网是分离的
* -- 相对幸运的同事只能拔业务网网线、查内网网线、更新项目进展更新到redmine
	
于是：

* 公司领导不断电话到现场：还有多少问题啊？有没有进展啊？
* 现场负责人：每个人汇报一下问题到我这里，或者各自想办法更新到公司redmine上，领导要看
* 现场开发人员：这不是添乱么？！


## 改进：
现场部署一个共享系统

### 比如现场版redmine，或者现场版svn server + excel 
* 部署麻烦、现场不一定提供服务器，部署在个人电脑又依赖那个电脑不能离线。
* 同步到公司麻烦： 还是依赖讨厌的"电话催"

### 比如做一个git server
* 不是每个人都喜欢git
* 同步时需要手动触发

## 梦想：
* 每个人机器上都开机启动一个fireline（文件要小、占用资源要少...)。
* 每个人在http://localhost/fireline上汇报问题、更新进度。
* 在本机汇报的问题、更新，自动同步到别人的机器上。（只要网络可达，就自动同步）(当现场某个机器连到公司VPN时,也就自动同步现场和公司数据)
	
## 准备：
* 采用java? scala? nodejs? 其他?
* 如何发现那些机器需要同步？
* 1.  局域网组播
* 2.  外网轮询
* 如何做到自动同步？ 
* 1. 只要能做到两两同步，就能做到所有机器的同步
* 2. 两台机器需要同步的是：对数据的更新操作（简化为insert\update\delete sql)
* 3. 每条更新操作都有一个固定的时间戳，只要两台机器互相获取一下时间，就知道数据的先后顺序
* 4. 同步时只需要将这些sql按照顺序执行一下就可以了
* 如何做自定义跟踪、统计项？

## 同道中人
* https://github.com/refuge/refuge
* http://blog.jondh.me.uk/meshing/
## 设计：
等着吧，啥时候有空时弄弄

