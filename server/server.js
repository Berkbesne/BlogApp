import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
const port = 5000;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());

// Posts: tüm gönderileri getir
app.get("/posts", async (req, res) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
});

// Posts: yeni gönderi ekle
app.post("/posts", async (req, res) => {
  try {
    const { name, title, content } = req.body;
    if (!name || !title || !content) {
      return res.status(400).json({ message: "Tüm alanlar zorunludur." });
    }
    const { data, error } = await supabase
      .from("posts")
      .insert([{ name, title, content }])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json({ message: "Gönderi eklendi!", post: data });
  } catch (error) {
    console.error("POST /posts hatası:", error);
    res.status(500).json({ message: error.message || "Sunucu hatası" });
  }
});

app.get("/contacts", async (req, res) => {
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Tüm alanlar zorunludur." });
    }

    const { data, error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json({ message: "Mesajınız kaydedildi!", contact: data });
  } catch (error) {
    console.error("POST /contact hatası:", error);
    res.status(500).json({ message: error.message || "Sunucu hatası" });
  }
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor`);
});
