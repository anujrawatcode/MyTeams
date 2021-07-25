import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
import Logout from './components/Logout';

const projectID = 'a9b99f66-453c-45d7-9478-55bccf236347';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
     
    <div>
     <ChatEngine
          height="100vh"
          projectID={projectID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      /> 
      <Logout />
    </div>
  )
};

// infinite scroll, logout, more customizations...

export default App;