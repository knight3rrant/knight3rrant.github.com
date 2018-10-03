let arrOfObj = [
	{
		name:'Harvard',
		ranking:4
	},
	{
		name:'MIT',
		ranking:1
	},
	{
		name:'Yale',
		ranking:5
	},
	{
		name:'Minnesota',
		ranking:12
	},
]


for (let i=0;i<arrOfObj.length;i++) {  
  if(arrOfObj[i].name > arrOfObj[i+1].name) {
temparr.push(arrOfObj[i])
console.log(arrOfObj[i])
}
    
  else  {console.log(arrOfObj[i+i])
     temparr.push(arrOfObj[i+1])
        }
}
