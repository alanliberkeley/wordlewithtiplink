const express = require("express");
const { Tiplink } = require("@tiplink/api");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.json());

app.post("/create-tiplink", async (req, res) => {
  try {
    const tiplink = await Tiplink.create();
    res.json({ url: tiplink.url.toString(), publicKey: tiplink.keypair.publicKey.toBase58() });
  } catch (error) {
    res.status(500).json({ message: "Error creating Tiplink" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
