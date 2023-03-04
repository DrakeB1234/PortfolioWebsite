import Head from 'next/head';
import NavBar from './components/navbar';
import Footer from './components/footer';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Drake Buentello | Blog</title>
      </Head>
      <NavBar />
      <main className='MainContainer BlogContainer'>
        <h1>Blog</h1>
        <div className='FlexCol'>

          <div className='FlexCol'>
            <h1>Feburary 11, 2023</h1>
            <h2>Start of my next Project</h2>
            <div className='FlexRow'>
              <h2 className='TagProject'>Project: UpDownShoe</h2>
              <h2 className='TagDiscussion'>Discussion: Bugs</h2>
              <h2 className='TagTip'>Tips: NEXT.js</h2>
              <h2 className='TagProgress'>Progress: Homepage</h2>
            </div>
          </div>
          <div className='FlexCol'>
            <h1>Feburary 11, 2023</h1>
            <h2>Start of my next Project</h2>
            <div className='FlexRow'>
              <h2 className='TagProject'>Project: UpDownShoe</h2>
              <h2 className='TagDiscussion'>Discussion: Bugs</h2>
              <h2 className='TagTip'>Tips: NEXT.js</h2>
              <h2 className='TagProgress'>Progress: Homepage</h2>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
