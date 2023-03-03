 const createnav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    
        <div class="nav">
        <a href="index.html"><img src="img/logo-myntra-41465.png" class="brand-logo" alt="Image"></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search brand,product">
                    <button class="search-btn">search</button>
                    <img src="img/user.png" alt="">
                    <img src="img/cart.png" alt="">
                </div>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-items"><a href="###" class="link">Home</a></li>
            <li class="link-items"><a href="###" class="link">Women</a></li>
            <li class="link-items"><a href="###" class="link">Men</a></li>
            <li class="link-items"><a href="###" class="link">Kids</a></li>
            <li class="link-items"><a href="###" class="link">Accessories</a></li>
        </ul>
    `;
}

createnav();
