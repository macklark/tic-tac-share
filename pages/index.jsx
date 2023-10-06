import Logo from "@/components/logo";
import Board from "@/components/board";
import Head from "next/head";

export default function Home() {
  return(
    <div className="flex flex-col mx-auto w-1/2">
      <Head>
        <title>Tic-Tac-Share</title>
        <meta name="Description" content="Tic-Tac-Share is a two player game of the classic Tic-Tac-Toe" />
      </Head>
      <Logo />
      <Board />
    </div>
  )
}
