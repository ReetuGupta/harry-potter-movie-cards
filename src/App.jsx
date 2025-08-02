import { Series } from "./components/Series";
import "./index.css"

export default function App() {
  return(
    <div className="flex gap-4 flex-col m-8 min-h-screen">
      <h1 className="text-center font-semibold text-5xl p-1 tracking-wide capitalize">
        Harry Potter Series
      </h1>
      <p className="text-center font-medium text-xl italic tracking-wide">
        (Click to stream your favorite movies)
      </p>
      <Series />
    </div>
  ) 
  
}

