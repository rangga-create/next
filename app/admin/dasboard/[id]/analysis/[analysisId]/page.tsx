interface Admin {
  params: {
    id: string;
    analysisId: string;
  };
}

export default function AnalisisPage({ params }: Admin) {
  return (
    <div>
      <h1>Analisis Detail</h1>
      <p>ID: {params.id}</p>
      <p>Analisis ID: {params.analysisId}</p>
    </div>
  );
}