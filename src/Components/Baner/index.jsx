export default function Baner() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(assets/images/goar/project_IMage.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px", // Ajusta la altura según sea necesario
          width: "100%", // Ajusta el ancho según sea necesario
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white", // Cambia el color del texto según sea necesario
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", margin: "0" }}>
            Nuestros
          </h1>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", margin: "0" }}>
            Proyectos
          </h1>
          <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>
            Transformamos ideas en realidades innovadoras. Descubre cómo
            nuestros proyectos están redefiniendo el futuro.
          </p>
        </div>
      </div>
    </>
  );
}
