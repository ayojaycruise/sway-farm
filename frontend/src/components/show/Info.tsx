import GithubRepo from "./GithubRepo";
import Inventory from "./Inventory";
import ShowPlayerInfo from "./ShowPlayerInfo";
import type { ContractAbi } from "../../contracts/ContractAbi";
import type { PlayerOutput } from "../../contracts/ContractAbi";
import { cssObj } from "@fuel-ui/css";
import { Box } from "@fuel-ui/react";

interface InfoProps {
  player: PlayerOutput | null;
  contract: ContractAbi | null;
  updateNum: number;
  seeds: number;
  items: number;
}

export default function Info({
  player,
  contract,
  updateNum,
  seeds,
  items,
}: InfoProps) {
  return (
    <Box css={styles.container}>
      <Box css={styles.playerInfo}>
        <GithubRepo />
        <ShowPlayerInfo
          player={player}
          contract={contract}
          updateNum={updateNum}
        />
      </Box>
      <Inventory seeds={seeds} items={items} />
    </Box>
  );
}

const styles = {
  container: cssObj({
    position: "fixed",
    right: "0",
    top: "0",
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1000px",
    width: "calc(100vw - 4px)",
    "@sm": {
      position: "relative",
      top: "-150px",
      alignItems: "flex-end",
      width: "100%",
    },
  }),
  playerInfo: cssObj({
    display: "flex",
    flexDirection: "column-reverse",
    "@sm": {
      flexDirection: "column",
    },
  }),
};
