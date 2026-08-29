import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
      color: "white",
      padding: "20px",
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        IX FARMA
      </h1>
      <p style={{ fontSize: "20px", marginBottom: "40px", opacity: 0.9 }}>
        Sistema de Farmacia Online
      </p>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/login" style={{
          padding: "16px 40px",
          background: "white",
          color: "#0d9488",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "18px",
        }}>
          Entrar
        </Link>
        <Link href="/produtos" style={{
          padding: "16px 40px",
          background: "transparent",
          color: "white",
          border: "2px solid white",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "18px",
        }}>
          Ver Produtos
        </Link>
      </div>
    </div>
  );
}
