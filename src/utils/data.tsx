export interface Islides {
    id: number;  
    title: string;
    description: string;
    img: string;
    
}

export interface Scat {
  id: number;
  title : string;
}

export interface Product {
  id: number;
  name : string;
  price : number;
  originalPrice : number;
  discount : number;
  image : string;
  rating?: number | boolean;
  reviewsCount: number;




}
export interface Cate  {
  id: number;
  name: string;
  image: string

}

export interface AboutI {
  id: number;
  title: string;
  name: string;
  image: string
}

export interface BestProuct {
  id: number;
  name : string;
  price : number;
  originalPrice : number;
  discount : number;
  image : string;
  
  reviewsCount: number;
}

export interface Banner {
  id: number;  
  title: string;
  des: string;
}

export interface Review {
  id: number;  
  title: string;
  image: string;
  des: string;
  ic1:string;
  ic2:string;
  ic3:string;

}
export const sideCat : Scat[] = [
          {id: 1, title:"Women's Fashion"},
          {id: 2, title: "Men's Fashion"},
          {id: 3, title:"Electronics"},
          {id: 4, title:"Home & Lifestyle"},
          {id: 5, title:"Medicine"},
          {id: 6, title: "Sports & Outdoor"},
          {id: 7, title: "Baby's & Toys"},
          {id: 8, title:"Groceries & Pets"},
          {id: 9, title: "Health & Beauty"},
        ];

export const slides: Islides[] =[
    { id: 1, img: "/hero.png", title: "iPhone 14 Series",  description: "Up to 10% off Voucher" },
    { id: 2, img: "/laptop.png", title: "New Laptops",  description: "Grab the latest deals" },
    { id: 3, img: "/game.png", title: "Gaming Accessories",  description: "Special discounts" },
  ];


  export  const products: Product[] = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, originalPrice: 150, discount: 40, image: "/game1.png", reviewsCount: 4.5,  rating: true},
    { id: 2, name: "AK-900 Wired Keyboard", price: 960, originalPrice: 1160, discount: 50, image: "/keybord.png", reviewsCount: 4.7, rating: true},
    { id: 3, name: "IPS LCD Gaming Monitor", price: 370, originalPrice: 400, discount: 30, image: "/mointer.png", reviewsCount: 4.8, rating: true},
    { id: 4, name: "S-Series Comfort Chair", price: 375, originalPrice: 400, discount: 24, image: "/chair.png", reviewsCount: 4.6, rating: true},
    { id: 5, name: "HAVIT HV-G92 Gamepad", price: 120, originalPrice: 150, discount: 40, image: "/game1.png", reviewsCount: 4.5,  rating: true},
    { id: 6, name: "AK-900 Wired Keyboard", price: 960, originalPrice: 1160, discount: 50, image: "/keybord.png", reviewsCount: 4.7, rating: true},
    { id: 7, name: "IPS LCD Gaming Monitor", price: 370, originalPrice: 400, discount: 30, image: "/mointer.png", reviewsCount: 4.8, rating: true},
    { id: 8, name: "S-Series Comfort Chair", price: 375, originalPrice: 400, discount: 24, image: "/chair.png", reviewsCount: 4.6, rating: true},
  ];

  export const category : Cate[] = [
    {id: 1, name: "CellPhone" ,image: '/icons/CellPhone.png'},
    {id: 2, name: "Computer" ,image: '/icons/Computer.png'},
    {id: 3, name: "Camera" ,image: '/icons/Camera.png'},
    {id: 4, name: "Gaming" ,image: '/icons/Gamepad.png'},
    {id: 5, name: "SmartWatch" ,image: '/icons/SmartWatch.png'},
    {id: 6, name: "Headphone" ,image: '/icons/Headphone.png'},

  ]

  export const bestPro : BestProuct[] = [
    { id: 1, name: "The north Coat", price: 120, originalPrice: 150, discount: 40, image: "/pinkcoat.png",  reviewsCount: 4.5 },
    { id: 2, name: "Gucci bag", price: 960, originalPrice: 1160, discount: 50, image: "/bage.png",  reviewsCount: 4.7 },
    { id: 3, name: "RGB liquid CPU Cooler", price: 370, originalPrice: 400, discount: 30, image: "/speaker.png",  reviewsCount: 4.8 },
    { id: 4, name: "Small Book Self", price: 375, originalPrice: 400, discount: 24, image: "/books.png",  reviewsCount: 4.6 },
  ];

  export const ourPro : BestProuct[] = [
    { id: 1, name: "Dog Food", price: 120, originalPrice: 150, discount: 40, image: "/dog.png", reviewsCount: 4.5 },
    { id: 2, name: "Gucci bag", price: 960, originalPrice: 1160, discount: 50, image: "/bage.png", reviewsCount: 4.7 },
    { id: 3, name: "RGB liquid CPU Cooler", price: 370, originalPrice: 400, discount: 30, image: "/speaker.png", reviewsCount: 4.8 },
    { id: 4, name: "Small Book Self", price: 375, originalPrice: 400, discount: 24, image: "/laptop.png",reviewsCount: 4.6 },
    { id: 5, name: "Small Book Self", price: 375, originalPrice: 400, discount: 24, image: "/shoes.png",reviewsCount: 4.6 },
    { id: 6, name: "Small Book Self", price: 375, originalPrice: 400, discount: 24, image: "/ceamra.png", reviewsCount: 4.6 },
    { id: 7, name: "Small Book Self", price: 375, originalPrice: 400, discount: 24, image: "/blackcoat.png", reviewsCount: 4.6 },
    { id: 8, name: "Small Book Self", price: 375, originalPrice: 400, discount: 24, image: "/books.png", reviewsCount: 4.6 },
  

  ];

  export const ban : Banner[] = [
    {id: 1, title:"23", des:"Hours" },
    {id: 2, title:"05", des:"Days" },
    {id: 3, title:"59", des:"Minutes" },
    {id: 4, title:"35", des: "Seconds"},

  ]

  export const icons : AboutI[] = [
    {id: 1,title:'10.5k', name: "Sallers active our site" ,image: '/icons/shop.png'},
    {id: 2, title:'45.5k',name: "Customer active in our site" ,image: '/icons/bag.png'},
    {id: 3,title:'33k', name: "Mopnthly Product Sale" ,image: '/icons/Sale.png'},
    {id: 4, title:'25k',name: "Anual gross sale in our site" ,image: '/icons/Shopping bag.png'},
   
  ]

  export const review : Review[] = [
    {id: 1, title: 'Tom Cruise', des: 'Founder & Chairman', image:'/m.png', ic1: '/icons/Twitter.png', ic2: '/icons/insta.png', ic3: '/icons/Linkedin.png',},
    {id: 2, title: 'Emma Watson ', des: 'Managing Director',image:'/blackwo.png', ic1: '/icons/Twitter.png', ic2: '/icons/insta.png', ic3: '/icons/Linkedin.png',},
    {id: 3, title: 'Will Smith', des: 'Product Designer',  image:'/men.png', ic1: '/icons/Twitter.png', ic2: '/icons/insta.png', ic3: '/icons/Linkedin.png',},
    {id: 4, title: 'Tom Cruise', des: 'Founder & Chairman', image:'/m2.jpg', ic1: '/icons/Twitter.png', ic2: '/icons/insta.png', ic3: '/icons/Linkedin.png',},
    {id: 5, title: 'Emma Watson ', des: 'Managing Director', image:'/bl.jpg', ic1: '/icons/Twitter.png', ic2: '/icons/insta.png', ic3: '/icons/Linkedin.png',},
    {id: 6, title: 'Will Smith', des: 'Product Designer',  image:'/men2.jpg', ic1: '/icons/Twitter.png', ic2: '/icons/insta.png', ic3: '/icons/Linkedin.png',},
  ]