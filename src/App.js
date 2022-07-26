import First from "./components/First";
import Intro from "./components/Intro";
import Count from "./components/Count";
import Clock from "./components/Clock";
import Borad from "./components/Borad";
import UserClock from "./components/UserClock";

function App() {
  return (
    <div>
      <First name="sun" number={5} />
      <Intro name="Park sunhong" age={96} email="tjsghd0317@gmail.com" comment="안녕하세요. FE개발자입니다." />
      <Count/>
      <Clock timezone="Asia/Seoul" newTZ="US/Pacific" />
      <Clock timezone="Asia/Taipei" newTZ="US/Pacific" />
      <Borad category="드라마" />
      <UserClock timezone="Asia/Seoul" />
    </div>
  );
}

export default App;
