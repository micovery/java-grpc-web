import {useEffect, useState} from 'react'
import {DemoClient} from "demo-client-ts";


let client = new DemoClient({baseUrl: "http://localhost:10000"})

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("Some Message");
  const [reload, setReload] = useState<boolean>(true)

  async function handleClick() {
    let {response} = await client.sendMessage({message});
    console.log(response);
    setReload(true)
  }

  useEffect( function () {
    (async () => {
      if (!reload) return;

      let {response} = await client.getMessages({});
      setMessages(response.messages);

      setReload(false);
    })();
  }, [reload])

  return (
    <>
      <input value={message} onChange={e => setMessage(e.target.value)}/>
      <button onClick={handleClick}>Send Message</button>
      <h2>Messages:</h2>
      <div>
        {
          messages.map(function (message: string) {
            return <div>{message}</div>
          })
        }
      </div>
    </>
  )
}

export default App
