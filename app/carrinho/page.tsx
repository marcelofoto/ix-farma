import Link from "next/link";

const itensCarrinho = [
  { id: 1, nome: "Dipirona 500mg", preco: "R$ 8,90", quantidade: 2 },
  { id: 2, nome: "Paracetamol 750mg", preco: "R$ 12,50", quantidade: 1 },
  { id: 3, nome: "Vitamina C 1g", preco: "R$ 15,30", quantidade: 3 },
];

export default function CarrinhoPage() {
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
        <Link href="/produtos" style={{ color: "white" }}>Ver produtos</Link>
      </header>

      <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "30px", color: "#0d9488" }}>
          Carrinho de Compras
        </h2>

        {itensCarrinho.map((item) => (
          <div key={item.id} style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div>
              <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>{item.nome}</h3>
              <p style={{ color: "#888", fontSize: "14px" }}>
                Quantidade: {item.quantidade}
              </p>
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold", color: "#0d9488" }}>
              {item.preco}
            </p>
          </div>
        ))}

        <div style={{
          marginTop: "30px",
          padding: "20px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>Total:</span>
            <span style={{ fontSize: "22px", fontWeight: "bold", color: "#0d9488" }}>
              R$ 67,50
            </span>
          </div>
          <button style={{
            width: "100%",
            padding: "16px",
            background: "#0d9488",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}>
            Finalizar Compra
          </button>
        </div>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          <Link href="/" style={{ color: "#0d9488" }}>Voltar ao inicio</Link>
        </p>
      </div>
    </div>
  );
}
