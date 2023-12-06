var express = require('express');
var router = express.Router();
  let dataArray = [
  {
    "id":"1",
    "name": "Espresso",
    "image": "https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "type": "Dark Roast",
    "origin": "Brazil",
    "price": 2.99,
    "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"2",
    "name": "Cappuccino",
    "image": "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D",
    "type": "Medium Roast",
    "origin": "Colombia",
    "price": 3.49,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"3",
    "name": "Latte",
    "image":"https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "type": "Light Roast",
    "origin": "Ethiopia",
    "price": 3.99,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"4",
    "name": "Americano",
    "image": "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "type": "Blend",
    "origin": "Costa Rica",
    "price": 2.79,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"5",
    "name": "Mocha",
    "image":"https://images.unsplash.com/photo-1596078841242-12f73dc697c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9jaGF8ZW58MHx8MHx8fDA%3D",
    "type": "Dark Roast",
    "origin": "Peru",
    "price": 4.25,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"6",
    "name": "Iced Coffee",
    "image":"https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    "type": "Medium Roast",
    "origin": "Kenya",
    "price": 3.75,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"7",
    "name": "Macchiato",
    "image":"https://images.unsplash.com/photo-1557772611-722dabe20327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFjY2hpYXRvfGVufDB8fDB8fHww",
    "type": "Light Roast",
    "origin": "Guatemala",
    "price": 3.25,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"8",
    "name": "Flat White",
    "image":"https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmxhdCUyMFdoaXRlfGVufDB8fDB8fHww",
    "type": "Blend",
    "origin": "Mexico",
    "price": 4.49,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"9",
    "name": "Turkish Coffee",
    "image" : "https://plus.unsplash.com/premium_photo-1670684184188-bd6ce82fd366?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHVya2lzaCUyMENvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    "type": "Dark Roast",
    "origin": "Turkey",
    "price": 4.99,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"10",
    "name": "Irish Coffee",
    "image":"https://images.unsplash.com/photo-1515701238541-0cb8d3165120?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "type": "Medium Roast",
    "origin": "Ireland",
    "price": 5.25,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"11",
    "name": "Affogato",
    "image": "https://images.unsplash.com/photo-1638543284847-3a6bed3e1689?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "type": "Light Roast",
    "origin": "Italy",
    "price": 4.75,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
      "id":"12",
    "name": "Hazelnut Coffee",
    "image":"https://images.unsplash.com/photo-1634235581210-57db377b7b05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF6ZWxudXQlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
    "type": "Blend",
    "origin": "France",
    "price": 3.99,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"13",
    "name": "Vanilla Latte",
    "image":"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmFuaWxsYSUyMExhdHRlfGVufDB8fDB8fHww",
    "type": "Dark Roast",
    "origin": "Madagascar",
    "price": 4.49,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"14",
    "name": "Decaf Coffee",
    "image": "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGVjYWYlMjBDb2ZmZWV8ZW58MHx8MHx8fDA%3D",
    "type": "Medium Roast",
    "origin": "Switzerland",
    "price": 3.25,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"15",
    "name": "Peppermint Mocha",
    "image":"https://unsplash.com/photos/mint-juice-in-clear-drinking-glass-j8GBWTZ4GAw",

    "type": "Light Roast",
    "origin": "Canada",
    "price": 4.75,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"16",
    "name": "Brazilian Coffee",
    "image":"https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "type": "Blend",
    "origin": "Brazil",
    "price": 3.99,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"17",
    "name": "Ethiopian Yirgacheffe",
    "image": "https://imgs.search.brave.com/B2vTA2OcuDdFyWAk1eWkeVz3ipUqpHVTntzm-py2V-o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlc2hyb2FzdGVk/Y29mZmVlLmNvbS9j/ZG4vc2hvcC9wcm9k/dWN0cy9tZWRpdW1f/OTllYmI2NDMtNDBj/NC00ZmZlLThhMTct/MGFlYjAyYmE5MDE2/XzcwMHg3MDBfY3Jv/cF9jZW50ZXIuanBn/P3Y9MTY0NjY3MDA2/MA",
    "type": "Light Roast",
    "origin": "Ethiopia",
    "price": 5.49,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"18",
    "name": "Colombian Supremo",
    "image":"https://imgs.search.brave.com/7HoY3tkHx3G8p82myU3KNwCLhj8fBklfXVpdM14ie_Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlc2hyb2FzdGVk/Y29mZmVlLmNvbS9j/ZG4vc2hvcC9wcm9k/dWN0cy9tZWRpdW1f/ZmE0YjhiYTQtZmNj/OS00YzhkLTkxYzgt/YTBiMmI0YmRjMGU1/XzcwMHg3MDBfY3Jv/cF9jZW50ZXIuanBn/P3Y9MTY0NjQyOTM0/Mw",
    "type": "Medium Roast",
    "origin": "Colombia",
    "price": 4.25,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"19",
    "name": "Costa Rican Tarrazú",
    "image":"https://imgs.search.brave.com/kRa5ane2xr76M4lxNd0C2s425AV-f0eG5eYRdLzAVWs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29mZmVlYmVhbmRp/cmVjdC5jb20vY2Ru/L3Nob3AvcHJvZHVj/dHMvY29zdGEtcmlj/YW4tdGFycmF6dS1i/YWctMjAyMS1zcXVh/cmVfMzhiY2ViZDkt/MjdjZi00ZWQ2LTgx/MDAtMTdmODk0ZjQx/MTYyXzgwMHguanBn/P3Y9MTY1MDI1ODEz/OQ",
    "type": "Dark Roast",
    "origin": "Costa Rica",
    "price": 5.99,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  {
    "id":"20",
    "name": "Sumatra Mandheling",
    "iamge":"https://imgs.search.brave.com/9lf6pIN5R-ofqHS6Cmt0_2HCoAbNNYkx8pxgnvPoPqg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jb2Zm/ZWVob3cuY28vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMTIv/cHJvZHVjdC1waWMu/anBn",
    "type": "Blend",
    "origin": "Indonesia",
    "price": 4.99,
     "description":"Espresso is a strong, concentrated coffee made by forcing hot water through finely-ground beans, featuring a rich flavor and crema."
  },
  ];
  router.get('/', function(req, res, next) {
  res.json({
    data: dataArray
  });
  
});

router.get('/:id', function(req, res, next) {
  const coffeeId = req.params.id;
  const coffee = dataArray.find(coffee => coffee.id === coffeeId);

  if (coffee) {
    res.json({
      data: coffee
    });
  } else {
    res.status(404).json({
      error: 'Coffee not found'
    });
  }
});





module.exports = router;
