import GhibliImage from './assets/images/ghibli.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {

  return (
    <main className='h-screen'>
      <section className="flex flex-col justify-center items-center bg-slate-950 h-screen">
        <header className='flex flex-col justify-center items-center gap-5'>
          <img id='profile' loading="lazy" src={GhibliImage} alt="Lerian Febriana" className='w-32 h-32 rounded-full border-4 border-emerald-500' />
          <div className='max-w-xl flex flex-col justify-center gap-2 text-center px-5 md:px-0'>
            <h1 id='profile-name' className='text-white font-bold text-xl'>レリアンーフェブリアナ</h1>
            <p id='profile-desc' className='text-gray-200 text-sm'>🌿 Hi there! I&apos;m Lerian, a nature enthusiast and IT enthusiast from Indonesia. I&apos;m passionate about digging into tech and aiming to become an IT expert.<br/>Indonesian 🇮🇩</p>
          </div>
          <section className='flex flex-wrap justify-center items-center gap-2'>
            <a id='link-1' href="http://link.kanglerian.my.id/in/github" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 transition-all rounded-xl ease-in-out px-5 py-2 space-x-1'>
              <FontAwesomeIcon icon="fa-brands fa-github" size='md' />
              <span>Github</span>
            </a>
            <a id='link-1' href="http://link.kanglerian.my.id/in/blog" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 transition-all rounded-xl ease-in-out px-5 py-2 space-x-1'>
              <FontAwesomeIcon icon="fa-solid fa-newspaper" size='md' />
              <span>Blog</span>
            </a>
            <a id='link-1' href="http://link.kanglerian.my.id/in/books" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 transition-all rounded-xl ease-in-out px-5 py-2 space-x-1'>
              <FontAwesomeIcon icon="fa-solid fa-book" size='md' />
              <span>Books</span>
            </a>
          </section>
        </header>
      </section>
    </main>
  )
}

export default App