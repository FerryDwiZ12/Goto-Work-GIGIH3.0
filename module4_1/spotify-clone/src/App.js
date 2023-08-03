import './App.css';
import Layout from './Layout/layout';
import Content from './components/content';


const musicData = [
    {
      linkImage: "https://images.unsplash.com/photo-1540829016269-e05670f88adb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29uZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      judulMusic: "This Moment's Melody",
      deskripsi: "Captivating rhythm..",
    },
    {
      linkImage: "https://images.unsplash.com/photo-1553406624-52e5fb326413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      judulMusic: "Midnight Serenade",
      deskripsi: "Enchanting night whispers softly.",
    },
    {
      linkImage: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      judulMusic: "Dancing Raindrops",
      deskripsi: "Joyful showers of rhythm.",
    },
    {
      linkImage: "https://images.unsplash.com/photo-1528243097678-739049bbf2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      judulMusic: "Starlit Dreamscape",
      deskripsi: "Celestial dreams under stars.",
    },
    {
      linkImage: "https://images.unsplash.com/photo-1544785349-c4a5301826fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      judulMusic: "Serene Echoes Within",
      deskripsi: "Peaceful sounds echo soul.",
    },
    {
      linkImage: "https://images.unsplash.com/photo-1526979118433-63c7344f06f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      judulMusic: "Whispers of Serenity",
      deskripsi: "Calm whispers soothe heart.",
    },
    {
      linkImage: "https://images.unsplash.com/photo-1636298471179-9a745e57bc63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      judulMusic: "Enchanted Forest Waltz",
      deskripsi: "Mystical woods dance gracefully.",
    },
    {
      linkImage: "https://plus.unsplash.com/premium_photo-1682525095865-49c08cb0906a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      judulMusic: "Euphoria's Embrace",
      deskripsi: "Blissful euphoria enchants senses.",
    },
    {
      linkImage: "https://images.unsplash.com/photo-1608433361692-61477779fd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      judulMusic: "Oceanic Lullaby amazing",
      deskripsi: "Waves sing tranquil lullaby.",
    },
    {
      linkImage: "https://images.unsplash.com/photo-1564836076263-b77a4e9fbe60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      judulMusic: "Journey Through Time",
      deskripsi: "Timeless voyage, endless.",
    },
  ];

export default function App() {
  
  return (
    <Layout>
      {/* Pass the music data as a prop to Content */}
      <Content music={musicData} />
    </Layout>
  )
}
