import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css';

const queryClient = new QueryClient()

function App() {

  const style = {
    minWidth: '100vw',
    minHeight: '100vh'
  }

  const webApp = window.Telegram.WebApp
  const initDataUnsafe = webApp.initDataUnsafe
  var webAppUser = initDataUnsafe.user

  const [userState, setUserState] = useState({
    webAppUser: webAppUser,
    userRole: getUserRole()
  })

  function getUserRole() {

  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-light" style={style}>
        <div className="container-sm">
          <p>Тест</p>
          <p>{JSON.stringify(userState.webAppUser, undefined, "    ")}</p>
          {/* <p>{webAppUser?.photo_url}</p> */}
          {/* <RoomPage userid={webAppUser.id} username = {webAppUser.first_name} room = {0} role = {0}/> */}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
