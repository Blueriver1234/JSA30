const productContainer = document.querySelector("#postcontainer")
let postList = [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      imagePath: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2019/10/08/image010.jpg"
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      imagePath: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2019/10/08/image010.jpg"
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      imagePath: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2019/10/08/image010.jpg"
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      imagePath: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2019/10/08/image010.jpg"
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      imagePath: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2019/10/08/image010.jpg"
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      imagePath: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2019/10/08/image010.jpg"
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      imagePath: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2019/10/08/image010.jpg"
    },
    {
      userId: 1,
      id: 8,
      title: "dolorem dolore est ipsam",
      imagePath: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2019/10/08/image010.jpg"
    },
    {
      userId: 1,
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      imagePath: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2019/10/08/image010.jpg"
    },
    {
      userId: 1,
      id: 10,
      title: "optio molestias id quia eum",
      imagePath: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2019/10/08/image010.jpg"
    },
  ]
  
  function renderPostList() {
    let htmls = "";
    for (let i = 0; i < postList.length; i++) {
        htmls += `
        <div class="member-item">
            <div class="member-title">
                <h3>${postList[i].title}</h3>
            </div>
            <div class="member-image">               
                <img src=${postList[i].imagePath}>
            </div>
        </div>
        `        
    }
    productContainer.innerHTML = htmls
  }
  renderPostList()