import Button from "./components/Button";
import Nav from "./components/Nav";

function App() {
  return (
    <section className="relative flex h-dvh w-screen flex-col justify-between">
      <Nav />
      <div className="flex flex-col py-[80px] h-dvh gap-[46px]">
        <div className="flex justify-center gap-[52px]">
          <Button content="시작하기" className="bg-[#0169F4] text-white" />
          <Button content="단어 삭제" className="bg-[#FAFAFA]" />
        </div>
        <div className="text-3xl font-bold underline flex justify-center">
          영상 들어올 파트
        </div>
        <div className="text-3xl font-bold underline flex justify-center">
          영상 들어올 파트
        </div>
      </div>
    </section>
  );
}

export default App;
