// product by api

// product by api
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        console.log(json)
        for (var i = 0; i < json.length; i++) {
            // console.log(json)
            // console.log(json[i])
            // json.map((item ) =>{ 
                document.getElementById('container2').innerHTML +=
                `
            
            <div  class="pro">
            <img src="${json[i].image}" alt="Product Image" />
            <div class="desc">
            <span>adidas</span>
            <h5>${json[i].title}</h5>
            <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </div>
            <h4>${json[i].price}</h4>
            </div>
            <button onclick='Detailapi("${json[i].image}", "${json[i].title}", "${json[i].price}")'><i class="fas fa-shopping-cart cart"></i></button>
            </div>
            
            
            `
        }
        
                           
                        })

                        var input = document.getElementById("searchinput");
                        var button = document.getElementById("searchbtn");
                        button.addEventListener('click', () => {

                            fetch('https://dummyjson.com/products')
                            .then(res => res.json())
                            .then(json => {
// var findsearch =  json.find(item3 => item3.title === input.value)
                                    for (let i = 0; i < json.length; i++) {
                                    //  var num = json.reverse
                                    if (json[i].title.match(input.value)) {
                                        
                                        var num = document.getElementById('container2');
                                        num.innerHTML =
                                        `
                                        <center>
                                        <div  style= " border-radius:20px; box-shadow:2px 2px 36px rgba(0.5,0.5,0.5,0.5); width:300px; height:370px; ">
                                        <img style="border-radius:20px; " id="images" height="200px" src="${json[i].images}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                        <h5 id="titl style= "font-size:18px;"  class="card-title">${json[i].title}</h5>
                                                            <p id="prices"  class="card-text">${json[i].price}</p>
                                                            <a style="background:linear-Gradient( to bottom right,#f88f16,#f88f16 ,red, red); border:none;" href="#" class="btn btn-primary">Go somewhere</a>
                                                            </div>
                                                            </div>
                                                            </center>
                                                            
                                                            `
                                                        }
                                                console.log(json[i])
                                            }
                                            })
                                            
                                    })
// if(findsearch){
//     console.log("is working...");
            // var num = document.getElementById('container2');
            // num.innerHTML +=
            // `
            // <center>
            // <div  style= " border-radius:20px; box-shadow:2px 2px 36px rgba(0.5,0.5,0.5,0.5); width:300px; height:370px; ">
            // <img style="border-radius:20px; " id="images" height="200px" src="${item.image}" class="card-img-top" alt="...">
            // <div class="card-body">
            // <h5 id="titl style= "font-size:18px;"  class="card-title">${item.title}</h5>
            // <p id="prices"  class="card-text">${item.price}</p>
            // <a style="background:linear-Gradient( to bottom right,#f88f16,#f88f16 ,red, red); border:none;" href="#" class="btn btn-primary">Go somewhere</a>
            // </div>
            // </div>
            // </center>
                                            
                                                            // `
// }else{
//     console.log("not working...");
// }
// json.filter(item => item.)
            
        // })
        function Detailapi(image, title, price) {
            // var arrr = [] 
            var obj2 = {
                image: image,
                title: title,
                price: price,
            }
            // arrr =  JSON.parse(localStorage.getItem("arrr"))?JSON.parse(localStorage.getItem("arrr")):[]
            // arrr.push(obj2)
            localStorage.setItem("obj2", JSON.stringify(obj2))
            window.location.href = './detail.html'
        }

        // var h5 = document.getElementById('titles');
        // var classes = document.getElementsByClassName('containers')
// var product = JSON.parse(localStorage.getItem("arr"))



// product by api
// product by api







// product by input
// product by input
var product = JSON.parse(localStorage.getItem("arr"));
console.log(product)

product.map((math, index) => {
    document.getElementById("container2").innerHTML += `    
    
            
    <div  class="pro" onclick = "detail(${detail1}">
    <img src="${math.imglink}" alt="Product Image" />
    <div class="desc">
      <span>adidas</span>
      <h5>${math.imgtext}</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>${math.imgdesc}</h4>
    </div>
    <a href="#"  onclick="detail1(${index})"><i class="fas fa-shopping-cart cart"></i></a>
  </div>

            `
})
function detail1(math) {
    var imglink = document.getElementById("post-img");
    var imgtext = document.getElementById("img-head");
    var imgdesc = document.getElementById("img-para");
    localStorage.setItem("imglink", product[math].imglink)
    localStorage.setItem("imgtext", product[math].imgtext)
    localStorage.setItem("imgdesc", product[math].imgdesc)
    window.location.href = "./detail2.html"
}
      // product by input
      // product by input



var num;
function bodyy(){
   num = setTimeout(loader , 1000)
}

function loader(){
    document.getElementById("loaderweb").style.display="none"
    document.getElementById("loaderweb2").style.display="none"
    document.getElementById("mainhole").style.display="block"
}




// const data = [
//     { id: 1, title: "Title 1" },
//     { id: 2, title: "Title 2" },
//     { id: 3, title: "Title 3" }
//   ];
  
//   const titleToMatch = "Title 2";
  
//   const matchedItem = data.find(item => item.title === titleToMatch);
  
//   if (matchedItem) {
//       console.log("Match found:", matchedItem);
//     } else {
//       console.log("No match found");
//   }
      
//       navbar
//       navbar












