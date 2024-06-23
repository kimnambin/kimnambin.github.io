import { TopNav } from "./TopNav/TopNav";
import { Profile } from "./Profile/Profile";
import { Skill } from "./Skill/Skill";
import { Project } from "./Project/Project";
import { Footer } from "./Footer/Footer";

function App() {
  return (
   <>
   <TopNav />
   <Profile id="ProfilePage"/>
   <Skill id="SkillPage"/>
   <Project id="ProjectPage"/>
   <Footer id="FooterPage"/>
  
   </>
  );
}
export default App;
