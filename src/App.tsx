import GlobalStyles from "./styles/GlobalStyles";

// Импорты лекций
// import Lesson07 from "./lessons/Lesson07/Lesson07";

import Lesson08 from "./lessons/Lesson08/Lesson08";
import Lesson07 from "./lessons/Lesson07/Lesson07";
import Lesson09 from "./lessons/Lesson09/Lesson09";
import Lesson10 from "./lessons/Lesson10/Lesson10";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Лекция 7. Map, TS */}
      {/* <Lesson07/> */}
      {/* Лекция 08/ */}
      {/* <Lesson08 /> */}
      {/* Лекция 9. Контроль компонентов */}
      {/* <Lesson09 /> */}
      <Lesson10/>
    </>
  );
}

export default App;
