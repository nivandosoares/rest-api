# rest-api
## A simple REST API with node express and mysql database

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"><img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white">


Endpoints:

GET : <code>https://mysqldb-hqnj.onrender.com/users</code> returns a array with all users on database

POST : <code>https://mysqldb-hqnj.onrender.com/users</code> + a JSON object for example <code>{"nome":"teste de usuario", "empresa": "teste de empresa"}</code>

PUT: <code>https://mysqldb-hqnj.onrender.com/users/id</code> + a JSON object with the data <code>{
	"nome": "Craque Neto",
	"empresa": "Band"
}</code>


DELETE: <code>https://mysqldb-hqnj.onrender.com/users/id</code>
