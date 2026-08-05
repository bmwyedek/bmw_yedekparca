/*=========================
ÜRÜNLER
=========================*/

.products{

padding:100px 0;

background:#111;

}

.products h2{

text-align:center;

font-size:42px;

margin-bottom:60px;

}

.product-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

gap:30px;

}

.product-card{

background:#181818;

border-radius:20px;

overflow:hidden;

text-align:center;

border:1px solid #252525;

transition:.35s;

}

.product-card:hover{

transform:translateY(-10px);

border-color:#0b84ff;

}

.product-card img{

width:100%;

height:260px;

object-fit:contain;

background:#fff;

padding:25px;

}

.product-card h3{

font-size:24px;

margin:20px 0 10px;

}

.product-card p{

color:#bdbdbd;

padding:0 20px;

min-height:50px;

}

.btn-product{

display:inline-block;

margin:25px 0 30px;

padding:14px 28px;

background:#0b84ff;

color:#fff;

border-radius:40px;

font-weight:600;

transition:.3s;

}

.btn-product:hover{

background:#0066cc;

transform:scale(1.05);

}

/*=========================
İLETİŞİM
=========================*/

.contact{

padding:100px 0;

background:#0d0d0d;

text-align:center;

}

.contact h2{

font-size:42px;

margin-bottom:20px;

}

.contact p{

color:#bbb;

max-width:700px;

margin:auto auto 40px;

}

.contact-buttons{

display:flex;

justify-content:center;

gap:20px;

flex-wrap:wrap;

}

/*=========================
FOOTER
=========================*/

footer{

background:#050505;

padding:50px 0;

text-align:center;

border-top:1px solid #222;

}

footer h3{

font-size:28px;

margin-bottom:15px;

color:#0b84ff;

}

footer p{

color:#aaa;

margin:8px 0;

}

/*=========================
RESPONSIVE
=========================*/

@media(max-width:992px){

header .container{

flex-direction:column;

gap:20px;

}

nav{

flex-wrap:wrap;

justify-content:center;

}

.hero-content{

flex-direction:column;

text-align:center;

}

.hero-left h1{

font-size:46px;

}

.hero-right{

text-align:center;

}

.hero-right img{

max-width:90%;

}

.features .container{

grid-template-columns:repeat(2,1fr);

}

}

@media(max-width:768px){

.features .container{

grid-template-columns:1fr;

}

.category-grid,

.product-grid{

grid-template-columns:1fr;

}

.hero-left h1{

font-size:36px;

}

.hero-buttons{

flex-direction:column;

}

.btn-blue,

.btn-dark{

width:100%;

text-align:center;

}

.phone{

display:none;

}

nav{

gap:15px;

}

}
/* WhatsApp Sabit Butonu */

#floatingWhatsapp{
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 60px;
    height: 60px;
    background: #25D366;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(0,0,0,.35);
    z-index: 9999;
}

#floatingWhatsapp:hover{
    transform: scale(1.1);
}

/* Yukarı Çık Butonu */

#topButton{
    position: fixed;
    right: 20px;
    bottom: 95px;
    width: 55px;
    height: 55px;
    border: none;
    border-radius: 50%;
    background: #0b84ff;
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 9998;
}

/* Footer boşluğu */

footer{
    background:#050505;
    padding:50px 0 140px;
    text-align:center;
    border-top:1px solid #222;
}
