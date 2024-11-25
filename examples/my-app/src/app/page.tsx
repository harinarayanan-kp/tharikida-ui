import Image from "next/image";
import { Button, CounterButton } from "tharikida-ui";

export default function Home() {
  return (
    <div className="">
      <CounterButton />
      <Button style={{ borderRadius: "30px"}} type={"primary"}>
        OKDA
      </Button>
    </div>
  );
}
