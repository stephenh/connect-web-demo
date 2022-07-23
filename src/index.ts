import { createConnectTransport, createPromiseClient } from "@bufbuild/connect-web";
import { ElizaService } from "src/proto/eliza_connectweb";

async function main() {
  const transport = createConnectTransport({ baseUrl: "https://demo.connect.build/" });
  const client = await createPromiseClient(ElizaService, transport);
  console.log(await client.say({ sentence: "I feel happy." }));
}

main().catch(console.error);
