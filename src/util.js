import { v4 as uuidv4} from 'uuid';

function chillHop () {
    return [
        {
            name: "Takin' You For A Ride",
            cover:"https://chillhop.com/wp-content/uploads/2020/07/73c3f09a55221100b520fa131f14e2b09c7f4a81-1024x1024.jpg",
            artist: "Pandrezz",
            id: uuidv4(),
            audio:"https://mp3.chillhop.com/serve.php/?mp3=8642",
            active:true, 
            color: ["#F9C5AF", "#C4CD9E"]
        },
        {
            name: "Rosemary Whispers",
            cover:"https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
            artist: "Blue Wednesday, Shopan",
            id: uuidv4(),
            audio:"https://mp3.chillhop.com/serve.php/?mp3=7838",
            active:false, 
            color: ["#1E7D7C", "#374F58"]
        },
        {
            name: "Daylight",
            cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            id: uuidv4(),
            audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",
            active:false, 
            color: ["#5AB6F8", "#F8A1AA"]
        },
        {
            name: "Jazz Cabbage",
            cover:"https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            artist: "Ian Ewing, Strehlow",
            id: uuidv4(),
            audio:"https://mp3.chillhop.com/serve.php/?mp3=9363",
            active:false, 
            color: ["#F9C5AF", "#C4CD9E"]
        }
    ]
}

export default chillHop;