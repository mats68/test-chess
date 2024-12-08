import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "chessground/assets/chessground.base.css";
import "chessground/assets/chessground.brown.css";
import "chessground/assets/chessground.cburnett.css";
import Chessground from "@react-chess/chessground";
import { Config } from "chessground/config";
import { Chess } from "chess.js";


function App() {

  const config: Config = {
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    // movable: {
    //   dests: 
      
    //   // dests: toDests(chess)
    // },
    events: {
      // dropNewPiece: (piece, key) => {
      //   console.log("dropNewPiece", piece, key);
      // },
      // change() {
      //   console.log("change");
      // },
      move(from, to, cap) {
        try {
          const res = chess.move({ from, to });
          const newKonfig = {
            ...konfig,
            fen: chess.fen(),
          };
          setKonfig(newKonfig);
          fen.current = chess.fen()
          //  console.log(res)
          // setFen(chess.fen());
        } catch (error) {
          const newKonfig = {
            ...konfig,
            fen: fen.current,
          };
          setKonfig(newKonfig);

          // setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
         console.error('err', error) 
        }
      },
      
    },
  };

  const [konfig, setKonfig] = useState(config);
  const fen = useRef("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  // const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
  const chess = new Chess(konfig.fen);

  // const turnColor = chess.turn() === "w" ? "white" : "black";
  // const handleMove = (from, to) => {
    
  //   setFen(chess.fen());
  // };

  

  const handleClkick = () => {
    const newKonfig = {
      ...konfig,
      fen: "r1bqkbnr/pp1ppppp/2n5/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    };
    setKonfig(newKonfig);
  };

  // const toDests = (chess: Chess) => {
  //   const dests = {};
  //   chess.SQUARES.forEach((s) => {
  //     const ms = chess.moves({ square: s, verbose: true });
  //     if (ms.length) dests[s] = ms.map((m) => m.to);
  //   });
  //   const color = chess.turn() === "w" ? "white" : "black";

  //   return {
  //     color, // who's turn is it
  //     dests, // what to move
  //     free: false,
  //   };
  // };

  return (
    <>
      <Chessground
        height={600}
        width={600}
        config={konfig}
      />
      <button onClick={handleClkick}>klick</button>
    </>
  );
}

export default App;
