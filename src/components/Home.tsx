import { ReactComponent as ReactLogo} from '../book-solid.svg'

function App() {

  return (
    <div className="App">
      <div className="bg-gradient-to-r from-red-900 to-red-400 text-white px-6 py-12">   
      <div className="">
        <div className="max-w-xl grid grid-cols-1 gap-5">
          <div className="w-10"><ReactLogo className="fill-yellow-400"></ReactLogo></div>
          
    <h2 className="text-xl uppercase font-bold">ApplyEasy</h2>
    <h1 className="text-5xl">
      Improve your server with the bot</h1>
    <p className="text-lg">You want to build a server team? Then use ApplyEasy!
       He will help you to set up an application
        system on your
       server with a maximum of 5 questions!</p>
       <div className='max-w-xs grid grid-cols-2'>
    <button className="bg-gradient-to-r from-yellow-700 to-yellow-400 py-2 px-5 rounded-md w-32" onClick={event =>  window.location.href='#view_page'}>View Page</button>
    <button className="bg-gradient-to-r from-yellow-400 to-yellow-700 py-2 px-5 rounded-md w-32" onClick={event =>  window.location.href='https://discord.com/oauth2/authorize?client_id=966090672618745917&permissions=2147867648&scope=bot%20applications.commands'}>Invite</button>
       </div>
</div>
</div>
</div>   

<div className="px-6 py-12 bg-gradient-to-l from-gray-400 to-white">
  <div className="max-w-sm mb-12">
  <h2 className="text-4xl">Become a part</h2>
  </div>
  
  <div  id='view_page' className="grid grid-cols-2 gap-4">
    <div className="">
    <h3 className="text-2xl font-semibold mb-2">
      Simplify team building
      </h3>
<p className="text-lg text-gray-600">You wanted to build a server team?<br></br>
   You can easily build your team <br></br>with an
   application system.</p>
    </div>

<div>
<h3 className="text-2xl font-semibold mb-2">Very easy to configure</h3>
<p className="text-lg text-gray-600">Easily configure your questions<br></br> with / commands
   as you like!</p>
</div>

  </div>

</div>
<div className='px-6 py-12 bg-gradient-to-l from-gray-400 to-white'>

  <div className="grid grid-cols-2 gap-4">
  <div className=''>
  <h3 className='text-3xl font-semibold mb-2 mt-25'>Why ApplyEasy?</h3>
  <p className='text-lg text-gray-600'>
    Why you should use ApplyEasy!
    <br></br>ApplyEasy is a simple, configurable 
    <br></br>Discord Bot that you can do without<br></br> a tutorial 
    and do it directly on your Discord server! 
    <br></br>With a minimum and maximum of 5 questions, 
    <br></br>you can create a very simple application system.
    <br></br><br></br><div className='text-2xl font-semibold text-black'>Still need help?</div>
    Then join the support server or use /help.
    </p>
    <br></br>
    <button className='transition duration-700 ease-in-out bg-gradient-to-r from-green-800 to-green-500 px-5 py-2 rounded-md' onClick={event =>  window.location.href='https://discord.com/invite/PW6vA9WkRH'}>Support Server</button>
    </div>
    <div>
  <h3 className='text-3xl font-semibold  mb-2 mt-25'>tryfyfu/<br></br>TRcoding</h3>
    <p className='text-lg text-gray-600'>Tryfyfu or TRcoding is the developer of the<br></br>
       ApplyEasy Bot. He has been programming for<br></br>
        2 years and as his first public project<br></br>
         he created a bot called "ApplyEasy". <br></br>
         His goal with the bot was to simplify <br></br>
         the work of the construction team. <br></br>
         New bots and a new page are already being planned.</p>
    </div>
    
    </div>
  </div>

  <footer className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-center lg:text-left">
  <div className="container p-6">
    <div className="grid lg:grid-cols-4 md:grid-cols-2">
      <div className="mb-6">
        <h5 className="uppercase font-bold mb-2.5 text-white">Support</h5>

        <ul className="list-none mb-0">
          <li>
            <a href="https://discord.com/invite/PW6vA9WkRH" className="text-white">Support Server</a>
          </li>
          <li>
            <a href="mailto:sup.applyeasy@gmail.com" className="text-white">Mail</a>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h5 className="uppercase font-bold mb-2.5 text-white">Legal</h5>

        <ul className="list-none mb-0">
          <li>
            <a href="/applyeasy/privacypolicy" className="text-white">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h5 className="uppercase font-bold mb-2.5 text-white">Projects</h5>

        <ul className="list-none mb-0">
          <li>
            <a href="https://discord.com/oauth2/authorize?client_id=966090672618745917&permissions=2147867648&scope=bot%20applications.commands" className="text-white">ApplyEasy</a>
          </li>
          <li>
            <a href="#!" className="text-white">Coming soon</a>
          </li>
          <li>
            <a href="#!" className="text-white">Coming soon</a>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h5 className="uppercase font-bold mb-2.5 text-white">Other</h5>

        <ul className="list-none mb-0">
          <li>
            <a href="https://www.youtube.com/channel/UC_vLHElvsgyNC6x63W_DmNA" className="text-white">YouTube</a>
          </li>
          <li>
            <a href="https://github.com/uwtryfyfu" className="text-white">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/tryfyfu1" className="text-white">Twitter</a>
          </li>
          <li>
            <a href="/" className="text-white">Home</a>
          </li>
        </ul>
      </div>

      
    </div>
  </div>

  <div className="text-white text-center p-4 bg-neutral-800">
    © tryfyfu
  </div>
</footer>
    </div>
  );
}

export default App;
