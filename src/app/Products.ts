export class Products{
    ProductName:string
    ProductImageURl:string
    ProductPrice:Number
    ProductCategories:string
    descripion:string
    wired:boolean
    contry:string
    type: string

    switchType: string
    keyRollover: string
    backlighting: string
    connectivity: string
    dimensions: string
    weight: string



    constructor(Productname:string,productURl:string,ProductPrice:Number,
      ProductCatagere:string,wired:boolean,contry:string,discription:string,
      type: string,
    switchType: string,
    keyRollover: string,
    backlighting: string,
    connectivity: string,
    dimensions: string,
    weight: string){
    this.ProductName=Productname;
    this.ProductPrice=ProductPrice
    this.ProductImageURl=productURl
    this.ProductCategories=ProductCatagere
    this.wired=wired
    this.contry=contry
    this.descripion=discription
    this.type=type
    this.switchType=switchType
    this.keyRollover=keyRollover
    this.backlighting=backlighting
    this.connectivity=connectivity
    this.dimensions=dimensions
    this.weight=weight
}
 static products:Products[]=[
    new Products("Keyboard1", "assets/keyboard.png", 100, "Keyboards", true, "Egypt", "A high-quality mechanical keyboard with customizable RGB lighting and ergonomic design.", "Mechanical", "Cherry MX Red", "N-Key Rollover", "RGB", "Wired USB", "44.3 x 13.7 x 4.1 cm", "1.1 kg"),
      new Products( "Wireless Keyboard ABC", "assets/keyboard2.png", 79.99, "Keyboards", false, "China", "Slim wireless keyboard with long battery life.", "General", "Membrane", "6-Key Rollover", "RGB", "Wireless", "40 x 12 x 2 cm", "0.8 kg" ),
      new Products( "Gaming Keyboard PQR", "assets/keyboard3.png", 129.99, "Keyboards", true, "Taiwan", "RGB gaming keyboard with customizable macros and software.", "Gaming", "Mechanical", "N-Key Rollover", "RGB", "Wired", "50 x 18 x 5 cm", "1.5 kg" ),
      new Products( "Ergonomic Keyboard EFG", "assets/keyboard4.png", 89.99, "Keyboards", true, "Germany", "Split ergonomic keyboard for improved typing posture.", "Ergonomic", "Membrane", "Standard", "None", "Wired", "48 x 15 x 5 cm", "1.3 kg" ),
      new Products( "Compact Keyboard LMN", "assets/keyboard5.png", 49.99, "Keyboards", true, "China", "Small form-factor keyboard ideal for limited desk space.", "General", "Mechanical", "6-Key Rollover", "None", "Wired", "35 x 12 x 3 cm", "0.9 kg" ),
      new Products( "Backlit Keyboard XYZ", "assets/keyboard6.png", 69.99, "Keyboards", true, "USA", "Backlit keyboard with adjustable brightness levels.", "General", "Membrane", "Standard", "RGB", "Wired", "42 x 14 x 4 cm", "1.0 kg" ),
      new Products( "Wireless Mechanical Keyboard", "assets/keyboard7.png", 149.99, "Keyboards", false, "China", "High-performance wireless mechanical keyboard with RGB lighting.", "Mechanical", "Cherry MX", "N-Key Rollover", "RGB", "Wireless", "48 x 16 x 5 cm", "1.4 kg" ),
      new Products( "Silent Keyboard PQR", "assets/keyboard8.png", 59.99, "Keyboards", true, "Taiwan", "Silent membrane keyboard for noise-sensitive environments.", "General", "Membrane", "Standard", "None", "Wired", "38 x 13 x 3 cm", "0.8 kg" ),
  
    new Products( "Gaming Mouse XYZ", "assets/mouse.png", 49.99, "Mice", false, "USA", "This is a high-performance gaming mouse with customizable RGB lighting.", "Gaming", "Mechanical", "N-Key Rollover", "RGB", "Wired", "12.5 x 7 x 4 cm", "150 g" ),
    new Products( "Office Mouse ABC", "assets/mouse2.png", 19.99, "Mice", true, "China", "A reliable mouse for everyday office use.", "Office", "Membrane", "Standard", "None", "Wired", "10 x 6 x 3 cm", "100 g" ),
    new Products( "Wireless Mouse PQR", "assets/mouse3.png", 29.99, "Mice", false, "Taiwan", "A sleek wireless mouse with long battery life.", "General", "Optical", "Standard", "RGB", "Wireless", "11 x 5 x 3 cm", "120 g" ),
    new Products( "Ergonomic Mouse EFG", "assets/mouse4.png", 39.99, "Mice", true, "Germany", "An ergonomic mouse designed for comfort during extended use.", "Ergonomic", "Laser", "N-Key Rollover", "None", "Wired", "13 x 7 x 5 cm", "140 g" ),
    new Products( "RGB Gaming Mouse ZYX", "assets/mouse5.png", 59.99, "Mice", false, "USA", "A premium gaming mouse with customizable RGB lighting effects.", "Gaming", "Mechanical", "6-Key Rollover", "RGB", "Wired", "12 x 6 x 4 cm", "130 g" ),
    new Products( "Travel Mouse LMN", "assets/mouse6.png", 24.99, "Mice", true, "China", "Compact and portable mouse for travelers.", "General", "Optical", "Standard", "None", "Wired", "9 x 5 x 3 cm", "80 g" ),
    new Products( "Wireless Gaming Mouse XYZ", "assets/mouse7.png", 69.99, "Mice", false, "USA", "High-performance wireless gaming mouse with advanced sensor technology.", "Gaming", "Optical", "N-Key Rollover", "RGB", "Wireless", "11.5 x 6 x 4 cm", "140 g" ),
    new Products( "Silent Mouse ABC", "assets/mouse8.png", 34.99, "Mice", true, "China", "Silent clicks for noise-free environment.", "General", "Optical", "Standard", "None", "Wired", "10 x 5 x 3 cm", "90 g" ),
    new Products( "Left-Handed Mouse PQR", "assets/mouse9.png", 39.99, "Mice", false, "Taiwan", "Ergonomically designed for left-handed users.", "General", "Laser", "Standard", "None", "wireless", "12 x 7 x 4 cm", "120 g" ),
    new Products( "Vertical Mouse EFG", "assets/mouse10.png", 49.99, "Mice", true, "Germany", "Reduces wrist strain with vertical design.", "General", "Optical", "Standard", "None", "Wired", "11 x 8 x 6 cm", "150 g" ),
    new Products( "Gaming Mouse RGB", "assets/mouse11.png", 79.99, "Mice", false, "USA", "Highly customizable gaming mouse with RGB lighting and adjustable weights.", "Gaming", "Mechanical", "N-Key Rollover", "RGB", "Wired", "13 x 7 x 5 cm", "160 g" ),
    new Products( "Wireless Ergonomic Mouse LMN", "assets/mouse12.png", 49.99, "Mice", false, "China", "Ergonomic design with wireless convenience.", "Ergonomic", "Optical", "N-Key Rollover", "None", "Wireless", "12 x 6 x 4 cm", "140 g" ),
    new Products( "Compact Mouse XYZ", "assets/mouse13.png", 19.99, "Mice", true, "Taiwan", "Small and lightweight mouse for portable use.", "General", "Optical", "Standard", "RGB", "Wired", "9 x 5 x 3 cm", "80 g" ),
    new Products( "Gaming Mouse ABC", "assets/mouse14.png", 59.99, "Mice", false, "USA", "Advanced gaming mouse with customizable buttons and lighting.", "Gaming", "Mechanical", "N-Key Rollover", "RGB", "Wired", "12 x 6 x 4 cm", "130 g" ),
    new Products( "Wireless Silent Mouse PQR", "assets/mouse15.png", 44.99, "Mice", false, "China", "Silent clicks and wireless freedom.", "General", "Optical", "Standard", "None", "Wireless", "10 x 5 x 3 cm", "100 g" ),
    new Products( "Trackball Mouse EFG", "assets/mouse16.png", 69.99, "Mice", true, "Germany", "Precision control with trackball technology.", "General", "Trackball", "Standard", "None", "wireless", "12 x 7 x 6 cm", "170 g" ),
    
    new Products( "Wireless ANC Headphones PQR", "assets/headphone.png", 299.99, "Headphones", false, "Germany", "Wireless headphones with active noise canceling and touch controls.", "Over-Ear", "Dynamic", "Active Noise Canceling", "None", "Wireless", "23 x 20 x 9 cm", "300 g" ),
new Products( "Over-Ear Headphones XYZ", "assets/headphone2.png", 149.99, "Headphones", true, "USA", "High-quality over-ear headphones with noise-canceling technology.", "Over-Ear", "Dynamic", "None", "None", "Wired", "20 x 18 x 10 cm", "300 g" ),
new Products( "Wireless Earbuds ABC", "assets/headphone3.png", 99.99, "Headphones", false, "China", "True wireless earbuds with Bluetooth connectivity.", "Earbuds", "Dynamic", "None", "None", "Wireless", "5 x 5 x 3 cm", "30 g" ),
new Products( "Gaming Headset PQR", "assets/headphone4.png", 129.99, "Headphones", true, "Taiwan", "Gaming headset with surround sound and noise-canceling microphone.", "Gaming", "Dynamic", "None", "RGB", "Wired", "25 x 20 x 12 cm", "350 g" ),
new Products( "Noise-Canceling Headphones", "assets/headphone5.png", 199.99, "Headphones", true, "Germany", "Premium noise-canceling headphones with long battery life.", "Over-Ear", "Dynamic", "Active Noise Canceling", "None", "Wireless", "22 x 18 x 8 cm", "280 g" ),
new Products( "Sports Earphones LMN", "assets/headphone6.png", 79.99, "Headphones", true, "China", "Sweat-resistant sports earphones with secure fit.", "Earphones", "Dynamic", "None", "None", "Wired", "10 x 10 x 4 cm", "50 g" ),
new Products( "Bluetooth Headphones XYZ", "assets/headphone7.png", 119.99, "Headphones", true, "USA", "Bluetooth headphones with deep bass and built-in microphone.", "Over-Ear", "Dynamic", "None", "None", "Wireless", "18 x 15 x 8 cm", "250 g" ),
new Products( "Wireless Gaming Headset ABC", "assets/headphone8.png", 179.99, "Headphones", false, "China", "Wireless gaming headset with RGB lighting and 7.1 surround sound.", "Gaming", "Dynamic", "None", "RGB", "Wireless", "26 x 20 x 12 cm", "380 g" ),

new Products( "27-inch Gaming Monitor XYZ", "assets/Monitors.png", 399.99, "Monitors", false, "USA", "High-refresh rate gaming monitor with 144Hz and 1ms response time.", "Gaming", "LCD", "27 inches", "2560x1440", "60W", "55 x 35 x 15 cm", "5 kg" ),
new Products( "24-inch IPS Monitor ABC", "assets/Monitors2.png", 199.99, "Monitors", true, "China", "Full HD IPS monitor with wide viewing angles.", "General", "IPS", "24 inches", "1920x1080", "45W", "50 x 30 x 10 cm", "3 kg" ),
new Products( "32-inch Curved Monitor PQR", "assets/Monitors3.png", 499.99, "Monitors", false, "Taiwan", "Curved monitor with QHD resolution and immersive viewing experience.", "General", "LCD", "32 inches", "2560x1440", "75W", "70 x 40 x 20 cm", "7 kg" ),
new Products( "34-inch Ultrawide Monitor EFG", "assets/Monitors4.png", 699.99, "Monitors", false, "Germany", "Ultrawide monitor with 21:9 aspect ratio and HDR support.", "General", "LCD", "34 inches", "3440x1440", "100W", "80 x 45 x 20 cm", "9 kg" ),
new Products( "27-inch 4K Monitor LMN", "assets/Monitors5.png", 599.99, "Monitors", true, "China", "4K UHD monitor with vibrant colors and precise detail.", "General", "LCD", "27 inches", "3840x2160", "90W", "60 x 35 x 15 cm", "6 kg" ),
new Products( "25-inch Business Monitor XYZ", "assets/Monitors6.png", 179.99, "Monitors", true, "USA", "Business monitor with ergonomic stand and flicker-free technology.", "Business", "LCD", "25 inches", "1920x1200", "35W", "55 x 30 x 10 cm", "4 kg" ),
new Products( "29-inch Ultrawide Gaming Monitor ABC", "assets/Monitors7.png", 449.99, "Monitors", false, "China", "Ultrawide gaming monitor with high refresh rate and AMD FreeSync.", "Gaming", "LCD", "29 inches", "2560x1080", "80W", "65 x 40 x 15 cm", "6 kg" ),
new Products( "22-inch LED Monitor PQR", "assets/Monitors8.png", 129.99, "Monitors", true, "Taiwan", "Slim LED monitor with energy-saving features.", "General", "LED", "22 inches", "1920x1080", "30W", "50 x 25 x 5 cm", "2.5 kg" ),

new Products( "Full HD Webcam XYZ", "assets/webcam.png", 59.99, "Webcams", true, "USA", "Full HD webcam with built-in microphone for clear video calls.", "General", "N/A", "1080p", "USB", "Wired", "10 x 5 x 5 cm", "150 g" ),
new Products( "4K Ultra HD Webcam ABC", "assets/webcam2.png", 129.99, "Webcams", true, "China", "4K Ultra HD webcam with HDR for superior video quality.", "General", "N/A", "4K", "USB", "Wired", "12 x 6 x 6 cm", "200 g" ),
new Products( "Wide-Angle Webcam PQR", "assets/webcam3.png", 79.99, "Webcams", true, "Taiwan", "Wide-angle webcam for group video conferencing.", "General", "N/A", "720p", "USB", "Wired", "11 x 5 x 5 cm", "160 g" ),
new Products( "Privacy Cover Webcam EFG", "assets/webcam4.png", 69.99, "Webcams", true, "Germany", "Webcam with built-in privacy cover for enhanced security.", "General", "N/A", "1080p", "USB", "Wired", "10 x 5 x 5 cm", "140 g" ),
new Products( "Streaming Webcam LMN", "assets/webcam5.png", 89.99, "Webcams", true, "USA", "High-definition webcam optimized for streaming and content creation.", "Streaming", "N/A", "1080p", "USB", "Wired", "12 x 6 x 6 cm", "180 g" ),
new Products( "Low-Light Webcam XYZ", "assets/webcam6.png", 49.99, "Webcams", true, "China", "Webcam with low-light enhancement technology for better video in dim conditions.", "General", "N/A", "720p", "USB", "Wired", "10 x 5 x 5 cm", "130 g" ),
new Products( "Compact Webcam ABC", "assets/webcam7.png", 39.99, "Webcams", true, "Taiwan", "Compact and portable webcam for video calls on-the-go.", "General", "N/A", "720p", "USB", "Wired", "8 x 4 x 4 cm", "100 g" ),
new Products( "Wireless Webcam PQR", "assets/webcam8.png", 99.99, "Webcams", false, "Germany", "Wireless webcam with USB receiver for flexible placement.", "General", "N/A", "1080p", "USB Receiver", "Wireless", "11 x 5 x 5 cm", "170 g" ),


new Products( "USB1", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB2", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB3", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB4", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB5", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB6", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB7", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB8", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB9", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB10", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB11", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB12", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB13", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB14", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB15", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),
new Products( "USB16", "assets/usbCables.png", 100, "USB Cables", true, "Egypt", "Durable and fast-charging USB cables.", "Cable", "N/A", "N/A", "N/A", "USB", "1.5 m", "0.05 kg" ),



new Products( "Speaker1", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker2", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker3", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker4", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker5", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker6", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker7", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker8", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker9", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker10", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker11", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker12", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker13", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker14", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker15", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),
new Products( "Speaker16", "assets/speaker.png", 100, "Speakers", true, "Egypt", "Powerful speakers with deep bass and clear sound.", "Stereo", "N/A", "N/A", "N/A", "Wired", "N/A", "2 kg" ),

new Products(
    "Other",
    "assets/Other.png",
    0,
    "Others",
    true,
    "Egypt",
    "Miscellaneous electronic items.",
    "N/A",
    "N/A",
    "N/A",
    "N/A",
    "N/A",
    "N/A",
    "N/A"
),
];
   
  static categories = [
    { name: "Keyboards", img: "assets/keyboard.png",path:"Products/Keyboards" },
    { name: "Mice", img: "assets/mouse.png",path:"Products/Mice" },
    { name: "Headphones", img: "assets/headphone.png",path:"Products/HeadPhones" },
    { name: "Monitors", img: "assets/Monitors.png",path:"Products/Monitors" },
    { name: "Webcams", img: "assets/webcam.png",path:"Products/Webcams" },
    { name: "USB Cables", img: "assets/usbCables.png",path:"Products/USB Cables" },
    { name: "Speakers", img: "assets/speaker.png",path:"Products/Speakers" },
    { name: "Others", img: "assets/Other.png", },

  ];
}
