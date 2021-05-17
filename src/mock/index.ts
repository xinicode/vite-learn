




import Mock from 'mockjs';



import institution from './data/institution';


Mock.mock('/getList', 'get', institution.getList)
Mock.mock('/create', 'post', institution.create)

Mock.mock('/api/list','get',{"data":[
	{
		"id":"1",
		"title":"title"
	}
]})
