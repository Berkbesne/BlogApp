import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ name: "", title: "", content: "" });

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Hata:", err));
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setPosts((prev) => [data.post, ...prev]);
      setForm({ name: "", title: "", content: "" });
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Anasayfa</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="İsminiz"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Başlık"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="İçerik"
          rows="4"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Gönder
        </button>
      </form>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
            <p className="text-sm text-gray-500 mt-2">Gönderen: {post.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
