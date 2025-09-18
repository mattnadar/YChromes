import '../styles/Home.css'
export default function Home() {
  return (
    <>
      <div className="welcome-message">
        <h1>Welcome to the YChromes</h1>
        <p>UD’s premiere all male a cappella group </p>
        <p>Click on some of the links above to learn more about us!</p>
      </div>
      <div className='Albums'>
        <h1>Listen to our music!</h1>
          <div className='AlbumContainer'>
            <div className='embed-container'>
            <iframe title='Come On Home Album'
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/album/52yxgFY4AMbYmZz5GejOLY?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
              </div>
              <div className='embed-container'>
                <iframe title='Come On Home Album'
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/album/3S1sIpbRUXzVn7jCbFC1jN?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
              </div>
               <div className='embed-container'>
                <iframe title='Come On Home Album'
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/album/56eCBns1nEzsMCgmuclz0O?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
              </div>
          </div>
      </div>
    </>
  );
}