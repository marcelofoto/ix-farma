import Link from "next/link";

const produtos = [
  { id: 1, nome: "Dipirona 500mg", preco: "R$ 8,90", categoria: "Analgésico" },
  { id: 2, nome: "Paracetamol 750mg", preco: "R$ 12,50", categoria: "Analgésico" },
  { id: 3, nome: "Amoxicilina 500mg", preco: "R$ 25,90", categoria: "Antibiótico" },
  { id: 4, nome: "Omeprazol 20mg", preco: "R$ 18,75", categoria: "Gastro" },
  { id: 5, nome: "Losartana 50mg", preco: "R$ 22,00", categoria: "Pressão" },
  { id: 6, nome: "Vitamina C 1g", preco: "R$ 15,30", categoria: "Vitamina" },
];

export default function ProdutosPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f0f9f8" }}>
      <header style={{
        background: "#0d9488",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <h1 style={{ fontSize: "24px" }}>IX FARMA</h1>
        <Link href="/" style={{ color: "white" }}>Voltar</Link>
      </header>

      <div style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "30px", color: "#0d9488" }}>
          Produtos
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}>
          {produtos.map((produto) => (
            <div key={produto.id} style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{produto.nome}</h3>
              <p style={{ color: "#888", fontSize: "14px", marginBottom: "12px" }}>
                {produto.categoria}
              </p>
              <p style={{ fontSize: "22px", fontWeight: "bold", color: "#0d9488" }}>
                {produto.preco}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
