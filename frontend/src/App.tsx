import { C1Chat, ThemeProvider } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <ThemeProvider mode="light">
        <C1Chat apiUrl="/api/chat" agentName="AI-Stock-Assistant" />
      </ThemeProvider>
    </div>
  );
}

export default App;
