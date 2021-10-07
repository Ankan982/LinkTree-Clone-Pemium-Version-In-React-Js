import './App.css';
import Profile from './Profile';
import Links from  './Links';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import BookIcon from '@material-ui/icons/Book';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';



function App() {
  return (
    <div className="App">
    

     {/* Avatar component  */}
      <Profile />
     
     {/* Links component  passing the link number as a props  */}
      <Links title=' Join Me on Facebook'      icon={<FacebookIcon />}          url='https://www.facebook.com/AnkanDance'  />
      <Links title='Follow Me on Instagram'    icon={<InstagramIcon />}             url='https://www.instagram.com/ankaninperson/' />
      <Links title='Portfolio'                icon={<LanguageIcon/>}                 url='https://ankandas.netlify.app/' />
      <Links title='Twitter'               icon={<TwitterIcon />}                 url='https://twitter.com/ankan0008?s=08' />
      <Links title='Medium'                icon={<BookIcon />}                  url='https://ankandasx.medium.com/' />
      <Links title='Github'                 icon={<GitHubIcon />}                  url='https://github.com/Ankan982' />
      <Links title='Subscribe'              icon={<YouTubeIcon />}                   url='https://www.youtube.com/c/ankandas' />
      

     
       {/* Footer component  */}
    
  
    </div>
  );
}

export default App;
