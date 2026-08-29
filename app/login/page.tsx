import Link from "next/link";

export default function LoginPage() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f0f9f8",
      padding: "20px",
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
      }}>
        <h1 style={{ textAlign: "center", color: "#0d9488", fontSize: "32px", marginBottom: "30px" }}>
          IX FARMA
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: "#555", fontSize: "14px" }}>
            E-mail
          </label>
          <input type="email" placeholder="seu@email.com" style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px",
          }} />
        </div>
        <div style={{ marginBottom: "30px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: "#555", fontSize: "14px" }}>
            Senha
          </label>
          <input type="password" placeholder="******" style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px",
          }} />
        </div>
        <button style={{
          width: "100%",
          padding: "14px",
          background: "#0d9488",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}>
          Entrar
        </button>
        <p style={{ textAlign: "center", marginTop: "20px", color: "#888" }}>
          <Link href="/" style={{ color: "#0d9488" }}>Voltar ao inicio</Link>
        </p>
      </div>
    </div>
  );
}
