import { ReactComponent as ReactLogo} from '../shield-solid.svg'

function Policy() {

  return (
    <div className="Privatpolicy">
    <div className="bg-gradient-to-r from-indigo-700 to-blue-500 text-white px-6 py-12">   
    <div className="">
      <div className="max-w-xl grid grid-cols-1 gap-5">
        <div className="w-10"><ReactLogo className="fill-purple-500"></ReactLogo></div>
        
  <h2 className="text-xl uppercase font-bold">ApplyEasy</h2>
  <h1 className="text-5xl">
    Privacy Policy</h1>
  <p className="text-lg">
    Would you like to know what the
     ApplyEasy Bot privacy policy is? 
     Then you are on the right page! 
     Below you
   can see a variety of information!</p>
   <button className="bg-gradient-to-r from-purple-500 to-indigo-700 py-2 px-5 rounded-md w-32" onClick={event =>  window.location.href='/'}>Go back</button>
</div>
</div>
</div>   

<div className="px-6 py-12 bg-gradient-to-l from-gray-400 to-white">
  <div className="max-w-sm mb-12">
  <h2 className="text-4xl">By using ApplyEasy, you must agree to the following privacy policy.</h2>
  </div>

  <div  id='view_page' className="grid grid-cols-2 gap-4">
    <div className="">
    <h3 className="text-2xl mb:text-2sm font-semibold mb-2">
    What information is stored?
      </h3>
<p className="text-lg mb:text-sm text-gray-800">
The following things are saved: the guild ID, a channel ID and the questions. These things can be saved with the /set-applylog and /config-questions commands! To find out more about the commands use /help on your discord server!
</p>
    </div>

<div>
<h3 className="text-2xl mb:text-2sm font-semibold mb-2">Why we store the information and how we use it?</h3>
<p className="text-lg mb:text-sm text-gray-800">
  The listed things are saved in order to let the
   bot's application system run on your server at all!
    The Guild ID is the most important thing!
     This is used to find your server at all. 
     The questions are clear to everyone. 
     These are used to have 5 questions for your 
     application system. You want to be able to 
     read the applications, don't you? Therefore, 
     the channel-id of the selected channel is saved 
     in /set-applylog to send the applications in there!
     </p>
</div>

  </div>
</div>

<div className="px-6 py-12 bg-gradient-to-l from-gray-400 to-white">
<div  id='view_page' className="grid grid-cols-2 gap-4">
    <div className="">
    <h3 className="text-2xl mb:text-2sm font-semibold mb-2">
    Who gets this data?
      </h3>
<p className="text-lg mb:text-sm text-gray-800">
Only the Discord Bot Owner can see/manage the stored data.
</p>
    </div>

<div>
<h3 className="text-2xl mb:text-2sm font-semibold mb-2">
Questions and Concerns.
</h3>
<p className="text-lg mb:text-sm text-gray-800">
  If you have any questions about this,
   you can join the support server (see footer) 
   or contact this email: <a className='text-neutral-900' href='mailto:sup.applyeasy@gmail.com'>Support Email</a>
     </p>
</div>

  </div>
</div>

<div className="px-6 py-12 bg-gradient-to-l from-gray-400 to-white">
<div  id='view_page' className="grid grid-cols-2 gap-4">
    <div className="">
    <h3 className="text-2xl mb:text-2sm font-semibold mb-2">
    How can i delete data?
      </h3>
<p className="text-lg mb:text-sm text-gray-800">
You can delete the saved data by 
removing the bot from your server, 
using the remove commands or 
writing the support email: <a className='text-neutral-900' href='mailto:sup.applyeasy@gmail.com'>Support Email</a>
</p>
    </div>

<div>
<h3 className="text-2xl mb:text-2sm font-semibold mb-2">
Last Update:
</h3>
<p className="text-lg mb:text-sm text-gray-800">
The last update of the Privacy Policy was on: 05/24/2022
     </p>
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

export default Policy;