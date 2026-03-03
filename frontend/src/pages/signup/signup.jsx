import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import Footer from "../dashboard/Footer";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.user.name);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="auth-wrap">
        <form className="auth-card" onSubmit={onSubmit}>
          <p className="auth-eyebrow">Get Started</p>
          <h2>Create your account</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={onChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={onChange}
            required
          />
          {error && <p className="error-text">{error}</p>}
          <button className="auth-btn" type="submit" disabled={loading}>
            {loading ? "Creating..." : "Signup"}
          </button>
          <p className="auth-foot">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Signup;
